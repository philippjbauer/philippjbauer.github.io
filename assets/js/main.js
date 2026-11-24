// Dark mode: follow system preference, remember an explicit override.
(function () {
  var KEY = "pb-theme";
  var stored = localStorage.getItem(KEY);
  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(stored || (prefersDark ? "dark" : "light"));
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, next);
    apply(next);
  });
})();

// Nav strip: edge fades that say "more links this way", plus scrollspy that keeps the
// active link in view. Narrow screens scroll the strip; wide screens scroll the page.
(function () {
  var strip = document.querySelector(".nav-links");
  var header = document.querySelector(".site-header");
  if (!strip || !header) return;

  var links = [].slice.call(strip.querySelectorAll("a[href^='#']"));
  // Pairs, so a link whose target is missing drops out of both lists at once.
  var items = links
    .map(function (link) { return { link: link, section: document.getElementById(link.getAttribute("href").slice(1)) }; })
    .filter(function (item) { return !!item.section; });

  function keepInView(link) {
    if (strip.scrollWidth <= strip.clientWidth) return;
    // behavior: 'instant' overrides the page's smooth scroll-behavior, so the strip
    // lands on the active link instead of chasing it; block: 'nearest' keeps the sticky
    // header from dragging the page vertically.
    link.scrollIntoView({ behavior: "instant", inline: "nearest", block: "nearest" });
  }

  function setActive(link) {
    links.forEach(function (other) {
      var on = other === link;
      other.classList.toggle("active", on);
      if (on) other.setAttribute("aria-current", "true");
      else other.removeAttribute("aria-current");
    });
    if (link) keepInView(link);
  }

  function updateFades() {
    var max = strip.scrollWidth - strip.clientWidth - 1;
    strip.classList.toggle("fade-left", strip.scrollLeft > 4);
    strip.classList.toggle("fade-right", strip.scrollLeft < max);
  }
  strip.addEventListener("scroll", updateFades, { passive: true });

  var visible = {};
  var observer = null;

  function onIntersect(entries) {
    entries.forEach(function (entry) {
      visible[entry.target.id] = entry.isIntersecting;
    });
    // At the very bottom the last section can be too short to reach the band while the
    // one above it is still inside it, so this wins over the earliest-visible pick.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      // Blog routes resolve to no section at all, so there is nothing to claim.
      if (items.length) setActive(items[items.length - 1].link);
      return;
    }
    // The latest section inside the band wins: two sections overlap the band while one
    // is leaving and the next entering, and the entering one is what the reader is at.
    for (var i = items.length - 1; i >= 0; i--) {
      if (visible[items[i].section.id]) { setActive(items[i].link); return; }
    }
    // Nothing in the band: the hero, above the first section, claims no link.
    setActive(null);
  }

  // The observed band starts below the sticky header; its height changes at the nav
  // breakpoint, and rootMargin cannot be reassigned, so the observer is rebuilt.
  function watch() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(onIntersect, {
      rootMargin: "-" + (header.offsetHeight + 4) + "px 0px -55% 0px",
      threshold: 0
    });
    items.forEach(function (item) { observer.observe(item.section); });
  }
  watch();

  links.forEach(function (link) {
    link.addEventListener("click", function () { setActive(link); });
  });

  // Reaching the bottom changes no intersection, so the last section needs a scroll
  // edge: without it the second-to-last link stays active at the foot of the page.
  var bottomFired = false;
  window.addEventListener("scroll", function () {
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom && !bottomFired && items.length) { bottomFired = true; setActive(items[items.length - 1].link); }
    else if (!atBottom) { bottomFired = false; }
  }, { passive: true });

  var lastHeaderH = header.offsetHeight;
  var resizeTimer;
  window.addEventListener("resize", function () {
    updateFades();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (header.offsetHeight !== lastHeaderH) {
        lastHeaderH = header.offsetHeight;
        watch();
      }
    }, 150);
  });

  updateFades();
})();

document.getElementById("year").textContent = new Date().getFullYear();
