# Tailwind CSS v4 Setup - Complete Guide

## ✅ Current Status: WORKING

The project is now running with **Tailwind CSS v4.3.0** using the new PostCSS plugin architecture.

---

## 📋 Configuration Files

### 1. `src/index.css`
The main CSS file uses Tailwind v4's `@theme` directive for custom configuration:

```css
@import "tailwindcss";

@theme {
  /* Custom Colors */
  --color-primary: #1e40af;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e3a8a;
  --color-secondary: #8b5cf6;
  --color-secondary-light: #a78bfa;
  --color-secondary-dark: #7c3aed;
  --color-accent: #f97316;
  --color-accent-light: #fb923c;

  /* Custom Fonts */
  --font-sans: 'Inter', ...;
  --font-heading: 'Poppins', 'Inter', ...;

  /* Custom Animations */
  --animate-float: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
}
```

### 2. `postcss.config.js`
Uses the new `@tailwindcss/postcss` plugin:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 3. `tailwind.config.js`
Optional - can be used for content paths, but theme config is now in CSS:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Theme is configured in CSS @theme{}
    },
  },
}
```

---

## 🎨 Available Custom Colors

All custom colors are available as Tailwind utilities:

### Primary Colors
- `bg-primary` / `text-primary` / `border-primary` - #1e40af (blue)
- `bg-primary-light` / `text-primary-light` / `border-primary-light` - #3b82f6
- `bg-primary-dark` / `text-primary-dark` / `border-primary-dark` - #1e3a8a

### Secondary Colors
- `bg-secondary` / `text-secondary` / `border-secondary` - #8b5cf6 (purple)
- `bg-secondary-light` / `text-secondary-light` - #a78bfa
- `bg-secondary-dark` / `text-secondary-dark` - #7c3aed

### Accent Colors
- `bg-accent` / `text-accent` / `border-accent` - #f97316 (orange)
- `bg-accent-light` / `text-accent-light` - #fb923c

### Opacity Modifiers
All colors work with opacity modifiers:
- `bg-primary/50` - 50% opacity
- `text-secondary/80` - 80% opacity
- `border-accent/20` - 20% opacity

---

## 🔤 Custom Fonts

### Font Families
- `font-sans` - Inter (default body font)
- `font-heading` - Poppins (for headings)

### Usage
```jsx
<h1 className="font-heading">Heading Text</h1>
<p className="font-sans">Body text</p>
```

---

## ✨ Custom Animations

### Float Animation
```jsx
<div className="animate-float">
  This element floats up and down
</div>
```

---

## 🚀 Running the Project

```bash
npm run dev
```

Server will start at: **http://localhost:5173/**

---

## 📦 Key Differences from Tailwind v3

### ❌ What Doesn't Work (v3 syntax)
```css
/* DON'T USE - These don't exist in v4 */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

### ✅ What Works (v4 syntax)
```css
/* USE THIS - Single import */
@import "tailwindcss";
```

### Configuration Location
- **v3**: Configuration in `tailwind.config.js`
- **v4**: Configuration in CSS file using `@theme {}`

---

## 🎯 Component Examples

### Using Custom Colors
```jsx
// Hero section with gradient
<div className="bg-gradient-to-br from-primary via-primary-dark to-secondary">
  <h1 className="text-white">Welcome</h1>
</div>

// Button with primary color
<button className="bg-primary hover:bg-primary-light text-white">
  Click Me
</button>

// Card with border
<div className="border-2 border-primary rounded-lg">
  Content
</div>
```

### Using Custom Animations
```jsx
// Floating element
<div className="animate-float bg-purple-500/30 rounded-full blur-3xl">
</div>
```

### Using Opacity Modifiers
```jsx
<div className="bg-primary/10 backdrop-blur-md border border-white/30">
  Glassmorphic effect
</div>
```

---

## 🔧 Custom Utilities (in index.css)

Additional custom classes defined outside @theme:

### Layout
- `.section` - Standard section padding (5rem 1.5rem)
- `.container-custom` - Max-width container (1280px)

### Effects
- `.gradient-text` - Gradient text effect (primary → secondary → primary)
- `.shadow-glow` - Blue glow shadow
- `.shadow-glow-purple` - Purple glow shadow

### Scrollbar
Custom styled scrollbar with primary color theme

---

## 📝 Migration Notes

### Before (v3)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
      }
    }
  }
}
```

### After (v4)
```css
/* src/index.css */
@theme {
  --color-primary: #1e40af;
}
```

---

## ✅ Verified Working Features

- ✅ Custom colors (primary, secondary, accent with variants)
- ✅ Custom fonts (Inter, Poppins)
- ✅ Custom animations (float)
- ✅ Opacity modifiers (bg-primary/50)
- ✅ Gradient utilities (from-primary, via-secondary, to-accent)
- ✅ All standard Tailwind utilities
- ✅ Hot module replacement (HMR)
- ✅ PostCSS processing
- ✅ Autoprefixer

---

## 🐛 Troubleshooting

### If colors don't work:
1. Make sure `@theme {}` is in `src/index.css`
2. Restart the dev server (Ctrl+C, then `npm run dev`)
3. Check that color names use double hyphens: `--color-primary`

### If animations don't work:
1. Verify `@keyframes` is inside `@theme {}`
2. Check animation name matches: `--animate-float` → `animate-float`

### If imports fail:
1. Use only `@import "tailwindcss";` (not /base, /components, /utilities)
2. Check PostCSS config has `@tailwindcss/postcss` plugin

---

## 📚 Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [PostCSS Plugin Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [CSS Theme Syntax](https://tailwindcss.com/docs/theme)

---

**Last Updated:** May 21, 2026  
**Tailwind Version:** v4.3.0  
**Status:** ✅ Production Ready
