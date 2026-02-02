import sharp from 'sharp';
import { rename, unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '..', 'public', 'img');

// JPG to WEBP conversions
const conversions = [
  ['IMG_0808.JPG', 'cognac-leather-chair-nailhead-arm-detail.webp'],
  ['123_1 2.JPG', 'caramel-leather-recliner-new-in-box-collage.webp'],
  ['123_1.JPG', 'caramel-leather-chair-scratches-scuffs-collage.webp'],
  ['59709132639__E7DF5B06-F35E-4C8E-9A65-55C9110D6140.JPG', 'brown-leather-ottoman-taped-for-refinish.webp'],
  ['61608699528__0FF2AF9C-49B6-4AA6-82E2-4667F3F401A4.JPG', 'gray-black-golf-cart-seat-bench-finished.webp'],
  ['5045250178418853789.JPG', 'tan-leather-recliner-living-room-restored.webp'],
  ['Attachment 2.JPG', 'pizza-restaurant-booth-reupholstery-prep.webp'],
  ['Attachment 3.JPG', 'black-vinyl-restaurant-booths-completed.webp'],
  ['Attachment 4.JPG', 'restaurant-booth-cushions-foam-exposed-row.webp'],
  ['Attachment 5.JPG', 'restaurant-booth-reupholstery-in-progress.webp'],
  ['Attachment 6.JPG', 'black-vinyl-restaurant-booths-finished-wide.webp'],
  ['Attachment 7.JPG', 'black-vinyl-restaurant-booths-finished-side.webp'],
  ['Attachment 8.JPG', 'pizza-restaurant-booth-reupholstery-prep-2.webp'],
  ['Attachment 9.JPG', 'pizza-restaurant-booth-reupholstery-prep-3.webp'],
  ['Attachment.JPG', 'black-vinyl-restaurant-booths-no-cushions.webp'],
  ['IMG_0662.JPG', 'purple-medical-sleeper-sofa-foam-damage.webp'],
  ['IMG_0663.JPG', 'purple-medical-sleeper-sofa-repaired.webp'],
  ['IMG_0801.JPG', 'gray-leather-motorcycle-saddlebag-custom.webp'],
  ['IMG_0806.JPG', 'cognac-leather-chair-arm-torn-foam-exposed.webp'],
];

// WEBP renames (no conversion needed)
const renames = [
  ['brown-leather-club-chair-restored.webp', 'brown-leather-club-chair-nailhead-restored.webp'],
];

async function convertImages() {
  // Convert JPGs to WEBP
  for (const [source, dest] of conversions) {
    const sourcePath = join(imgDir, source);
    const destPath = join(imgDir, dest);
    
    try {
      await sharp(sourcePath)
        .webp({ quality: 85 })
        .toFile(destPath);
      
      // Delete the original file after successful conversion
      await unlink(sourcePath);
      
      console.log(`✓ ${source} → ${dest}`);
    } catch (error) {
      console.error(`✗ Failed to convert ${source}: ${error.message}`);
    }
  }
  
  // Rename existing WEBP files
  for (const [source, dest] of renames) {
    const sourcePath = join(imgDir, source);
    const destPath = join(imgDir, dest);
    
    try {
      await rename(sourcePath, destPath);
      console.log(`✓ ${source} → ${dest} (renamed)`);
    } catch (error) {
      console.error(`✗ Failed to rename ${source}: ${error.message}`);
    }
  }
  
  console.log('\nConversion complete!');
}

convertImages();
