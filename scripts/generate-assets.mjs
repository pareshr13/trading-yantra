// Asset generator: builds the PNG favicons, app icons, and OG share image
// from the real Trading Yantra brand artwork in public/brand/ (copied from
// the sibling AlgoSignal product's robot-head + candlestick mark).
// Run with: node scripts/generate-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const logoDir = fileURLToPath(new URL('../public/logo/', import.meta.url));
const robotHeadSrc = fileURLToPath(new URL('../public/brand/robot-head-512.png', import.meta.url));
const bannerSrc = fileURLToPath(new URL('../public/brand/trading-yantra-mark.png', import.meta.url));

const INK = '#05070f';

function roundedSquareSvg(size, radius) {
  return `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${INK}" /></svg>`;
}

async function makeIcon(size, outPath) {
  const bg = await sharp(Buffer.from(roundedSquareSvg(size, Math.round(size * 0.2))))
    .png()
    .toBuffer();
  const subjectSize = Math.round(size * 0.86);
  const subject = await sharp(robotHeadSrc).resize(subjectSize, subjectSize, { fit: 'contain' }).toBuffer();

  await sharp(bg)
    .composite([{ input: subject, gravity: 'center' }])
    .png()
    .toFile(outPath);
  console.log('wrote', outPath);
}

async function makeFavicon(size, outPath) {
  // Small favicon sizes: skip the rounded-square chrome (it disappears at
  // 16-32px anyway) and just pad the transparent-background artwork onto a
  // solid ink square so it reads clearly in a browser tab.
  const subject = await sharp(robotHeadSrc).resize(Math.round(size * 0.92), Math.round(size * 0.92), { fit: 'contain' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: INK } })
    .composite([{ input: subject, gravity: 'center' }])
    .png()
    .toFile(outPath);
  console.log('wrote', outPath);
}

async function makeOgImage(outPath) {
  const width = 1200;
  const height = 630;

  const bannerMeta = await sharp(bannerSrc).metadata();
  const bannerWidth = 880;
  const bannerHeight = Math.round((bannerMeta.height / bannerMeta.width) * bannerWidth);
  const banner = await sharp(bannerSrc).resize(bannerWidth, bannerHeight).toBuffer();

  const textSvg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="30%" r="70%">
        <stop offset="0" stop-color="#0d3b34" stop-opacity="0.55" />
        <stop offset="1" stop-color="${INK}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="tg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#34d399" />
        <stop offset="0.55" stop-color="#2dd4bf" />
        <stop offset="1" stop-color="#22d3ee" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="${INK}" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />
    <text x="600" y="540" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="800" fill="#f8fafc">
      Trading<tspan fill="url(#tg)">Yantra</tspan>
    </text>
    <text x="600" y="583" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#94a3b8" letter-spacing="2">
      AI-POWERED STOCK ANALYSIS FOR NSE &amp; BSE TRADERS
    </text>
  </svg>`;

  await sharp(Buffer.from(textSvg))
    .composite([{ input: banner, left: Math.round((width - bannerWidth) / 2), top: 48 }])
    .png()
    .toFile(outPath);
  console.log('wrote', outPath);
}

async function main() {
  await mkdir(logoDir, { recursive: true });

  await makeIcon(192, `${logoDir}logo-192.png`);
  await makeIcon(512, `${logoDir}logo-512.png`);
  await makeFavicon(32, `${publicDir}favicon-32.png`);
  await makeFavicon(180, `${publicDir}apple-touch-icon.png`);
  await makeOgImage(`${publicDir}og-image.png`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
