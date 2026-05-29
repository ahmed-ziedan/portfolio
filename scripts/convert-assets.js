const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '..', 'public');

async function convertFile(inputName, outputName, width) {
  const inputPath = path.join(publicDir, inputName);
  const outputPath = path.join(publicDir, outputName);

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    return false;
  }

  const inputSize = fs.statSync(inputPath).size;
  console.log(`\nConverting ${inputName} (${(inputSize / 1024 / 1024).toFixed(2)} MB)...`);

  try {
    // Try direct Sharp conversion (handles SVGs with embedded rasters)
    const info = await sharp(inputPath, { density: 150 })
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`  -> ${outputName}: ${(info.size / 1024).toFixed(0)} KB (${((1 - info.size / inputSize) * 100).toFixed(1)}% smaller)`);
    return true;
  } catch (err) {
    console.error(`  Direct conversion failed: ${err.message}`);

    // Fallback: extract embedded base64 raster data from SVG
    try {
      const svgContent = fs.readFileSync(inputPath, 'utf-8');
      const base64Match = svgContent.match(/data:image\/(png|jpeg|jpg|gif|webp);base64,([A-Za-z0-9+\/=]+)/);

      if (base64Match) {
        console.log(`  Trying base64 extraction fallback...`);
        const imageBuffer = Buffer.from(base64Match[2], 'base64');
        const info = await sharp(imageBuffer)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`  -> ${outputName}: ${(info.size / 1024).toFixed(0)} KB (${((1 - info.size / inputSize) * 100).toFixed(1)}% smaller)`);
        return true;
      }

      console.error(`  No embedded raster data found in SVG`);
      return false;
    } catch (err2) {
      console.error(`  Fallback also failed: ${err2.message}`);
      return false;
    }
  }
}

async function main() {
  console.log('=== SVG to WebP Asset Conversion ===');
  console.log(`Public dir: ${publicDir}\n`);

  const results = await Promise.all([
    convertFile('b1.svg', 'b1.webp', 1920),
    convertFile('grid.svg', 'grid.webp', 1920),
    convertFile('p1.svg', 'p1.webp', 1920),
    convertFile('p2.svg', 'p2.webp', 1920),
    convertFile('p3.svg', 'p3.webp', 1920),
    convertFile('p4.svg', 'p4.webp', 1920),
  ]);

  const succeeded = results.filter(Boolean).length;
  const failed = results.length - succeeded;

  console.log(`\n=== Done: ${succeeded} succeeded, ${failed} failed ===`);
  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
