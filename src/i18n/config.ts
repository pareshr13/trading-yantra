export const locales = ['en', 'hi', 'mr', 'gu'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Native names, shown in the language switcher — not translated further.
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
  gu: 'ગુજરાતી',
};

// BCP-47 tags for <html lang> and hreflang.
export const localeTags: Record<Locale, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
  gu: 'gu-IN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Pulls the locale out of an Astro.url.pathname — '/', '/product' => 'en';
// '/hi/product' => 'hi'. Mirrors Astro's own prefixDefaultLocale:false
// routing so components that only have the URL (not the page's lang prop)
// can still work out which locale they're in.
export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first && isLocale(first) ? first : defaultLocale;
}
