# domconte.com

The personal brand and portfolio site for **Dom Conte** - legal-tech founder, builder and speaker. Built with [Astro](https://astro.build), styled with Tailwind, and deployed free to **GitHub Pages** under a custom domain.

It's the flagship hub in a name-search strategy: own page one of Google for "Dom Conte" and "Dominic Conte". Everything here is built with that in mind - Person schema, clean URLs, a Markdown writing engine, a sitemap, and fast, accessible pages.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
npm run format   # format with Prettier
```

Requires Node 18.20+, 20.3+, or 22+ (you have v22).

---

## Design system - "Editorial Ink"

A warm, editorial, light theme - distinct from Purple's brand.

- **Palette:** parchment `#F7F4EE`, ink `#1A1A1A`, stone `#6B6660`, hairline `#E2DDD3`, forest-green accent `#1F3D2F` (oxblood `#5C2A2A` available as an alternate). Defined in `tailwind.config.mjs`.
- **Type:** Newsreader (editorial serif headlines), Inter (body), JetBrains Mono (metadata labels). Self-hosted via `@fontsource`, so no external requests and no layout shift.
- **Motion:** tasteful scroll-reveal and a one-time hero reveal. All motion respects `prefers-reduced-motion`.

To switch the accent from forest to oxblood, change the `forest` colour value in `tailwind.config.mjs`.

---

## Project structure

```
src/
  config/site.ts          # >>> single source of truth for your personal info <<<
  layouts/BaseLayout.astro # <head>, SEO, Person schema, header/footer, skip link
  components/             # Header, Footer, Seo, PersonSchema, cards, CTA, etc.
  content/
    config.ts            # typed frontmatter schemas (Zod)
    writing/  *.md        # articles - add a file to publish
    projects/ *.md        # legal-AI project case studies
    labs/     *.md        # Limelight Labs - personal apps outside law
    media/    *.md        # press / podcast entries
  pages/                 # routes (index, about, writing, work, labs, projects, media, contact, 404)
  styles/global.css      # base styles, fonts, prose, grain, motion
public/                  # static assets (CNAME, robots.txt, favicon, images)
.github/workflows/deploy.yml  # auto-deploy to GitHub Pages on push to main
```

---

## Adding content

### A new article

Create `src/content/writing/my-article.md`:

```markdown
---
title: "My article title"
description: "One sentence summary - shown in listings and search results."
pubDate: 2026-06-21
pillar: "Legal AI in practice" # optional, one of the five content pillars
featured: false # set true to surface on the home page
draft: false # true hides it from the site + sitemap
---

Your article body in Markdown.
```

It will appear automatically on `/writing/` and in the RSS feed. The URL is `/writing/my-article/`.

### A new project or media item

Same idea - drop a Markdown file into `src/content/projects/` or `src/content/media/`. The frontmatter fields are validated against `src/content/config.ts`, which is the place to check what each field expects.

---

## >>> Customise this <<< (before launch)

A few things still need your real details:

1. **`src/config/site.ts`** - your real social/profile URLs (`socials` + the `sameAs` array that powers the Person schema). The contact email (`dom@limelightlabs.co.uk`) is already set here.
2. **Headshot** - overwrite `public/dom-conte.jpg` with your real photo (keep the same filename; a portrait around 640×800 or larger works well). The current file is a "drop your photo here" placeholder.
3. **Social card / favicon** - regenerate any time with `node scripts/generate-assets.mjs` (produces `og-image.png`, favicon and app icons). Edit that script to tweak the design.
4. **Bio** - refine the bio in `src/pages/about.astro` in your own words.
5. **Sample content** - the articles and legal-AI projects are solid first drafts; replace or extend them. The Labs entries (`src/content/labs/`) are real and ready.
6. **Media & speaking** - add appearances as Markdown files in `src/content/media/` (they show on the combined Media & Speaking page and the home "As featured in" strip). Speaking topics live in `src/pages/media.astro`.

### Person schema (`sameAs`)

The `sameAs` URLs in `src/config/site.ts` tell Google that your LinkedIn, X, Crunchbase and GitHub profiles are all the same person (you). Use your **real, exact** profile URLs - this is the core of the entity strategy.

---

## Deployment to GitHub Pages

The repo auto-builds and deploys on every push to `main` via `.github/workflows/deploy.yml` (no manual `gh-pages` branch needed).

### One-time setup

1. **Push the repo** to GitHub under your account.
2. In the repo: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. Still in **Settings → Pages**, set the **Custom domain** to `domconte.com` and save. (The `public/CNAME` file already sets this too.) Then **verify the domain** when prompted.
4. Tick **Enforce HTTPS** (may take a few minutes to become available after DNS resolves).

### DNS at your registrar

Point the apex domain at GitHub's servers:

| Type  | Host | Value                    |
| ----- | ---- | ------------------------ |
| A     | @    | `185.199.108.153`        |
| A     | @    | `185.199.109.153`        |
| A     | @    | `185.199.110.153`        |
| A     | @    | `185.199.111.153`        |
| AAAA  | @    | `2606:50c0:8000::153`    |
| AAAA  | @    | `2606:50c0:8001::153`    |
| AAAA  | @    | `2606:50c0:8002::153`    |
| AAAA  | @    | `2606:50c0:8003::153`    |
| CNAME | www  | `dominicconte.github.io` |

DNS can take up to ~24 hours to propagate (usually much less).

> **GitHub username.** The account is `dominicconte` (renamed from `hawksight12`, per the brand plan). If your `www` CNAME still points at `hawksight12.github.io`, update it to `dominicconte.github.io` - leaving it on the old name is a subdomain-takeover risk once that username is free to claim.

### After it's live

- Add the property in **[Google Search Console](https://search.google.com/search-console)** and submit `https://domconte.com/sitemap-index.xml`.
- Validate the Person schema with the [Rich Results Test](https://search.google.com/test/rich-results).
- Set up Google Alerts for "Dom Conte" and "Dominic Conte".

---

## Accessibility, SEO & performance

- Semantic landmarks, skip-to-content link, visible focus rings, keyboard-navigable menu, WCAG AA contrast.
- `prefers-reduced-motion` fully respected.
- Per-page titles/descriptions/canonical/Open Graph, Person + Article JSON-LD, sitemap, robots.txt, RSS.
- Near-zero JavaScript (Astro ships static HTML); self-hosted fonts; should score ~100 across Lighthouse.

Built with Astro. Licensed for personal use by Dom Conte.
