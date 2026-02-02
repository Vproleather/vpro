import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const appDir = join(__dirname, '..', 'src', 'app');

// Ensure directories exist
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });
if (!existsSync(appDir)) mkdirSync(appDir, { recursive: true });

const inputImage = join(publicDir, 'V.svg');

console.log('Generating favicons from V.svg...\n');

// Generate favicon.ico (multi-size ICO file)
await sharp(inputImage)
  .resize(28, 28, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 2,
    bottom: 2,
    left: 2,
    right: 2,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .toFile(join(appDir, 'favicon.ico'))
  .then(() => console.log('✓ Generated favicon.ico (32x32)'));

// Generate apple-touch-icon.png
await sharp(inputImage)
  .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .toFile(join(appDir, 'apple-icon.png'))
  .then(() => console.log('✓ Generated apple-icon.png (180x180)'));

// Generate various icon sizes for different platforms
const sizes = [
  { size: 16, padding: 1, name: 'icon-16.png' },
  { size: 32, padding: 2, name: 'icon-32.png' },
  { size: 192, padding: 12, name: 'icon-192.png' },
  { size: 512, padding: 32, name: 'icon-512.png' },
];

for (const { size, padding, name } of sizes) {
  const innerSize = size - (padding * 2);
  await sharp(inputImage)
    .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFile(join(appDir, name))
    .then(() => console.log(`✓ Generated ${name} (${size}x${size})`));
}

// Generate OpenGraph image (1200x630) - works for Facebook, LinkedIn, Twitter
const ogWidth = 1200;
const ogHeight = 630;
const logoSize = 300;

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 4,
    background: { r: 26, g: 26, b: 26, alpha: 1 } // #1a1a1a dark background
  }
})
  .composite([
    {
      input: await sharp(inputImage)
        .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer(),
      gravity: 'center'
    }
  ])
  .png()
  .toFile(join(appDir, 'opengraph-image.png'))
  .then(() => console.log('✓ Generated opengraph-image.png (1200x630)'));

// Generate Twitter image (same as OG for summary_large_image)
await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 4,
    background: { r: 26, g: 26, b: 26, alpha: 1 }
  }
})
  .composite([
    {
      input: await sharp(inputImage)
        .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer(),
      gravity: 'center'
    }
  ])
  .png()
  .toFile(join(appDir, 'twitter-image.png'))
  .then(() => console.log('✓ Generated twitter-image.png (1200x630)'));

console.log('\n✓ All favicons generated successfully!');
