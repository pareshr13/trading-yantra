// Astro's `base` config (set to '/trading-yantra' only for the GitHub Pages
// build, see astro.config.mjs) is NOT applied automatically to plain string
// href/src attributes — only to assets Astro itself manages. Every internal
// link and public/ asset reference in this project goes through withBase()
// so the site works both at the domain root (default) and under a Pages
// project subpath.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|#)/i.test(path)) return path; // absolute URL, mailto:, tel:, #anchor
  return `${base}${path}`;
}
