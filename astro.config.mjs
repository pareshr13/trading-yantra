// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the real production domain once registered/deployed —
  // the sitemap and every canonical/OG URL are derived from this.
  site: 'https://tradingyantra.in',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
