// Captures the product screenshots used on the site from the running
// ai-stock-analyser app (night theme, 2x). Needs Playwright on NODE_PATH.
//   TY_TOOL_KEY=ty_... NODE_PATH=/path/to/node_modules node scripts/capture-app-screens.cjs
// Output goes to src/assets/screens/raw/; crop backtest-result to the monthly
// chart and risk-list to ~650 css px, then copy over src/assets/screens/*.png.

const { chromium } = require('playwright');
const fs = require('fs');
// Backtest-tool key for a local test account (never a real user's key).
const KEY = process.env.TY_TOOL_KEY || '';
const APP = process.env.APP_URL || 'http://localhost:5176';
const OUT = 'src/assets/screens/raw';
fs.mkdirSync(OUT, { recursive: true });

// Find the smallest ancestor of the element whose text includes `needle`
// that also includes every string in `mustContain`.
async function cardRect(pg, needle, mustContain = [], maxH = 4000, minLeft = 262) {
  return pg.evaluate(([needle, must, maxH, minLeft]) => {
    const all = [...document.querySelectorAll('h1,h2,h3,h4,p,div,span,button,td,a')].filter(e => e.getBoundingClientRect().left >= minLeft);
    const lc = (x) => x.toLowerCase(); needle = lc(needle); must = must.map(lc);
    const hit = all.find(e => e.childElementCount === 0 && lc(e.textContent.trim()).startsWith(needle))
             || all.find(e => lc(e.textContent.trim()).startsWith(needle));
    if (!hit) return null;
    let el = hit;
    while (el && !(must.every(m => lc(el.textContent).includes(m)) && el.getBoundingClientRect().width > 500)) el = el.parentElement;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: Math.min(r.height, maxH) };
  }, [needle, mustContain, maxH, minLeft]);
}

async function shot(pg, name, rect, pad = 0) {
  if (!rect) { console.log('MISSING', name); return; }
  const clip = { x: Math.max(0, rect.x - pad), y: Math.max(0, rect.y - pad), width: rect.width + 2 * pad, height: rect.height + 2 * pad };
  await pg.screenshot({ path: `${OUT}/${name}.png`, fullPage: true, clip });
  console.log(name, Math.round(clip.width), 'x', Math.round(clip.height));
}

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
  // CHAT_JSON: a saved ty_chat_messages value (ask a question in the app, then copy it from localStorage).
  const CHAT = process.env.CHAT_JSON ? fs.readFileSync(process.env.CHAT_JSON, 'utf8').trim() : '[]';
  await ctx.addInitScript(([k, chat]) => {
    localStorage.setItem('theme', 'night');
    localStorage.setItem('ty_backtest_tool_key', JSON.stringify(k));
    localStorage.setItem('ty_chat_messages', chat);
  }, [KEY, CHAT]);
  const go = async (path) => {
    const pg = await ctx.newPage();
    await pg.goto(APP + path, { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
    await pg.waitForTimeout(3000);
    // hide the stale-data banner so it never sneaks into a crop
    return pg;
  };

  // 1. Swing: market regime + measured evidence table
  let pg = await go('/swing');
  await shot(pg, 'swing-evidence', await cardRect(pg, 'Measured evidence: swing setups', ['Verdict', 'Any of the four setups']), 0);
  await pg.close();

  // 2. Candlestick research: measured comparison
  pg = await go('/patterns');
  await shot(pg, 'candlestick-research', await cardRect(pg, 'Baseline', ['Hanging Man', 'PATTERN']), 0);
  await pg.close();

  // 3. Risk list (top of the card)
  pg = await go('/risk-list');
  await shot(pg, 'risk-list', await cardRect(pg, 'Risk List', ['Every fact', 'FACTS'], 1050), 0);
  await pg.close();

  // 4. Backtest tool: builder + latest result
  pg = await go('/backtest');
  await pg.getByText('Volume breakout', { exact: true }).first().click().catch(() => {});
  await pg.waitForTimeout(800);
  await shot(pg, 'backtest-builder', await cardRect(pg, 'Add condition', ['days max', 'Remove'], 1200, 100), 0);
  await pg.locator('button:has-text("WORSE THAN RANDOM")').first().click().catch(e => console.log('click', e.message));
  await pg.waitForSelector('text=/net return by month/i', { timeout: 20000 }).catch(() => {});
  await pg.waitForTimeout(2500);
  await shot(pg, 'backtest-result', await cardRect(pg, 'NET / TRADE', ['WORSE THAN RANDOM', 'Confirmation (unseen)', 'NET RETURN BY MONTH'], 4000, 100), 0);
  await pg.close();

  const yOf = (pg, text) => pg.evaluate((t) => {
    const e = [...document.querySelectorAll('*')].find(e => e.childElementCount === 0 && e.textContent.trim().toLowerCase().startsWith(t.toLowerCase()) && e.getBoundingClientRect().left > 262);
    return e ? e.getBoundingClientRect().top + scrollY : null;
  }, text);

  // Strategy Builder: header, strategy library and the rule editor
  pg = await go('/strategy-builder');
  const lib = await pg.evaluate(() => [...document.querySelectorAll('button')].filter(b => b.getBoundingClientRect().left > 262).length);
  console.log('strategy-builder buttons', lib);
  let r = await cardRect(pg, 'Strategy Builder', ['core strategy library', 'backtest 3 years']);
  await shot(pg, 'strategy-builder', r, 0);
  await pg.close();

  // Structure + Participation: header, research warning, counts, filters (no table)
  pg = await go('/confluence');
  r = await cardRect(pg, 'Structure + Participation', ['churn-flagged', 'confluence results']);
  const cut = await yOf(pg, 'Confluence Results');
  if (r && cut) r.height = cut - r.y - 16;
  await shot(pg, 'structure-participation', r, 0);
  await pg.close();

  // Ask the Trading Yantra: question + answer, scrolled to the top of the thread
  pg = await go('/chat');
  await pg.evaluate(() => { for (const el of document.querySelectorAll('*')) { const cs = getComputedStyle(el); if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 20 && el.getBoundingClientRect().left > 262) el.scrollTop = 0; } });
  await pg.waitForTimeout(500);
  r = await cardRect(pg, 'Ask the Trading Yantra', ['every number comes from', 'biggest volume spike']);
  await shot(pg, 'ask-trading-yantra', r, 0);
  await pg.close();
  await b.close();
})();
