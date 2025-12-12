# OnlineTranslation.ae - Color Palette Blueprint

**Version:** 1.0
**Last Updated:** December 2025
**Source of Truth:** `public/styles/base-architecture.css`

---

## Overview

This document defines the unified color token system for OnlineTranslation.ae. All colors use CSS custom properties (variables) with WCAG AA accessibility compliance built-in.

---

## Brand Identity Colors

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Coral** | `#FF1654` | `#ff6b6b` | CTAs, Accent, Announcement Bar |
| **Navy** | `#0E2B48` | `#243347` | Headers, Hero sections |
| **Teal** | `#0077b6` | `#7fd1ff` | Links, Secondary accent |
| **Gold** | `#d4a54c` | `#ffe178` | Premium indicators, Hover states |

---

## Light Mode Tokens

### Surface Colors (Backgrounds)
```css
--surface-base: #ffffff;       /* Page background */
--surface-raised: #f8f9fa;     /* Cards, elevated elements */
--surface-muted: #f0f2f5;      /* Alternate sections */
--surface-navy: #0E2B48;       /* Headers, hero, dark sections */
--surface-navy-dark: #072035;  /* Deeper navy variant */
--surface-overlay: rgba(14, 43, 72, 0.85); /* Hero overlays */
```

### Text Colors (on white/light backgrounds)
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--text-heading` | `#0E2B48` | 14.4:1 | Headings |
| `--text-body` | `#2d3748` | 10.7:1 | Body copy |
| `--text-secondary` | `#4a5568` | 7.0:1 | Secondary text |
| `--text-muted` | `#5a6a7a` | 5.3:1 | Muted text (warm gray) |
| `--text-subtle` | `#718096` | 4.5:1 | Minimum contrast |

### Text Colors (on navy/dark backgrounds)
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--text-on-dark` | `#f4f7fc` | 15.2:1 | Primary on dark |
| `--text-on-dark-muted` | `#c5d4e8` | 9.8:1 | Muted on dark |
| `--text-on-dark-subtle` | `#9fb2c9` | 6.4:1 | Subtle on dark |

### Link Colors
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--link-color` | `#0077b6` | 5.2:1 | Links on white |
| `--link-hover` | `#005f8a` | 7.4:1 | Link hover |
| `--link-on-dark` | `#7fd1ff` | 11.2:1 | Links on navy |
| `--link-on-dark-hover` | `#ffe178` | 14.8:1 | Link hover (gold) |

### Accent Colors
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--accent-coral` | `#FF1654` | 4.7:1 | CTAs, Primary accent |
| `--accent-coral-hover` | `#e01346` | 5.5:1 | Hover state |
| `--accent-gold` | `#b8860b` | 4.6:1 | Gold accent |
| `--accent-gold-light` | `#d4a54c` | 3.2:1 | Large text only |

### State Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--state-success` | `#047857` | Success messages |
| `--state-warning` | `#b45309` | Warnings |
| `--state-danger` | `#dc2626` | Errors |
| `--state-info` | `#0369a1` | Information |

### Border Colors
```css
--border-light: #e2e8f0;    /* Subtle borders */
--border-medium: #cbd5e1;   /* Medium borders */
--border-dark: #94a3b8;     /* Strong borders */
--border-on-dark: rgba(255,255,255,0.2); /* On dark bg */
```

### Shadows
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
```

---

## Dark Mode Tokens

### Surface Colors (Backgrounds)
```css
--surface-base: #0b111a;       /* Deep indigo base */
--surface-raised: #121b2a;     /* Nav, top bar */
--surface-muted: #1b2738;      /* Cards */
--surface-navy: #243347;       /* Popovers, elevated */
--surface-navy-dark: #0b111a;  /* Deepest */
--surface-overlay: rgba(11, 17, 26, 0.82);
```

### Text Colors (on dark backgrounds)
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--text-heading` | `#f4f7fc` | 17.4:1 | Headings |
| `--text-body` | `#dfe8f5` | 14.0:1 | Body copy |
| `--text-secondary` | `#c5d4e8` | 12.5:1 | Secondary |
| `--text-muted` | `#9fb2c9` | 8.7:1 | Muted (warm, not icy) |
| `--text-subtle` | `#7a8fa6` | 5.8:1 | Subtle |

### Link Colors (Dark Mode)
| Token | Hex | Contrast Ratio | Usage |
|-------|-----|----------------|-------|
| `--link-color` | `#7fd1ff` | 11.2:1 | Cyan links |
| `--link-hover` | `#ffe178` | 14.8:1 | Gold hover |

### Accent Colors (Dark Mode)
| Token | Hex | Note |
|-------|-----|------|
| `--accent-coral` | `#ff6b6b` | Softer coral |
| `--accent-coral-hover` | `#ff5050` | Hover state |
| `--accent-gold` | `#f2cf87` | Warmer gold |
| `--accent-gold-light` | `#ffe178` | Bright gold |

### Border Colors (Dark Mode)
```css
--border-light: #1f2a3a;
--border-medium: #304156;
--border-dark: #3d4f66;
--border-on-dark: rgba(255,255,255,0.15);
```

### Shadows (Dark Mode)
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 6px 20px rgba(0,0,0,0.5);
--shadow-lg: 0 12px 40px rgba(0,0,0,0.6);
```

---

## Porto Navigation Tokens

Located in `public/styles/porto-dropdown-onlinetranslation.css`:

```css
/* OnlineTranslation.ae Brand Colors */
--ot-primary: #1a5f7a;           /* Teal - main brand */
--ot-primary-light: #2d8fb8;     /* Lighter teal */
--ot-primary-dark: #15526a;      /* Darker teal */
--ot-header-dark: #0a1628;       /* Dark navy header */
--ot-header-gradient: #1a365d;   /* Navy gradient end */
--ot-whatsapp: #25D366;          /* WhatsApp green */

/* Coral Accent */
--ot-coral: #FF1654;             /* Primary coral - CTAs */
--ot-coral-hover: #e01346;       /* Coral hover state */
--ot-coral-subtle: rgba(255, 22, 84, 0.08);

/* Porto Dropdown Tokens */
--dropdown-bg: #ffffff;
--dropdown-text: #333333;
--dropdown-text-muted: #777777;
--dropdown-hover-bg: #f8f9fa;
--dropdown-border: #e8e8e8;
--dropdown-border-top: var(--ot-primary);  /* Teal top border */
```

---

## Legacy Aliases

For backward compatibility, these aliases map to the new token system:

```css
/* Brand colors */
--brand-coral: var(--accent-coral);
--brand-navy: var(--surface-navy);
--brand-gold: var(--accent-gold-light);

/* Background colors */
--bg-white: var(--surface-base);
--bg-light: var(--surface-raised);
--bg-alt: var(--surface-muted);
--bg-dark: var(--surface-navy-dark);
--bg-card: var(--surface-base);

/* Text colors */
--text-dark: var(--text-heading);
--text-light: var(--text-on-dark);

/* Primary colors */
--primary-color: var(--surface-navy);
--accent-color: var(--accent-coral);
```

---

## Usage Guidelines

### 1. Always Use Tokens
Never use raw hex values in stylesheets. Always reference CSS custom properties.

**Do:**
```css
.card {
  background: var(--surface-raised);
  color: var(--text-body);
  border: 1px solid var(--border-light);
}
```

**Don't:**
```css
.card {
  background: #f8f9fa;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}
```

### 2. Contrast Requirements
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text (18px+):** Minimum 3:1 contrast ratio
- **UI components:** Minimum 3:1 contrast ratio

### 3. Dark Mode Support
When adding new styles, always include dark mode variants:

```css
.my-component {
  background: var(--surface-raised);
  color: var(--text-body);
}

/* Dark mode automatically handled via tokens */
```

### 4. Interactive States
Use consistent hover/focus states:

```css
.button {
  background: var(--accent-coral);
}

.button:hover {
  background: var(--accent-coral-hover);
}

.button:focus-visible {
  outline: 2px solid var(--link-color);
  outline-offset: 2px;
}
```

---

## Component-Specific Colors

### Announcement Bar
- Background: `var(--accent-color)` (coral)
- Text: `var(--text-light)` (white)

### Trust Bar (Logo Capsules)
- Light Mode: White capsule background
- Dark Mode: White/near-white capsule background (logos displayed in original colors)

### Navigation
- Header Background: Navy gradient (`--ot-header-dark` to `--ot-header-gradient`)
- Dropdown Background: White with teal top border
- Link Hover: Teal accent bar on left

---

## File References

| File | Purpose |
|------|---------|
| `public/styles/base-architecture.css` | Core token definitions |
| `public/styles/dark-mode-tokenized.css` | Dark mode overrides |
| `public/styles/porto-dropdown-onlinetranslation.css` | Navigation tokens |
| `public/styles/trust-bar.css` | Trust bar styles |

---

*This blueprint is auto-generated from the codebase. For updates, modify the source CSS files.*
