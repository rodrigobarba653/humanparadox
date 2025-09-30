#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration
const INPUT_DIR = path.join(__dirname, "../public/images");
const BACKUP_DIR = path.join(__dirname, "../public/images/backup");
const QUALITY = 85; // JPEG quality (1-100)

// Responsive image sizes
const SIZES = {
  mobile: { width: 768, height: 1024 },
  tablet: { width: 1024, height: 768 },
  desktop: { width: 1920, height: 1080 },
  large: { width: 2560, height: 1440 },
};

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Get all image files
const getImageFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });
};

// Create backup of original image
const createBackup = (inputPath) => {
  const fileName = path.basename(inputPath);
  const backupPath = path.join(BACKUP_DIR, fileName);

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log(`📁 Backup created: ${fileName}`);
  }
};

// Optimize image for web
const optimizeImage = async (inputPath, outputPath, maxWidth, maxHeight) => {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: QUALITY,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    const compressionRatio = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(1);

    return {
      original: originalSize,
      optimized: optimizedSize,
      ratio: compressionRatio,
    };
  } catch (error) {
    console.error(
      `❌ Error optimizing ${path.basename(inputPath)}:`,
      error.message
    );
    return null;
  }
};

// Generate responsive images
const generateResponsiveImages = async (inputPath) => {
  const fileName = path.basename(inputPath, path.extname(inputPath));
  const results = {};

  for (const [sizeName, dimensions] of Object.entries(SIZES)) {
    const outputPath = path.join(INPUT_DIR, `${fileName}-${sizeName}.jpg`);
    const result = await optimizeImage(
      inputPath,
      outputPath,
      dimensions.width,
      dimensions.height
    );

    if (result) {
      results[sizeName] = {
        path: outputPath,
        ...result,
      };
    }
  }

  return results;
};

// Main optimization function
const optimizeAllImages = async () => {
  console.log("🚀 Starting image optimization...\n");

  const imageFiles = getImageFiles(INPUT_DIR);

  if (imageFiles.length === 0) {
    console.log("No images found in the directory.");
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize:\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let successCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);

    // Skip if already processed
    if (
      file.includes("-mobile") ||
      file.includes("-tablet") ||
      file.includes("-desktop") ||
      file.includes("-large")
    ) {
      continue;
    }

    console.log(`\n📸 Processing: ${file}`);

    // Create backup
    createBackup(inputPath);

    // Generate responsive versions
    const results = await generateResponsiveImages(inputPath);

    if (Object.keys(results).length > 0) {
      // Replace original with desktop version (most common use case)
      const desktopResult = results.desktop;
      if (desktopResult) {
        fs.copyFileSync(desktopResult.path, inputPath);
        fs.unlinkSync(desktopResult.path); // Remove duplicate

        totalOriginalSize += desktopResult.original;
        totalOptimizedSize += desktopResult.optimized;
        successCount++;

        console.log(
          `✅ ${file}: ${(desktopResult.original / 1024).toFixed(1)}KB → ${(
            desktopResult.optimized / 1024
          ).toFixed(1)}KB (${desktopResult.ratio}% reduction)`
        );

        // Log responsive versions
        Object.entries(results).forEach(([size, result]) => {
          if (size !== "desktop") {
            console.log(
              `   ${size}: ${(result.optimized / 1024).toFixed(1)}KB`
            );
          }
        });
      }
    }
  }

  console.log("\n📊 Optimization Summary:");
  console.log(
    `✅ Successfully optimized: ${successCount}/${imageFiles.length} images`
  );
  console.log(
    `📦 Total size reduction: ${(totalOriginalSize / 1024).toFixed(1)}KB → ${(
      totalOptimizedSize / 1024
    ).toFixed(1)}KB`
  );
  console.log(
    `💾 Space saved: ${(
      (totalOriginalSize - totalOptimizedSize) /
      1024
    ).toFixed(1)}KB (${(
      ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
      100
    ).toFixed(1)}%)`
  );
  console.log(`\n📁 Original images backed up to: ${BACKUP_DIR}`);
  console.log("\n💡 Next steps:");
  console.log("1. Test your website to ensure images look good");
  console.log("2. If satisfied, you can delete the backup folder");
  console.log("3. Consider implementing responsive images in your components");
};

// Run the optimization
optimizeAllImages().catch(console.error);
