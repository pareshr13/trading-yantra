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

export interface LadderStep {
  name: string;
  note: string;
}

// Home-page flagship section: how Trading Yantra measures every rule.
// Verdict names (UNMEASURED ... CONFIRMED) stay in English in every locale,
// matching how they render in the product itself; only the notes translate.
export interface EvidenceBlock {
  eyebrow: string;
  heading: string;
  highlight: string;
  body: string;
  points: [EvidencePoint, EvidencePoint, EvidencePoint, EvidencePoint];
  ladderLabel: string;
  ladder: [LadderStep, LadderStep, LadderStep, LadderStep, LadderStep];
  ladderNote: string;
  link: string;
  note: string;
}

// Home-page "Real screens" showcase: one row per product screenshot.
export type ShowcaseId = 'strategy-builder' | 'evidence' | 'ask' | 'structure' | 'risk-list';

export interface ShowcaseItem {
  id: ShowcaseId;          // picks the screenshot; see HomeContent.astro
  eyebrow: string;
  title: string;
  body: string;
  bullets: [string, string, string];
  alt: string;
}

export interface ShowcaseBlock {
  eyebrow: string;
  heading: string;
  highlight: string;
  subcopy: string;
  link: string;
  items: ShowcaseItem[];
}

// Early-access email signup (hero, closing CTA on every page, sticky bar).
export interface SignupStrings {
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  placeholder: string;
  button: string;
  sending: string;
  success: string;
  error: string;
  invalid: string;         // bad email
  invalidName: string;
  invalidPhone: string;
  note: string;            // three short claims joined by ' · '
  consent: string;         // says we will call / WhatsApp the number
}

export interface PricingPlan {
  name: string;
  price: string;
  tagline: string;
  features: [string, string, string];
  cta: string;
}

export interface PricingBlock {
  eyebrow: string;
  heading: string;
  highlight: string;
  subcopy: string;
  popular: string;
  perMonth: string;
  plans: [PricingPlan, PricingPlan, PricingPlan];
  note: string;
}

export interface EvidencePoint {
  title: string;
  body: string;
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
    productLinks: [string, string, string, string, string, string, string];
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
    credit: string;          // "Designed and developed by" — the link text is the domain
    rights: string;
  };
  common: {
    illustrativeNote: string;
    liveEngineBadge: string;
    sampleSignalLabel: string;
    sampleSignalValue: string;
    marketRegimeLabel: string;
    marketRegimeValue: string;
    screenshotCaption: string;
    signup: SignupStrings;
    stickyCta: string;
    themeToggle: string;
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
    evidence: EvidenceBlock;
    heroShotAlt: string;
    heroShotCaption: string;
    heroChipVerdict: string;
    heroChipTrades: string;
    showcase: ShowcaseBlock;
    pricing: PricingBlock;
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
    sections: ProductSection[];
    watchlistEyebrow: string;
    watchlistTitle: string;
    watchlistBody: string;
    watchlistNote: string;
    faqHeading: string;
    faqs: Faq[];
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
    cta: 'Start free',
  },
  footer: {
    description: 'Backtesting and stock market research for Indian traders — simple, honest, and built on NSE data.',
    productHeading: 'What We Offer',
    productLinks: ['Measured Evidence', 'Backtest Your Rule', 'Risk List', 'AI Analysis', 'Market Reads', 'Chart Patterns', 'Pattern Studies'],
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
    madeFor: 'Made for Indian stock market traders & brokers',
    credit: 'Designed and developed by',
    rights: 'All rights reserved.',
  },
  common: {
    illustrativeNote: 'Example screen — for illustration only.',
    liveEngineBadge: 'Live',
    sampleSignalLabel: 'Example technical reading',
    sampleSignalValue: 'RSI 63 · Above 50-DMA',
    marketRegimeLabel: 'Market trend',
    marketRegimeValue: 'Uptrend',
    screenshotCaption: 'Real screen from the Trading Yantra app. Data as of 20 Nov 2026. Historical statistics for learning only, not a recommendation.',
    signup: {
      nameLabel: 'Full name',
      phoneLabel: 'Mobile number',
      emailLabel: 'Email address',
      placeholder: 'Email address',
      button: 'Start free',
      sending: 'Joining…',
      success: 'You’re on the list! We’ll call or email you shortly to set up your free access.',
      error: 'Something went wrong. Please try again in a moment.',
      invalid: 'Please enter a valid email address.',
      invalidName: 'Please enter your full name.',
      invalidPhone: 'Please enter a valid 10-digit mobile number.',
      note: 'Free plan · 3 backtests a month · No card needed',
      consent: 'We’ll call or WhatsApp you on this number to set up your account.',
    },
    stickyCta: 'Test your strategy free',
    themeToggle: 'Switch light or dark theme',
  },
  home: {
    pill: 'Backtesting and research for NSE traders',
    headlinePlain: 'Your strategy vs. pure luck.',
    headlineHighlight: 'See which one wins',
    headlineEnd: '.',
    subcopy: 'Build a trading rule, test it on years of NSE data with real costs, and see if it beats random stock picks. No code. No guesswork. A straight verdict.',
    ctaPrimary: 'Join Free Waitlist',
    ctaSecondary: 'See How It Works',
    disclaimerNote: 'For learning and information only. Not investment advice or a recommendation. See our',
    disclaimerLinkText: 'risk disclaimer',
    trustStrip: [
      { value: '1,900+', label: 'NSE stocks in every backtest' },
      { value: '0.593%', label: 'Costs charged on every trade' },
      { value: 'vs Random', label: 'The bar every rule must clear' },
      { value: '5', label: 'Verdicts, from LOSES to CONFIRMED' },
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
      { step: '01', title: 'We Watch the Market', body: 'Every day, we collect end-of-day prices for NSE stocks automatically — so you don’t have to.' },
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
    ctaBannerTitle: 'Find out if your strategy beats luck.',
    ctaBannerBody: 'Join free in 10 seconds. Early access opens in batches — we’ll email yours.',
    evidence: {
      eyebrow: 'Our biggest difference',
      heading: 'Most trading rules don’t beat luck.',
      highlight: 'We measure ours — and publish the answer.',
      body: 'Before we show you any rule, we test it against the one thing that matters: buying a random stock on the same day and holding it the same way. If a rule can’t beat that, we say so — even when it’s one of our own.',
      points: [
        { title: 'Compared with luck, not with zero', body: 'A rising market makes almost any rule look smart. We score every rule against random stocks bought on the same days, so only the rule’s own contribution counts.' },
        { title: 'Real costs, real entry prices', body: 'Trades enter at the next day’s open, with trading costs taken out of every single trade.' },
        { title: 'Stocks that disappeared count too', body: 'Our tests include stocks that later stopped trading, so history isn’t flattered by showing only the survivors.' },
        { title: 'Checked again on live results', body: 'Once there are at least 6 months and 100 finished trades, a rule’s live record is compared with its backtest. Until then, it simply says “too early”.' },
      ],
      ladderLabel: 'The verdict scale',
      ladder: [
        { name: 'UNMEASURED', note: 'Too little history to say anything yet.' },
        { name: 'LOSES', note: 'Does clearly worse than picking stocks at random.' },
        { name: 'NO EDGE', note: 'Not clearly better than random, or the result falls apart when stress-tested.' },
        { name: 'CONSISTENT ON HISTORY', note: 'Beat random picks after costs and passed every stress test — but only on past data.' },
        { name: 'CONFIRMED', note: 'Also held up in a forward test registered before it began.' },
      ],
      ladderNote: 'A backtest can never reach “Confirmed”. Only a forward test, registered in advance, can.',
      link: 'See how we test',
      note: 'Historical statistics, for learning only. Past results do not predict future results. Not investment advice or a recommendation.',
    },
    heroShotAlt: 'Trading Yantra backtest result: a volume-breakout rule tested on 18,355 trades and rated WORSE THAN RANDOM',
    heroShotCaption: 'A real result from the app: a volume-breakout rule, 18,355 trades across 1,904 stocks — profitable on paper, yet worse than buying random stocks on the same days.',
    heroChipVerdict: 'Verdict',
    heroChipTrades: 'trades tested',
    showcase: {
      eyebrow: 'Inside the product',
      heading: 'Real screens.',
      highlight: 'Real numbers.',
      subcopy: 'No mock-ups. These are screens from the Trading Yantra app, showing NSE data as of 20 November 2026.',
      link: 'See it in detail',
      items: [
        {
          id: 'strategy-builder',
          eyebrow: 'Strategy Builder',
          title: '145 conditions. 30+ ready-made strategies. Your rules.',
          body: 'Mix moving averages, RSI, ADX, VWAP, volume profile, candle and chart patterns, relative strength and weekly trends — or start from a library of 30+ strategies whose thresholds were fixed before testing. Then backtest it on 3 years of NSE data.',
          bullets: [
            '145 conditions in 15 groups, matched with AND or OR',
            'Exit after a fixed number of days, or on an ATR stop or target',
            'Indian delivery costs, no overlapping trades, an out-of-sample window',
          ],
          alt: 'Trading Yantra Strategy Builder with a library of ready-made strategies and a rule using RSI below 35, a bullish hammer and price above the 200-day average',
        },
        {
          id: 'evidence',
          eyebrow: 'A verdict on every rule',
          title: 'We grade our own setups too — and publish NO EDGE.',
          body: 'The swing setups inside the app carry a verdict from the same tests you run. When this screen was taken, all five read NO EDGE, and the app says so right beside the scanner.',
          bullets: [
            'Scored against random stocks bought on the same days',
            'A forward test registered before any result comes in',
            'Live results checked against the backtest once there is enough data',
          ],
          alt: 'Measured evidence table for five swing setups, each rated NO EDGE against random stocks',
        },
        {
          id: 'ask',
          eyebrow: 'Ask the Trading Yantra',
          title: 'Ask in plain words. Get answers from real market data.',
          body: 'Type a question like “Which stocks had the biggest volume spike today?” and get a clean table back. The AI only picks which lookup to run — every number comes straight from Trading Yantra’s data, never from the model’s memory.',
          bullets: [
            'Volume spikes, moving-average crosses, RSI levels, support and resistance breaks',
            'Open the exact data query behind any answer',
            'Every answer is dated, so you know how fresh it is',
          ],
          alt: 'Ask the Trading Yantra chat answering which stocks had the biggest volume spike, with a table of volume ratios and turnover',
        },
        {
          id: 'structure',
          eyebrow: 'Structure + Participation',
          title: 'Is real money behind the move? Check delivery and turnover.',
          body: 'Price setups are cross-checked against NSE bhavcopy delivery and turnover, so you can see whether buyers took delivery or the volume was mostly same-day churn — with a plain note on what has and hasn’t been proven.',
          bullets: [
            'Delivery % compared with each stock’s own normal level',
            'Turnover against its usual level, with churn flagged',
            'Labelled as a research view, with the tested numbers on the page',
          ],
          alt: 'Structure + Participation view with a research warning and counts of SMA40 signals, bhavcopy-confirmed, delivery-backed and churn-flagged stocks',
        },
        {
          id: 'risk-list',
          eyebrow: 'Risk List',
          title: 'See the traps before you take the trade.',
          body: 'Every evening we flag the facts that can make a stock harder to buy, harder to sell, or riskier than its stop suggests — straight from NSE data, with no predictions.',
          bullets: [
            'Exchange surveillance (ASM) and tight price bands',
            'F&O ban stocks and results due inside a 20-session hold',
            'Low delivery share: how little of the volume was actually delivered',
          ],
          alt: 'Risk List table showing stocks with facts such as ASM surveillance stage, 5% price band and low delivery share',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      heading: 'Start free.',
      highlight: 'Upgrade when you test more.',
      subcopy: 'Launch pricing. Paid plans open soon — join free today and you’ll hear first.',
      popular: 'Most popular',
      perMonth: '/ month',
      plans: [
        {
          name: 'Free',
          price: '₹0',
          tagline: 'Try the engine on your own ideas',
          features: ['3 backtests a month', 'Verdict against random stocks', 'Full statistics, costs included'],
          cta: 'Start free',
        },
        {
          name: 'Pro',
          price: '₹499',
          tagline: 'For traders testing ideas every week',
          features: ['30 backtests a month', 'Month-by-month return curve', 'Full trade list for every test'],
          cta: 'Join Pro waitlist',
        },
        {
          name: 'Max',
          price: '₹999',
          tagline: 'For heavy research and strategy building',
          features: ['300 backtests a month', 'Month-by-month return curve', 'Full trade list for every test'],
          cta: 'Join Max waitlist',
        },
      ],
      note: 'Prices in INR. Historical statistics for learning only — not investment advice or a recommendation.',
    },
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
    subcopy: 'Everything works together, so you always understand what the data is showing — and how thoroughly it has been tested. No finance degree needed.',
    sections: [
      {
        id: 'evidence',
        eyebrow: 'Measured Evidence',
        title: 'Every rule is tested against luck before you see it',
        body: 'Trading Yantra runs every rule through one testing engine: same stocks, same costs, same entry rules. Each rule gets a plain verdict — from “No edge” to “Consistent on history” — and the reasons behind it. The verdict “No edge” has already appeared next to our own rules, and we show it.',
        bullets: [
          'Scored against random stocks bought on the same day, with costs taken out of every trade',
          'Stress-tested: a day late, double costs, without its best months, settings nudged by 10%',
          'The more rules we test, the higher the bar — because the 40th idea that “works” is usually luck',
          'Checked against live results once there are 6 months and 100 finished trades',
        ],
        metricLabel: 'Compared against',
        metricValue: 'Luck',
      },
      {
        id: 'backtest',
        eyebrow: 'Backtest Your Rule',
        title: 'Test your own idea on NSE history',
        body: 'Have a trading idea? Build it as a simple rule and run it through the same engine we use on our own. You get a verdict with costs included, a period the rule never saw, and a comparison against buying any stock on the same days. Starting is free.',
        bullets: [
          'Build your rule from a simple menu — no coding',
          'Share your result with a single link',
          'Shows how a rule did in the past — never a list of stocks to act on today',
        ],
        metricLabel: 'To start',
        metricValue: 'Free',
      },
      {
        id: 'strategy-builder',
        eyebrow: 'Strategy Builder',
        title: 'Build any rule you can describe',
        body: 'Combine conditions from 145 building blocks — moving averages, RSI, ADX, VWAP, volume profile, candle and chart patterns, relative strength and weekly trends. Or load one of 30+ ready-made strategies and adjust it. Every backtest uses Indian delivery costs, trades that never overlap, and a window the rule was not tuned on.',
        bullets: [
          '145 conditions in 15 groups, matched with AND or OR',
          '30+ ready-made strategies, their thresholds fixed before they were tested',
          'Exit after a fixed number of days, or on an ATR-based stop or target',
          '3 years of daily NSE data: 1.37 million bars across 2,099 stocks',
        ],
        metricLabel: 'Building blocks',
        metricValue: '145',
      },
      {
        id: 'risk-list',
        eyebrow: 'Risk List',
        title: 'Facts that can make a trade harder — not predictions',
        body: 'Every night we list facts from the exchange’s own data that can make a trade harder to place, harder to exit, or riskier than it looks: surveillance stage, price-band limits, F&O ban, upcoming results, low delivery, thin trading. It is not a sell list and makes no prediction.',
        bullets: [
          'Built every night from exchange-published data and recorded prices',
          'An earlier version built from chart-based warning flags failed our own test on three years of data — none of its 9 flags passed — so we replaced it with plain facts',
          'Where a fact has a measured effect on past returns, we label it with its source; the rest are never dressed up as forecasts',
        ],
        metricLabel: 'Predictions made',
        metricValue: '0',
      },
      {
        id: 'ask',
        eyebrow: 'Ask the Trading Yantra',
        title: 'Ask questions in plain words',
        body: 'No filters to learn. Ask “Which stocks crossed above their 50-day SMA today?” or “What are RELIANCE’s indicators?” and get a clear table back. The AI only decides which lookup to run; every number comes from Trading Yantra’s own data, and you can open the exact query behind any answer.',
        bullets: [
          'Volume spikes, moving-average crosses, RSI levels and support or resistance breaks',
          'Every number comes from our data, never from the AI’s memory',
          'Each answer says how fresh the data is',
        ],
        metricLabel: 'Where numbers come from',
        metricValue: 'Our data',
      },
      {
        id: 'structure',
        eyebrow: 'Structure + Participation',
        title: 'See whether real money is behind a setup',
        body: 'A price setup tells you what the chart did. Delivery and turnover tell you who was behind it. This view cross-checks setups against the NSE bhavcopy, so you can see whether buyers took delivery or the volume was mostly same-day churn.',
        bullets: [
          'Delivery % compared with the stock’s own normal level',
          'Turnover compared with its usual level, with churn flagged',
          'Clearly labelled as a research view, with the tested numbers on the page',
        ],
        metricLabel: 'Data source',
        metricValue: 'NSE bhavcopy',
      },
      {
        id: 'data',
        eyebrow: 'Data You Can Trust',
        title: 'Prices are checked against the exchange every night',
        body: 'A test is only as honest as its data. Our daily prices are built from the exchange’s own end-of-day files and cross-checked against NSE records, with splits and bonus issues accounted for. New listings are added every night, and a freshness check runs at the end of each nightly run.',
        bullets: [
          'End-of-day prices built from the NSE’s official daily file (bhavcopy)',
          'Stored prices are compared with the exchange’s own record and corrected where they disagree',
          'New listings are picked up every night; ETFs are kept out of stock tests',
          'If any part of the data is out of date, the app shows a banner instead of staying quiet',
        ],
        metricLabel: 'Price source',
        metricValue: 'NSE',
      },
      {
        id: 'ai-signals',
        eyebrow: 'AI Analysis',
        title: 'Smart analysis, trained on real stock history',
        body: 'Our AI has studied years of NSE stock prices. It gives you a second opinion alongside our simple rule-based readings — so you’re never relying on just one method.',
        bullets: [
          'Trained on years of real price history across NSE stocks',
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
        a: 'We cover shares listed on the NSE (the regular equity segment). Stocks listed only on the BSE are not covered at the moment.',
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
        q: 'What does “No edge” mean? Do you really publish results where a rule doesn’t work?',
        a: 'Yes. “No edge” means a rule did no better than picking stocks at random, or its result fell apart under stress tests. Some of our own rules have received that verdict, and the app shows it openly. A rule only reaches “Consistent on history” after it clears a much tougher bar — and even that is about the past, not a promise about the future.',
      },
      {
        q: 'Can I test my own trading idea?',
        a: 'Yes — that’s what Backtest Your Rule is for. You build a rule from a simple menu and test it on past NSE data, with costs, a period the rule has not seen, and a comparison against random stock picks. It shows historical statistics only, never a list of stocks to act on today. It is for learning, not advice.',
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
