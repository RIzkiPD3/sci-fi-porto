# Sci-Fi Portfolio - Project Structure

## Overview
This is a futuristic sci-fi themed portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and GSAP animations.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata and global styles
│   ├── page.tsx           # Home page with section placeholders
│   └── globals.css        # Global styles and CSS variables
├── components/            # Reusable UI components
│   └── ui/               # UI-specific components
│       ├── CircuitBackground.tsx    # Animated circuit background
│       ├── GSAPAnimations.tsx       # GSAP animation wrapper
│       └── Hero.tsx                 # Hero section component
├── sections/              # Page sections
│   ├── About.tsx         # About section placeholder
│   ├── Projects.tsx      # Projects section placeholder
│   └── Contact.tsx       # Contact section placeholder
└── styles/               # Additional CSS files
    └── background.css    # Advanced circuit background animations
```

## Features

### 🎨 Design System
- **Color Palette**: Black background with cyan (#00e6e6) and blue (#0066ff) neon accents
- **Typography**: Orbitron (futuristic) and Poppins (readable) fonts
- **Effects**: Glowing text, circuit animations, holographic effects

### ⚡ Animations
- **GSAP**: Smooth page load animations and scroll-triggered effects
- **CSS**: Circuit background with energy flows, node pulses, and data streams
- **Responsive**: Optimized animations for mobile and desktop

### 🏗️ Architecture
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom theme
- **Component-based**: Modular and reusable components
- **SEO Ready**: Proper metadata and Open Graph tags

## Usage

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and use in `src/app/page.tsx`
3. Add appropriate GSAP animation classes (`fade-in`, `slide-in-left`, etc.)

### Customizing Animations
- Modify `src/components/ui/GSAPAnimations.tsx` for GSAP animations
- Update `src/styles/background.css` for CSS animations
- Use utility classes from `globals.css` for text effects

### Styling
- Use CSS variables defined in `globals.css` for consistent theming
- Apply `font-orbitron` for futuristic headings
- Use `text-cyan-glow` or `text-blue-glow` for neon text effects

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- GSAP animations work in all modern browsers
- Responsive design for mobile, tablet, and desktop
