// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain's root (see public/CNAME) — GitHub Pages
  // maps a verified custom domain to the project site's root, no /trading-
  // yantra/ subpath needed, so `base` stays '/' everywhere: local dev, the
  // GitHub Pages build, and any future host. withBase() in src/utils/url.ts
  // is now a no-op but stays in place in case a subpath is ever needed again
  // (e.g. previewing on the bare github.io URL).
  site: 'https://tradingyantra.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
