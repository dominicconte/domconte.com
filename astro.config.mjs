// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// The canonical production URL. Used for sitemap, canonical tags and OG URLs.
// This is an apex custom domain on GitHub Pages, so no `base` path is needed.
export default defineConfig({
  site: "https://domconte.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      // Strategy hub pages are the priority for indexing.
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],
  build: {
    // Emit /writing/slug/index.html style clean URLs.
    format: "directory",
  },
});
