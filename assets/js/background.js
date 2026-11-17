/* Ambient background: topographic contour lines that morph slowly, bent and
   brightened by the pointer. Colour and opacity are read from the CSS
   custom properties, so the theme toggle stays the single source of truth; a
   MutationObserver on data-theme catches every change, whoever makes it.

   Three numbers decide what a frame costs: field samples (CSS area / CELL^2),
   device pixels rastered and composited (the backing store), and the tick rate.
   All three are capped here, because a 3456x2234 panel would otherwise pay for
   six million pixels thirty times a second. Every easing is expressed as a time
   constant rather than a per-frame fraction, so a slower tick changes the cost
   of the animation and nothing else about it. */
(function () {
  var canvas = document.getElementById("bg-canvas");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var root = document.documentElement;
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  var LEVEL_MIN = -1.1;      // field is normalised to -1..1; levels bracket that range
  var LEVEL_GAP = 0.16;      // ~90-140px between lines at this field gradient
  var WARP = 150;            // px: domain-warp displacement; meanders the ridges
  var SUMMIT_X = 520;        // px in field space: centre of the radial term
  var SUMMIT_Y = 300;
  var INDEX_EVERY = 4;       // every 4th contour is bolder, as on a printed topo map
  var INDEX_WEIGHT = 2;
  var TIME_PER_SEC = 0.075;  // field-time advance per real second
  var SCROLL_SHIFT = 0.12;   // fraction of scroll distance applied to the field, for depth
  var BUMP_R = 260;          // pointer influence radius in CSS px
  var BUMP_SIGMA2 = 2 * 130 * 130;
  var BUMP_AMOUNT = 0.5;     // field units the pointer lifts the terrain by
  var HIGHLIGHT_MULT = 2.6;  // contour opacity multiplier under the pointer
  var TAU2 = Math.PI * 2;

  // CELL_BASE^2 * MAX_SAMPLES is the CSS area the base grid covers. Past that
  // CELL widens instead of the grid, which holds sample count, segment count and
  // their cost flat while the terrain itself keeps its physical scale.
  var CELL_BASE = 15;
  var MAX_SAMPLES = 11000;
  var MAX_SURFACE = 2600000; // device pixels in the backing store
  var DPR_CAP = 2;
  // The terrain drifts at roughly 3 px/s, so a slow tick gives up nothing you can
  // see; the faster rate exists for the pointer halo, which chases a real cursor.
  var TICK_ACTIVE = 50;      // ms per frame while the pointer or scroll is moving
  var TICK_IDLE = 83;        // ms per frame for the unattended drift
  var SETTLE_MS = 400;       // quiet time before dropping back to TICK_IDLE
  var TAU_POS = 0.21;        // seconds: halo catching up with the pointer
  var TAU_BUMP = 0.46;       // seconds: plateau rising and sinking
  var TAU_SCROLL = 0.31;     // seconds: parallax catching up with scroll

  // Interpolated sine table. Six Math.sin calls per grid sample used to make the
  // field the costliest part of a frame (3 ms at 3456x2234); the table replaces
  // all six for a worst-case error of ~1e-6 against a level gap of 0.16. The
  // 2^20 offset, a multiple of SIN_N, keeps the index positive for negative
  // angles, whose low bits wrap correctly through the mask.
  var SIN_N = 4096;
  var SIN_MASK = SIN_N - 1;
  var SIN_K = SIN_N / TAU2;
  var SIN_TAB = new Float32Array(SIN_N + 1);
  for (var s = 0; s <= SIN_N; s++) SIN_TAB[s] = Math.sin((s * TAU2) / SIN_N);

  function fsin(x) {
    var t = x * SIN_K + 1048576;
    var i = t | 0;
    var k = i & SIN_MASK;
    var lo = SIN_TAB[k];
    return lo + (SIN_TAB[k + 1] - lo) * (t - i);
  }

  // Marching-squares edge pairs per case, bits: 1 top-left, 2 top-right,
  // 4 bottom-right, 8 bottom-left. Edges: 0 top, 1 right, 2 bottom, 3 left.
  // Cases 5 and 10 are saddles and emit both segments.
  var CASE_EDGES = [
    [], [0, 3], [0, 1], [3, 1], [1, 2], [0, 3, 1, 2], [0, 2], [3, 2],
    [2, 3], [0, 2], [0, 1, 2, 3], [1, 2], [3, 1], [0, 1], [0, 3], []
  ];

  var w = 0, h = 0, cols = 0, rows = 0, cell = CELL_BASE;
  var grid = new Float32Array(0);
  var levelCount = 0, levelValue = [];
  var seg = [], segLen = [], segHl = [], segHlLen = [];  // segment pools per level, reused
  var ex = [0, 0, 0, 0], ey = [0, 0, 0, 0];
  var accent = "#b4552d", baseAlpha = 0.12;
  var time = 0, lastFrame = 0, rafId = 0, needsResize = true;
  var pointerX = 0, pointerY = 0, bumpX = 0, bumpY = 0, bump = 0, bumpTarget = 0;
  var lastPointerMove = -1e9, lastScrollMove = -1e9;
  // Matched to the current position so a mid-page reload does not glide the
  // terrain on the first scroll event.
  var scrollTarget = window.scrollY * SCROLL_SHIFT, scrollShift = scrollTarget;
  var canHover = window.matchMedia("(hover: hover)").matches;

  function readTheme() {
    var style = getComputedStyle(root);
    var color = style.getPropertyValue("--accent").trim();
    var alpha = parseFloat(style.getPropertyValue("--bg-art-alpha"));
    if (color) accent = color;
    if (!isNaN(alpha)) baseAlpha = alpha;
  }

  function resize() {
    var cw = canvas.clientWidth || window.innerWidth;
    var ch = canvas.clientHeight || window.innerHeight;
    var dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    // Drawing happens in CSS px; the transform maps them onto the backing store,
    // which the compositor stretches to the element. Under a retina panel that
    // upscale is invisible at this opacity and saves most of the raster cost.
    // Never go below one backing pixel per CSS pixel: a 1px contour stroked into
    // less than one pixel loses ink instead of only losing sharpness, which on a
    // 3456x2234 panel at dpr 1 measured as 31/255 peak alpha against 54 native.
    var scale = Math.min(dpr, Math.max(1, Math.sqrt(MAX_SURFACE / Math.max(1, cw * ch))));
    var bw = Math.max(1, Math.round(cw * scale));
    var bh = Math.max(1, Math.round(ch * scale));
    if (canvas.width !== bw) canvas.width = bw;
    if (canvas.height !== bh) canvas.height = bh;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    w = cw;
    h = ch;
    cell = CELL_BASE * Math.max(1, Math.sqrt((cw * ch) / (CELL_BASE * CELL_BASE * MAX_SAMPLES)));
    cols = Math.ceil(cw / cell) + 1;
    rows = Math.ceil(ch / cell) + 1;
    if (grid.length !== cols * rows) grid = new Float32Array(cols * rows);
    needsResize = false;
  }

  // One pass over the sample grid. Everything that depends only on the row is
  // hoisted: the domain warp along x, and the radial term's dy squared.
  function fillGrid() {
    var t = time, sc = scrollShift;
    var wY = t * 0.45, wX = -t * 0.32, tA = t * 0.5, tB = -t * 0.7, tC = t * 0.9, tD = t * 0.4;
    var lift = bump, lifting = lift > 0.002;
    var reach2 = 4 * BUMP_R * BUMP_R;
    var i = 0, ri, ci, py, y, warpX, qy, qy2, x, wx, wy, qx, v, dx, d2;
    for (ri = 0; ri < rows; ri++) {
      py = ri * cell;
      y = py + sc;
      warpX = WARP * fsin(y * 0.0031 + wY);
      qy = y - SUMMIT_Y;
      qy2 = qy * qy;
      for (ci = 0; ci < cols; ci++) {
        x = ci * cell;
        wx = x + warpX;
        wy = y + WARP * fsin(x * 0.0027 + wX);
        qx = x - SUMMIT_X;
        v = (fsin(wx * 0.0165 + wy * 0.006 + tA) +
             0.9 * fsin(wy * 0.014 - wx * 0.0075 + tB) +
             0.6 * fsin((wx * 0.7 - wy) * 0.021 + tC) +
             0.4 * fsin(Math.sqrt(qx * qx + qy2) * 0.009 + tD)) / 2.9;
        if (lifting) {
          dx = x - bumpX;
          d2 = dx * dx + (py - bumpY) * (py - bumpY);
          if (d2 < reach2) v += lift * Math.exp(-d2 / BUMP_SIGMA2);
        }
        grid[i++] = v;
      }
    }
  }

  function buildLevels() {
    levelCount = Math.floor((1.1 - LEVEL_MIN) / LEVEL_GAP) + 1;
    levelValue = [];
    for (var k = 0; k < levelCount; k++) {
      levelValue.push(LEVEL_MIN + k * LEVEL_GAP);
      seg.push(new Float32Array(1024));
      segLen.push(0);
      segHl.push(new Float32Array(256));
      segHlLen.push(0);
    }
  }

  function grow(pool, need) {
    var bigger = new Float32Array(Math.max(need, pool.length * 2, 1024));
    bigger.set(pool);
    return bigger;
  }

  function emit(out, n, edges) {
    for (var p = 0, a, b; p < edges.length; p += 2) {
      a = edges[p];
      b = edges[p + 1];
      out[n] = ex[a];
      out[n + 1] = ey[a];
      out[n + 2] = ex[b];
      out[n + 3] = ey[b];
      n += 4;
    }
    return n;
  }

  // Cells holding one corner value each are cheap to reject: the level range a
  // cell can contain decides which contours are worth testing at all. While the
  // pointer lift is visible, cells under it are recorded a second time into the
  // highlight pools, so the brightening pass covers the halo rather than every
  // contour on screen.
  function trace(hlActive) {
    var k, ci, ri, row, e, edges, tl, tr, br, bl, lo, hi, kStart, kEnd, level, out, n, dx, dy;
    for (k = 0; k < levelCount; k++) {
      segLen[k] = 0;
      segHlLen[k] = 0;
    }
    var hx = bumpX, hy = bumpY;
    var reach = BUMP_R + cell;
    var reach2 = reach * reach;
    var half = cell * 0.5;
    for (ri = 0; ri < rows - 1; ri++) {
      var y0 = ri * cell;
      for (ci = 0; ci < cols - 1; ci++) {
        row = ri * cols + ci;
        tl = grid[row];
        tr = grid[row + 1];
        br = grid[row + cols + 1];
        bl = grid[row + cols];
        lo = Math.min(tl, tr, br, bl);
        hi = Math.max(tl, tr, br, bl);
        kStart = Math.ceil((lo - LEVEL_MIN) / LEVEL_GAP);
        if (kStart < 0) kStart = 0;
        kEnd = Math.floor((hi - LEVEL_MIN) / LEVEL_GAP);
        if (kEnd > levelCount - 1) kEnd = levelCount - 1;
        if (kStart > kEnd) continue;
        var x0 = ci * cell;
        var near = false;
        if (hlActive) {
          dx = x0 + half - hx;
          dy = y0 + half - hy;
          near = dx * dx + dy * dy < reach2;
        }
        for (k = kStart; k <= kEnd; k++) {
          level = levelValue[k];
          e = 0;
          if (tl > level) e = 1;
          if (tr > level) e |= 2;
          if (br > level) e |= 4;
          if (bl > level) e |= 8;
          edges = CASE_EDGES[e];
          if (edges.length === 0) continue;
          ex[0] = x0 + cell * ((level - tl) / (tr - tl)); ey[0] = y0;
          ex[1] = x0 + cell; ey[1] = y0 + cell * ((level - tr) / (br - tr));
          ex[2] = x0 + cell * ((level - bl) / (br - bl)); ey[2] = y0 + cell;
          ex[3] = x0; ey[3] = y0 + cell * ((level - tl) / (bl - tl));
          n = segLen[k];
          out = seg[k];
          if (n + edges.length * 2 > out.length) out = seg[k] = grow(out, n + edges.length * 2);
          segLen[k] = emit(out, n, edges);
          if (near) {
            n = segHlLen[k];
            out = segHl[k];
            if (n + edges.length * 2 > out.length) out = segHl[k] = grow(out, n + edges.length * 2);
            segHlLen[k] = emit(out, n, edges);
          }
        }
      }
    }
  }

  // One stroke per level: separate paths are what let contours of different
  // levels darken where they cross, which merging them into one path would lose.
  function strokePools(pools, lens, style, scale) {
    var k, i, out, n, alpha;
    ctx.strokeStyle = style;
    for (k = 0; k < levelCount; k++) {
      n = lens[k];
      if (n === 0) continue;
      alpha = baseAlpha * (k % INDEX_EVERY === 0 ? INDEX_WEIGHT : 1) * scale;
      if (alpha > 1) alpha = 1;
      ctx.globalAlpha = alpha;
      out = pools[k];
      ctx.beginPath();
      for (i = 0; i < n; i += 4) {
        ctx.moveTo(out[i], out[i + 1]);
        ctx.lineTo(out[i + 2], out[i + 3]);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function draw() {
    if (!grid.length) return;
    var press = bump / BUMP_AMOUNT;
    var hl = press > 0.01;
    ctx.clearRect(0, 0, w, h);
    fillGrid();
    trace(hl);
    ctx.lineWidth = 1;
    strokePools(seg, segLen, accent, 1);
    // Second pass under the pointer: a plateau lift moves contours without
    // removing them, so the pointer also brightens the ones it bends.
    if (hl) {
      var grad = ctx.createRadialGradient(bumpX, bumpY, 0, bumpX, bumpY, BUMP_R);
      // The fade runs through transparent rather than accent-at-zero-alpha, so
      // mid-radius ink lands a shade deeper than the base lines.
      grad.addColorStop(0, accent);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.save();
      ctx.beginPath();
      ctx.arc(bumpX, bumpY, BUMP_R, 0, TAU2);
      ctx.clip();
      strokePools(segHl, segHlLen, grad, HIGHLIGHT_MULT * press);
      ctx.restore();
    }
  }

  function frame(now) {
    rafId = requestAnimationFrame(frame);
    var elapsed = now - lastFrame;
    var moving = now - lastPointerMove < SETTLE_MS || now - lastScrollMove < SETTLE_MS;
    var easing = Math.abs(bumpTarget - bump) > 0.002 ||
                 Math.abs(scrollTarget - scrollShift) > 0.5 ||
                 Math.abs(pointerX - bumpX) > 0.5 ||
                 Math.abs(pointerY - bumpY) > 0.5;
    if (elapsed < (moving || easing ? TICK_ACTIVE : TICK_IDLE)) return;
    var dt = Math.min(elapsed / 1000, 0.1);
    lastFrame = now;
    if (needsResize) resize();
    time += dt * TIME_PER_SEC;
    bumpX += (pointerX - bumpX) * (1 - Math.exp(-dt / TAU_POS));
    bumpY += (pointerY - bumpY) * (1 - Math.exp(-dt / TAU_POS));
    bump += (bumpTarget - bump) * (1 - Math.exp(-dt / TAU_BUMP));
    scrollShift += (scrollTarget - scrollShift) * (1 - Math.exp(-dt / TAU_SCROLL));
    draw();
  }

  function start() {
    if (rafId || motionQuery.matches) return;
    lastFrame = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (!rafId) return;
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  // Static single frame under prefers-reduced-motion: the pattern stays, the motion does not.
  function renderStill() {
    stop();
    time = 2.4;
    bump = 0;
    scrollShift = 0;
    if (needsResize) resize();
    draw();
  }

  window.addEventListener("resize", function () {
    needsResize = true;
    if (motionQuery.matches) renderStill();
  });

  window.addEventListener("scroll", function () {
    scrollTarget = window.scrollY * SCROLL_SHIFT;
    lastScrollMove = performance.now();
  }, { passive: true });

  if (canHover) {
    window.addEventListener("pointermove", function (ev) {
      pointerX = ev.clientX;
      pointerY = ev.clientY;
      lastPointerMove = performance.now();
      // Snap on first contact, otherwise the halo slides in diagonally from the corner.
      if (bump < 0.002) { bumpX = pointerX; bumpY = pointerY; }
      bumpTarget = BUMP_AMOUNT;
    }, { passive: true });
    // mouseleave does not bubble, so it has to sit on document itself.
    document.addEventListener("mouseleave", function () { bumpTarget = 0; });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else if (!motionQuery.matches) start();
  });

  motionQuery.addEventListener("change", function () {
    if (motionQuery.matches) renderStill();
    else start();
  });

  new MutationObserver(function () {
    readTheme();
    if (!rafId) draw();
  }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  buildLevels();
  readTheme();
  if (motionQuery.matches) renderStill();
  else start();
})();
