#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration
const INPUT_DIR = path.join(__dirname, "../public/images");
const OUTPUT_DIR = path.join(__dirname, "../public/images/compressed");
const QUALITY = 85; // JPEG quality (1-100)
const MAX_WIDTH = 1920; // Maximum width for web images
const MAX_HEIGHT = 1080; // Maximum height for web images

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files
const getImageFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });
};

// Compress a single image
const compressImage = async (inputPath, outputPath) => {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: QUALITY,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(outputPath);

    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const compressionRatio = (
      ((originalSize - compressedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(
      `✅ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(
        1
      )}KB → ${(compressedSize / 1024).toFixed(
        1
      )}KB (${compressionRatio}% reduction)`
    );

    return {
      original: originalSize,
      compressed: compressedSize,
      ratio: compressionRatio,
    };
  } catch (error) {
    console.error(
      `❌ Error compressing ${path.basename(inputPath)}:`,
      error.message
    );
    return null;
  }
};

// Main compression function
const compressAllImages = async () => {
  console.log("🚀 Starting image compression...\n");

  const imageFiles = getImageFiles(INPUT_DIR);

  if (imageFiles.length === 0) {
    console.log("No images found in the directory.");
    return;
  }

  console.log(`Found ${imageFiles.length} images to compress:\n`);

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let successCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(
      OUTPUT_DIR,
      file.replace(/\.(png|webp)$/i, ".jpg")
    );

    const result = await compressImage(inputPath, outputPath);

    if (result) {
      totalOriginalSize += result.original;
      totalCompressedSize += result.compressed;
      successCount++;
    }
  }

  console.log("\n📊 Compression Summary:");
  console.log(
    `✅ Successfully compressed: ${successCount}/${imageFiles.length} images`
  );
  console.log(
    `📦 Total size reduction: ${(totalOriginalSize / 1024).toFixed(1)}KB → ${(
      totalCompressedSize / 1024
    ).toFixed(1)}KB`
  );
  console.log(
    `💾 Space saved: ${(
      (totalOriginalSize - totalCompressedSize) /
      1024
    ).toFixed(1)}KB (${(
      ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) *
      100
    ).toFixed(1)}%)`
  );
  console.log(`\n📁 Compressed images saved to: ${OUTPUT_DIR}`);
  console.log("\n💡 Next steps:");
  console.log("1. Review the compressed images");
  console.log(
    "2. Replace original images with compressed versions if satisfied"
  );
  console.log("3. Update image references in your data files if needed");
};

// Run the compression
compressAllImages().catch(console.error);
