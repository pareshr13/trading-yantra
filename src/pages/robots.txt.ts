import type { APIRoute } from 'astro';
import { withBase } from '../utils/url';

// Generated (not a static public/ file) so its Sitemap: URL always matches
// whichever build produced it — the real domain normally, or the GitHub
// Pages preview when GH_PAGES=true (see astro.config.mjs).
export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL('https://tradingyantra.in');
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), siteUrl);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
