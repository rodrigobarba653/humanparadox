# Image Optimization Scripts

This directory contains scripts to optimize images for web use, improving loading times and reducing bandwidth usage.

## Scripts Available

### 1. `compress-images.js` - Simple Compression

Creates compressed versions of all images in `/public/images` and saves them to `/public/images/compressed`.

**Usage:**

```bash
npm run compress-images
```

**Features:**

- Compresses images to 85% quality
- Resizes to maximum 1920x1080px
- Converts all formats to JPEG
- Creates compressed copies (doesn't modify originals)
- Shows compression statistics

### 2. `optimize-images.js` - Advanced Optimization

Replaces original images with optimized versions and creates responsive image sizes.

**Usage:**

```bash
npm run optimize-images
```

**Features:**

- Creates backups of original images
- Generates multiple responsive sizes:
  - Mobile: 768x1024px
  - Tablet: 1024x768px
  - Desktop: 1920x1080px
  - Large: 2560x1440px
- Replaces original with desktop version
- Converts all formats to optimized JPEG
- Shows detailed optimization statistics

## Configuration

You can modify the scripts to adjust:

- **Quality**: Change `QUALITY` variable (1-100, default: 85)
- **Max dimensions**: Modify `MAX_WIDTH` and `MAX_HEIGHT`
- **Responsive sizes**: Update the `SIZES` object in `optimize-images.js`

## Recommendations

1. **First time**: Use `compress-images.js` to see the results without modifying originals
2. **Production**: Use `optimize-images.js` for final optimization
3. **Backup**: Always keep backups of original images
4. **Testing**: Test your website after optimization to ensure quality is acceptable

## File Structure After Optimization

```
public/images/
├── backup/           # Original images (created by optimize-images.js)
├── compressed/        # Compressed copies (created by compress-images.js)
├── hero-1.jpg         # Optimized original images
├── hero-2.jpg
└── ...
```

## Performance Benefits

- **Faster loading**: Smaller file sizes reduce load times
- **Better SEO**: Google favors fast-loading websites
- **Reduced bandwidth**: Lower hosting costs and better user experience
- **Mobile optimization**: Responsive images for different screen sizes

## Troubleshooting

- **Sharp errors**: Ensure Sharp is installed (`npm install sharp`)
- **Permission errors**: Make scripts executable (`chmod +x scripts/*.js`)
- **Memory issues**: Process images in smaller batches for very large files
