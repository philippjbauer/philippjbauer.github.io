# Philipp Bauer: profile site and blog

One Jekyll site, deployed to GitHub Pages at [philippbauer.org](https://philippbauer.org). The
landing page is the job-hunt profile, and the blog lives under `/blog/`. Both share a header, a
footer, one stylesheet, and the dark mode toggle.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Profile page: expertise, experience, video courses, speaking, writing, contact |
| `/blog/` | Blog index: latest article plus the archive |
| `/blog/<slug>/` | One article |
| `/blog/about/` | Short personal bio, the blog's own about page |
| `/blog/feed.xml` | Atom feed |
| `/404.html` | Not found page, GitHub Pages serves it |
| `/resume.pdf` | Résumé, generated from `resume.html` |

## Structure

- `index.html`: profile page content. Front matter drives its title, social card, and structured
  data. The Writing section comes from `_includes/writing.html`.
- `_layouts/base.html`: the whole page head plus the shell around every route. Metadata reads
  these front matter keys: `title`, `full_title`, `description`, `og_title`, `og_description`,
  `og_type`, `image`, `image_alt`, `robots`, `head_extra`.
- `_layouts/post.html`, `_layouts/page.html`: article and page bodies.
- `_includes/`: `site-header.html` (nav), `site-footer.html`, `writing.html` (three most recent
  posts), `post-hero.html` (article image and its disclaimer), `post-nav.html` (earlier and later
  links), `head-home.html` (the `Person` and `VideoObject` JSON-LD, landing page only).
- `assets/css/style.css`: design tokens, profile components, then the blog section at the end.
  Dark mode is the `[data-theme="dark"]` block, switched by `assets/js/main.js` and stored in
  `localStorage` under `pb-theme`.
- `assets/js/background.js`: the contour canvas behind the page.
- `assets/posts/`: article images. `assets/img/`: portraits, favicons, the social card.

## Build and serve

```sh
bundle install
bundle exec jekyll serve
```

## Adding a post

Drop a dated file in `_posts`, say `2026-05-14-my-topic.md`. Front matter takes `title`, `date`,
`description`, `categories`, `image`, and `image_alt`. Nothing else: `_config.yml` gives every post
the `post` layout and the URL `/blog/<slug>/`, so a new article appears in the blog index, in the
Writing section on the landing page, in the feed, and in the sitemap on the next build.

Article images belong in `assets/posts/<slug>/` and get referenced from the root:
`/assets/posts/my-topic/figure.jpg`. Posts sit one level below the domain, so a relative path like
`../assets/` resolves to `/blog/assets/` and 404s.

## Résumé

`resume.pdf` is generated, never edited by hand:

```sh
python3 build_resume.py   # needs: python3 -m playwright install chromium
```

The page size and margins live in the `@page` rule in `resume.html`. Regenerate the PDF whenever
the résumé content changes and commit both files. `resume.html` carries a `noindex` meta tag and
stays out of the sitemap, a rule set in `_config.yml` because the file has no front matter of its
own (`build_resume.py` renders it as-is).

## Domain and the old blog host

`CNAME` holds `philippbauer.org`. GitHub Pages serves one custom domain per site, so
`blog.philippbauer.org` is redirected in Cloudflare with a rule of this shape:

```
hostname equal to blog.philippbauer.org
→ 301 https://philippbauer.org/blog/:splat
```

Every old article URL keeps its slug, so `blog.philippbauer.org/go-local-or-go-broke/` arrives at
`/blog/go-local-or-go-broke/`. The feed is generated at `/blog/feed.xml` for the same reason: the
old `/feed.xml` address lands on a working feed. `robots.txt` is per hostname, and the copy here
opts the site out of AI training while leaving search crawlers alone.
