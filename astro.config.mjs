// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GH_PAGES is set by .github/workflows/deploy.yml for the GitHub Pages
// build only — a project page is served at github.io/<repo>/, so that build
// needs `base` set to the repo name. Every other build (local dev, and a
// future custom-domain deploy) serves from the root and needs no base.
// See src/utils/url.ts — every internal href/src goes through withBase() so
// this single flag is all that has to change between the two.
const isGhPages = process.env.GH_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  // TODO: once tradingyantra.in is registered and pointed at your real host,
  // switch this back to that domain and drop `base` — the sitemap and every
  // canonical/OG URL are derived from `site`.
  site: isGhPages ? 'https://pareshr13.github.io' : 'https://tradingyantra.in',
  base: isGhPages ? '/trading-yantra' : '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
