# Human Paradox - Fisioterapia Website

A modern, responsive website for Human Paradox, a specialized physiotherapy clinic in Mexico City. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏥 About Human Paradox

Human Paradox is a specialized physiotherapy clinic founded in 2015, offering:
- **Rehabilitation & Performance**: From pain to strength - recover, re-educate, and optimize movement
- **Special Programs**: Designed for specific stages and populations (pregnancy, elderly, athletes)
- **Corporate Services**: Wellness solutions for organizations

## 🚀 Features

### **Modern Tech Stack**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Iconify** - Consistent icon system

### **Performance Optimizations**
- **Image Compression**: 94.6% size reduction (53.7MB → 2.9MB)
- **Responsive Images**: Different images for mobile/desktop
- **Optimized Loading**: Progressive JPEG and modern formats

### **User Experience**
- **Fully Responsive**: Mobile-first design
- **WhatsApp Integration**: Direct appointment booking
- **Interactive Elements**: Hover animations and smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### **Content Management**
- **Data-Driven**: Centralized content management system
- **Contact System**: Unified contact information across all pages
- **Standardized Headings**: Consistent typography system

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── empresas/          # Corporate services page
│   ├── programas/         # Special programs page
│   ├── rehabilitacion/    # Rehabilitation services page
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── layout/           # Navigation, Footer
│   └── UI/               # Buttons, Links
├── data/                 # Content management
│   ├── contact.ts        # Contact information
│   ├── empresas.ts       # Corporate content
│   ├── homepage.ts       # Homepage content
│   ├── programas.ts      # Programs content
│   └── rehabilitacion.ts # Rehabilitation content
└── types/                # TypeScript definitions
```

## 🛠️ Development

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/rodrigobarba653/humanparadox.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run compress-images    # Compress images (creates copies)
npm run optimize-images    # Optimize images (replaces originals)
```

## 🖼️ Image Optimization

The project includes powerful image optimization scripts:

### **Compression Script**
```bash
npm run compress-images
```
- Creates compressed copies in `/public/images/compressed/`
- 85% JPEG quality with progressive loading
- Resizes to max 1920x1080px
- Safe - doesn't modify originals

### **Optimization Script**
```bash
npm run optimize-images
```
- Replaces originals with optimized versions
- Creates responsive sizes (mobile, tablet, desktop, large)
- Backs up originals to `/public/images/backup/`
- Generates detailed compression statistics

## 📱 Pages

### **Homepage** (`/`)
- Hero section with call-to-action
- About us and empathy approach
- Services showcase with interactive cards
- Specializations overview

### **Rehabilitación** (`/rehabilitacion`)
- Rehabilitation and performance services
- Treatment approach and techniques
- What we apply section with icons

### **Programas** (`/programas`)
- Special programs for different populations
- Detailed program descriptions
- Benefits and features

### **Empresas** (`/empresas`)
- Corporate wellness services
- Target industries with image cards
- Interactive benefits accordion
- Process overview

## 🎨 Design System

### **Colors**
- **Primary**: `#f8f6e3` (Light cream)
- **Almost Black**: `#282828` (Dark gray)
- **Background**: `#f5f5dc` (Beige)

### **Typography**
- **Headings**: Standardized system with consistent sizing
- **Fonts**: Geist Sans, Open Sans
- **Responsive**: Mobile-first approach

### **Components**
- **CTAButton**: Call-to-action buttons with variants
- **LinkButton**: Styled link components
- **ContactInfo**: Reusable contact information display

## 📞 Contact Information

- **Email**: hola@hparadox.com
- **Phone**: +525554531398
- **WhatsApp**: [Direct booking link](https://wa.me/525554531398?text=Me%20interesa%20una%20cita%20con%20ustedes)
- **Address**: Av. Stim 1286, INT. P2-4, Plaza Ikon Bosques, Bosques de las Lomas, Cuajimalpa de Morelos, 05120, Ciudad de México, CDMX, México

### **Social Media**
- **Facebook**: [@hparadox](http://facebook.com/hparadox)
- **Instagram**: [@hparadox_mx](https://instagram.com/hparadox_mx)
- **LinkedIn**: [@humanparadox](https://linkedin.com/company/humanparadox)

## 🚀 Deployment

The project is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting service**

### **Build for Production**
```bash
npm run build
npm run start
```

## 📊 Performance

- **Image Optimization**: 94.6% compression achieved
- **Fast Loading**: Optimized images and code splitting
- **Mobile Performance**: Responsive design with mobile-specific optimizations
- **SEO Ready**: Proper meta tags and structured content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Human Paradox SAPI de CV. All rights reserved.

## 👥 Team

- **Development**: Built with modern web technologies
- **Design**: Mobile-first responsive design
- **Content**: Specialized physiotherapy content

---

**Human Paradox** - *How you move defines how you live* 🏃‍♂️💪