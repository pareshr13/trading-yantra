// Simplified, plain-language English copy — the source of truth other
// locales translate from. Keep sentences short and concrete; avoid jargon
// unless it's immediately explained. See src/i18n/dictionaries/hi.ts etc.
// for the Dictionary type all four files share.

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: 'brain' | 'chart' | 'candlestick' | 'shield' | 'bell' | 'chart-pattern';
  title: string;
  description: string;
}

export interface Step {
  step: string;
  title: string;
  body: string;
}

export interface ProductSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  metricLabel: string;
  metricValue: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Dictionary {
  meta: {
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    product: string;
    contact: string;
    cta: string;
  };
  footer: {
    description: string;
    productHeading: string;
    productLinks: [string, string, string, string];
    companyHeading: string;
    aboutLink: string;
    productLink: string;
    contactLink: string;
    legalHeading: string;
    disclaimerLink: string;
    privacyLink: string;
    termsLink: string;
    disclaimerBoxLabel: string;
    disclaimerBoxBody: string;
    disclaimerBoxLinkText: string;
    madeFor: string;
    rights: string;
  };
  common: {
    illustrativeNote: string;
    liveEngineBadge: string;
    sampleSignalLabel: string;
    sampleSignalValue: string;
    marketRegimeLabel: string;
    marketRegimeValue: string;
  };
  home: {
    pill: string;
    headlinePlain: string;
    headlineHighlight: string;
    headlineEnd: string;
    subcopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    disclaimerNote: string;
    disclaimerLinkText: string;
    trustStrip: [Stat, Stat, Stat, Stat];
    featuresHeading: string;
    featuresSubcopy: string;
    features: [Feature, Feature, Feature, Feature];
    howHeading: string;
    howSubcopy: string;
    howSteps: [Step, Step, Step];
    honestyHeading: string;
    honestyHighlight: string;
    honestyBody: string;
    honestyPoints: [string, string, string];
    statsLabel: string;
    stats: [Stat, Stat, Stat];
    statsNote: string;
    statsLinkText: string;
    ctaBannerTitle: string;
    ctaBannerBody: string;
  };
  about: {
    pill: string;
    headlinePlain: string;
    headlineHighlight: string;
    subcopy: string;
    whyHeading: string;
    whyBody1: string;
    whyBody2: string;
    howHeading: string;
    howIntro: string;
    howPoints: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
    honestyHeading: string;
    honestyBody: string;
    standForHeading: string;
    standForCards: [Feature, Feature, Feature];
    beforeHeading: string;
    beforeBody: string;
    beforeLinkText: string;
    ctaTitle: string;
    ctaBody: string;
  };
  product: {
    pill: string;
    headlinePlain: string;
    headlineHighlight: string;
    subcopy: string;
    sections: [ProductSection, ProductSection, ProductSection, ProductSection];
    watchlistEyebrow: string;
    watchlistTitle: string;
    watchlistBody: string;
    watchlistNote: string;
    faqHeading: string;
    faqs: [Faq, Faq, Faq, Faq, Faq, Faq];
    ctaTitle: string;
    ctaBody: string;
  };
  contact: {
    pill: string;
    headlinePlain: string;
    headlineHighlight: string;
    subcopy: string;
    emailLabel: string;
    emailNote: string;
    phoneLabel: string;
    phoneNote: string;
    whatsappLabel: string;
    whatsappNote: string;
    whatsappCta: string;
    responseLabel: string;
    responseBody: string;
    beforeLabel: string;
    beforeBody: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formPhoneLabel: string;
    formPhoneOptional: string;
    formPhonePlaceholder: string;
    formTopicLabel: string;
    formTopicOptions: [string, string, string, string, string];
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formConsentNote: string;
    formConsentLinkText: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    formErrorNotConfigured: string;
    formErrorGeneric: string;
  };
}

export const en: Dictionary = {
  meta: {
    tagline: 'Simple Stock Analysis, Powered by AI',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    product: 'What We Offer',
    contact: 'Contact Us',
    cta: 'Join Free',
  },
  footer: {
    description: 'AI-powered stock market analytics for Indian traders — simple, honest, and built for NSE & BSE.',
    productHeading: 'What We Offer',
    productLinks: ['AI Analysis', 'Market Reads', 'Chart Patterns', 'Pattern Studies'],
    companyHeading: 'Company',
    aboutLink: 'About Us',
    productLink: 'What We Offer',
    contactLink: 'Contact Us',
    legalHeading: 'Legal',
    disclaimerLink: 'Risk Disclaimer',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    disclaimerBoxLabel: 'Please note:',
    disclaimerBoxBody: 'Trading Yantra is for learning and information only. We are not a SEBI-registered investment adviser or research analyst, and nothing here is investment advice or a recommendation. The stock market has risk — please read our full',
    disclaimerBoxLinkText: 'disclaimer',
    madeFor: 'Made for Indian stock market traders',
    rights: 'All rights reserved.',
  },
  common: {
    illustrativeNote: 'Example screen — for illustration only.',
    liveEngineBadge: 'Live',
    sampleSignalLabel: 'Example technical reading',
    sampleSignalValue: 'RSI 63 · Above 50-DMA',
    marketRegimeLabel: 'Market trend',
    marketRegimeValue: 'Uptrend',
  },
  home: {
    pill: 'Made for Indian stock market traders',
    headlinePlain: 'AI that reads the stock market so you don’t have to',
    headlineHighlight: 'guess',
    headlineEnd: '.',
    subcopy: 'Trading Yantra studies stock charts using AI and simple, trusted rules — then explains what the data shows: trend, momentum, and pattern context, in plain language. No confusing jargon. And when something doesn’t work, we tell you that too.',
    ctaPrimary: 'Join Free Waitlist',
    ctaSecondary: 'See How It Works',
    disclaimerNote: 'For learning and information only. Not investment advice or a recommendation. See our',
    disclaimerLinkText: 'risk disclaimer',
    trustStrip: [
      { value: 'NSE + BSE', label: 'Both stock markets' },
      { value: '12', label: 'Candle patterns we check' },
      { value: '6+', label: 'Market indicators we track' },
      { value: 'AI + ML', label: 'Smart analysis' },
    ],
    featuresHeading: 'One app. Four ways we help.',
    featuresSubcopy: 'Everything in one place — no need to jump between five different apps.',
    features: [
      {
        icon: 'brain',
        title: 'AI Analysis',
        description: 'Our AI studies years of stock prices and tells you what it sees — like a sharp friend who never stops watching the charts.',
      },
      {
        icon: 'chart',
        title: 'Easy Market Reads',
        description: 'We check trusted market indicators every day and turn them into a simple, plain-language reading — no spreadsheets needed.',
      },
      {
        icon: 'candlestick',
        title: 'Chart Pattern Alerts',
        description: 'Candlestick patterns are specific price-action shapes in a chart. We spot 12 of them automatically and explain what they’ve historically meant.',
      },
      {
        icon: 'shield',
        title: 'Safety First',
        description: 'When market conditions look risky, we highlight the relevant risk factors clearly — instead of pretending every condition is equally safe.',
      },
    ],
    howHeading: 'How Trading Yantra Works',
    howSubcopy: 'Three simple steps, every single day.',
    howSteps: [
      { step: '01', title: 'We Watch the Market', body: 'Every day, we collect price data for NSE and BSE stocks automatically — so you don’t have to.' },
      { step: '02', title: 'We Check the Full Picture', body: 'Our AI and our rules look at the trend, the volume, and the pattern together — not just one number in isolation.' },
      { step: '03', title: 'You Get a Clear Answer', body: 'You see a simple, plain-language reading of the data — with the reason behind it.' },
    ],
    honestyHeading: 'Most apps only show you when they’re right.',
    honestyHighlight: 'We show you everything — even when we’re wrong.',
    honestyBody: 'Many trading apps promise “guaranteed profits.” We don’t. We test every indicator and pattern honestly, and we say so clearly when something doesn’t work as well as people think.',
    honestyPoints: [
      'We test chart patterns properly — and say so honestly when a popular one doesn’t actually help.',
      'We look at the full picture before sharing a reading, not just one shape on a chart.',
      'When market conditions look risky, we say so clearly — instead of pretending every reading is equally safe.',
    ],
    statsLabel: 'Our numbers, honestly',
    stats: [
      { value: '12', label: 'Candle patterns' },
      { value: '6', label: 'Market indicators' },
      { value: '2', label: 'Stock exchanges' },
    ],
    statsNote: 'These are just facts about the product — not a promise of profit. Please trade carefully.',
    statsLinkText: 'Read our disclaimer',
    ctaBannerTitle: 'Trade smarter, not harder.',
    ctaBannerBody: 'Join our free waitlist. We’ll message you the moment Trading Yantra is ready for you.',
  },
  about: {
    pill: 'About Us',
    headlinePlain: 'A "Yantra" is a tool built for one job.',
    headlineHighlight: 'Ours is built for you.',
    subcopy: 'In Sanskrit, "yantra" means a precise tool or instrument. We built Trading Yantra to turn confusing stock market data into one simple, honest analytical view — for everyone, not just finance experts.',
    whyHeading: 'Why We Built This',
    whyBody1: 'Most people find the stock market confusing. There’s too much information, too many apps, and too many people promising "sure-shot" profits.',
    whyBody2: 'We built Trading Yantra because we wanted a tool that’s honest and easy to understand — one that tells you clearly what it knows, and just as clearly what it doesn’t.',
    howHeading: 'How We Help You Understand Market Data',
    howIntro: 'We combine three things, instead of trusting just one:',
    howPoints: [
      { title: 'Trusted market indicators', body: 'Indicators traders have used for decades — checked fresh, every single day.' },
      { title: 'Chart pattern reading', body: 'We look for 12 well-known candlestick patterns, and check if they actually mean something right now.' },
      { title: 'AI analysis', body: 'Our AI studies years of past stock prices to spot things a simple rule might miss.' },
    ],
    honestyHeading: 'We’d Rather Be Useful Than Impressive',
    honestyBody: 'When our research shows a popular pattern doesn’t really work, we say so — in the product itself, not hidden in fine print. When market conditions look risky, we say so clearly. We’d rather earn your trust slowly than promise things we can’t deliver.',
    standForHeading: 'What We Stand For',
    standForCards: [
      { icon: 'shield', title: 'Honesty first', description: 'Every reading is backed by a real check. If something doesn’t work, we say so — clearly, not in fine print.' },
      { icon: 'chart-pattern', title: 'The full picture', description: 'One pattern alone means little. We look at the trend, the volume, and the bigger picture together.' },
      { icon: 'bell', title: 'Safety first', description: 'When market conditions look risky, we highlight it clearly — instead of treating every reading as equally safe.' },
    ],
    beforeHeading: 'Before You Rely On Anything Here',
    beforeBody: 'Trading Yantra is a technology tool, not a SEBI-registered investment adviser or research analyst. Nothing here is personal investment advice or a recommendation. Please read our',
    beforeLinkText: 'full risk disclaimer',
    ctaTitle: 'Want to see it for yourself?',
    ctaBody: 'Join our free waitlist and be among the first to try Trading Yantra.',
  },
  product: {
    pill: 'What We Offer',
    headlinePlain: 'Everything Trading Yantra Can Do',
    headlineHighlight: 'in one simple app.',
    subcopy: 'Four tools working together, so you always understand what the data is showing — no finance degree needed.',
    sections: [
      {
        id: 'ai-signals',
        eyebrow: 'AI Analysis',
        title: 'Smart analysis, trained on real stock history',
        body: 'Our AI has studied years of NSE & BSE stock prices. It gives you a second opinion alongside our simple rule-based readings — so you’re never relying on just one method.',
        bullets: [
          'Trained on years of real price history across NSE & BSE stocks',
          'One more clue, not the final word — it works together with our other readings',
          'Built to provide additional analytical context, not replace your own judgement',
        ],
        metricLabel: 'Reading type',
        metricValue: 'AI',
      },
      {
        id: 'indicators',
        eyebrow: 'Easy Market Reads',
        title: 'The market indicators serious traders already track',
        body: 'We check well-known indicators — like RSI and moving averages — on your stocks every day, and turn them into a simple, plain-language reading. No spreadsheets, no manual work.',
        bullets: [
          'Checks momentum — is the stock speeding up or slowing down?',
          'Checks how shaky or calm the price has been recently',
          'Flags when a stock looks overbought or oversold',
        ],
        metricLabel: 'Indicators tracked',
        metricValue: '6+',
      },
      {
        id: 'candlestick',
        eyebrow: 'Chart Pattern Alerts',
        title: '12 candlestick patterns, read the right way',
        body: 'A candlestick shape means different things depending on where it happens. We check the trend, the volume, and support levels together — so a pattern isn’t judged all on its own.',
        bullets: [
          '12 well-known candlestick patterns, checked automatically',
          'Each pattern is judged using the bigger picture around it',
          'Every pattern is tested against real results — not just theory',
        ],
        metricLabel: 'Patterns tracked',
        metricValue: '12',
      },
      {
        id: 'patterns',
        eyebrow: 'Pattern Studies',
        title: 'We test chart patterns honestly — wins and losses',
        body: 'Popular chart shapes like triangles and flags are tested with real data, not assumed to work. When our research shows a shape doesn’t really help, we say so — in the product itself.',
        bullets: [
          'Every chart pattern is tested, not just drawn on a chart',
          'When something doesn’t work, we say so — honestly',
          'A risk indicator can highlight periods of elevated volatility so you can evaluate risk yourself',
        ],
        metricLabel: 'Our promise',
        metricValue: 'Honesty',
      },
    ],
    watchlistEyebrow: 'Watchlist & Alerts',
    watchlistTitle: 'Know the moment your stocks move',
    watchlistBody: 'Add the stocks you care about, and we’ll let you know when a stock’s technical reading changes, or it hits a price level you set — no need to keep refreshing charts all day.',
    watchlistNote: 'Example alerts shown above — not real or live trade data.',
    faqHeading: 'Common Questions',
    faqs: [
      {
        q: 'Is Trading Yantra a registered investment adviser or research analyst?',
        a: 'No. Trading Yantra is a technology tool for learning and information only. We are not a SEBI-registered investment adviser or research analyst, and nothing here is personal investment advice or a recommendation. Please read our risk disclaimer before making any trading decision.',
      },
      {
        q: 'Which markets do you cover?',
        a: 'We cover NSE and BSE listed stocks — India’s two main stock exchanges.',
      },
      {
        q: 'How does Trading Yantra actually decide what to show me?',
        a: 'Three things working together: trusted market indicators (like RSI and moving averages), candlestick pattern reading, and AI analysis trained on years of price history.',
      },
      {
        q: 'Do you really tell people when something doesn’t work?',
        a: 'Yes — that’s our whole approach. We test every pattern and rule properly, and when a popular one doesn’t actually help, that’s exactly what we show you.',
      },
      {
        q: 'What happens when the market looks risky?',
        a: 'A risk indicator can highlight periods of elevated market volatility — instead of treating every reading as equally safe no matter what the market is doing. What to do about it is always your call.',
      },
      {
        q: 'How do I join?',
        a: 'We’re currently building our early-access list. Head to the Contact page, tell us a little about yourself, and we’ll reach out with next steps.',
      },
    ],
    ctaTitle: 'Ready to understand the market better?',
    ctaBody: 'Join our free waitlist for early access to Trading Yantra — AI analysis, market reads, and chart pattern alerts, all in one place.',
  },
  contact: {
    pill: 'Get In Touch',
    headlinePlain: 'Let’s Talk',
    headlineHighlight: 'Trading Yantra',
    subcopy: 'Questions about the app? Want early access? Send us a message — a real person reads every one.',
    emailLabel: 'Email',
    emailNote: 'For questions, early access, or anything else.',
    phoneLabel: 'Phone',
    phoneNote: 'Call us, IST business hours.',
    whatsappLabel: 'WhatsApp',
    whatsappNote: 'The fastest way to reach us — message us anytime.',
    whatsappCta: 'Message us on WhatsApp',
    responseLabel: 'How Fast We Reply',
    responseBody: 'We’re a small team — expect a reply within 1–2 business days. Early-access requests are reviewed in batches.',
    beforeLabel: 'Before You Write In',
    beforeBody: 'We can’t give personal investment advice or comment on individual trades. For app questions, feature ideas, or partnerships — we’re all ears.',
    formNameLabel: 'Full name',
    formNamePlaceholder: 'Your name',
    formEmailLabel: 'Email address',
    formEmailPlaceholder: 'you@example.com',
    formPhoneLabel: 'Phone',
    formPhoneOptional: '(optional)',
    formPhonePlaceholder: '+91 98765 43210',
    formTopicLabel: 'What is this about?',
    formTopicOptions: ['Early access / waitlist', 'A question about the app', 'Partnership', 'Press / media', 'Something else'],
    formMessageLabel: 'Your message',
    formMessagePlaceholder: 'Tell us what you’re looking for...',
    formConsentNote: 'By submitting this form, you agree that Trading Yantra may process the information you provide to respond to your enquiry, as described in our',
    formConsentLinkText: 'Privacy Policy',
    formSubmit: 'Send Message',
    formSending: 'Sending...',
    formSuccess: 'Thanks — we’ve got your message and will reply soon.',
    formErrorNotConfigured: 'Form isn’t wired up yet — please email us directly.',
    formErrorGeneric: 'Something went wrong. Please email or WhatsApp us instead.',
  },
};
