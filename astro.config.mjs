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

  // English keeps today's un-prefixed URLs (prefixDefaultLocale: false) so
  // nothing already indexed moves; Hindi/Marathi/Gujarati live under
  // /hi/, /mr/, /gu/. See src/i18n/ for the dictionaries and
  // src/components/LanguageSwitcher.astro for how links between locales are
  // built (getRelativeLocaleUrl, not withBase).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'mr', 'gu'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()]
});
