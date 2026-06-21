/**
 * Generates raster brand assets (favicon PNGs + social card) from inline SVG
 * using sharp. Run with: node scripts/generate-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

// --- Monogram favicon -------------------------------------------------------
const monogram = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="12" fill="#1F3D2F"/>
  <text x="32" y="34" text-anchor="middle" dominant-baseline="central"
        font-family="Georgia, 'Times New Roman', serif" font-weight="500"
        font-size="32" fill="#F7F4EE">DC</text>
</svg>`;

// --- Social card 1200x630 ---------------------------------------------------
const ogCard = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#F7F4EE"/>
  <rect x="0" y="0" width="1200" height="12" fill="#1F3D2F"/>
  <text x="90" y="160" font-family="'JetBrains Mono', monospace" font-size="22"
        fill="#6B6660" letter-spacing="7">LEGAL AI &#183; LONDON</text>
  <text x="86" y="320" font-family="Georgia, 'Times New Roman', serif" font-weight="500"
        font-size="116" fill="#1A1A1A">Dom Conte</text>
  <text x="90" y="400" font-family="Georgia, 'Times New Roman', serif"
        font-size="42" fill="#1F3D2F">Legal-tech founder, builder and speaker.</text>
  <line x1="90" y1="470" x2="1110" y2="470" stroke="#E2DDD3" stroke-width="2"/>
  <text x="90" y="540" font-family="'JetBrains Mono', monospace" font-size="26"
        fill="#6B6660" letter-spacing="2">domconte.com</text>
</svg>`;

const buf = (svg) => Buffer.from(svg);

await Promise.all([
  sharp(buf(monogram(180)))
    .resize(180, 180)
    .png()
    .toFile(join(pub, "apple-touch-icon.png")),
  sharp(buf(monogram(96)))
    .resize(96, 96)
    .png()
    .toFile(join(pub, "favicon-96.png")),
  sharp(buf(monogram(512)))
    .resize(512, 512)
    .png()
    .toFile(join(pub, "icon-512.png")),
  sharp(buf(ogCard)).png().toFile(join(pub, "og-image.png")),
]);

console.log(
  "Generated: apple-touch-icon.png, favicon-96.png, icon-512.png, og-image.png",
);
