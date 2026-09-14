import type { Dictionary } from './dictionaries';

export function buildFaqJsonLd(t: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.product.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function buildSoftwareJsonLd(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trading Yantra',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description,
    offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
  };
}

export function buildContactJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Trading Yantra',
  };
}
