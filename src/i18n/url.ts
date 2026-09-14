import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './config';

// Wraps Astro's built-in i18n URL builder, which already folds in both the
// configured `base` and the locale prefix (English unprefixed, others under
// /hi/, /mr/, /gu/ per astro.config.mjs's prefixDefaultLocale:false) — so
// this is the one function every internal link in the app should go
// through. Replaces the plain withBase() from src/utils/url.ts for anything
// that needs to stay on the current language when linking between pages.
export function localizedPath(lang: Locale, path: string): string {
  return getRelativeLocaleUrl(lang, path);
}

// The inverse of localizedPath's prefixing: given the current page's full
// pathname (e.g. '/hi/product') and its own locale, returns the bare path
// ('/product') other helpers (nav active-state, the language switcher) key
// off. English has no prefix (prefixDefaultLocale:false), so there's
// nothing to strip for it.
export function stripLocalePrefix(pathname: string, lang: Locale): string {
  if (lang === 'en') return pathname;
  const prefix = `/${lang}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
