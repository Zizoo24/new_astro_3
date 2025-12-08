## Overview

OnlineTranslation.ae is a "Digital Concierge" service in Dubai, specializing in document clearing and project management for legal translation. It provides a "boutique" experience focused on speed, trust, and government acceptance of translated documents, including a "60-Minute Promise" for digital drafts and a "White-Glove" Shield for pre-validation. The service operates in partnership with Arkan Legal Translation for licensing and certification, while OnlineTranslation.ae manages the platform, customer service, and logistics. The project aims for significant organic reach through a highly structured SEO content strategy, targeting a premium market.

## User Preferences

- **Communication Style:** Polite, honest, calm, understated confidence, radical transparency, human warmth, professional, warm, solution-focused, humble, adult. Avoid hype, slang, marketing speak, exclamation points, all-caps (except acronyms), and sales urgency.
- **Tone for AI-generated content:** Act as the Head Concierge, focusing on kindness and efficiency, admitting limitations, avoiding over-promising, and sounding like a professional having coffee with a client. The goal is to solve the red-tape problem, not extract money.
- **Content guidelines:** Never claim to be the 'Best' or 'Number 1'. Acknowledge the existence of many agencies but explain the focus on service. Emphasize "Peace of Mind." If mentioning Arkan, they are 'Technical Experts'; we are 'Relationship Managers'. End every piece with a helpful, low-pressure offer to check their files.
- **Workflow preferences:** Iterative development with a focus on delivering high-quality, SEO-optimized content across various document types and locations.
- **UI/UX Preferences:** Desktop experience should feel corporate and professional. Mobile experience should prioritize sticky bottom navigation, smooth subtle animations (0.3s transitions), and a coral accent for CTAs. User's own photos from OneDrive should be used instead of stock images.
- **Design inspiration:** Divi Exodus immigration template.
- **Specific elements:** Hero overlap cards for desktop, no overlap for mobile, mobile cards with transparent container and 92% opacity.
- **Brand vocabulary:** No banned words in any content.
- **Primary CTA:** WhatsApp on all devices.
- **SEO focus:** Palm Jumeirah for HNW signal.

## System Architecture

The system is designed as a "Digital Concierge" with a "WhatsApp-First Architecture," built using Astro 5.x static site generator and deployed on Vercel.

**UI/UX Decisions:**
- **Design Inspiration:** Divi Exodus immigration template.
- **Color Palette:** Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c), Text Dark (#1a1a1a), Text Muted (#5a6a7a), Background Light (#f8f9fa). A comprehensive color token system using CSS custom properties (`--surface-*`, `--text-*`, `--link-*`, `--accent-*`, `--state-*`, `--border-*`) supports light and dark modes, ensuring WCAG AA contrast ratios.
- **Typography:** Headings use Montserrat or Jost (700-800 weight, uppercase, 0.3em letter-spacing); Body uses Open Sans or Roboto (400 weight, 1.8-1.9 line-height).
- **Principles:** Mobile-first design (70%+ UAE traffic), seamless WhatsApp integration, accordion-based content, sticky bottom navigation (mobile only), no floating CTAs.
- **Hero Section:** Desktop features three overlapping cards (MOJ Certified, Court Accepted, 60-Min Draft); mobile displays these cards sequentially.
- **Micro-Components:** Icon Box, Timeline, Alert Box for visual punctuation.

**Technical Implementations:**
- **Tech Stack:** Astro 5.x with a component-based architecture.
- **CSS Architecture:** Uses CSS custom properties and `clamp()` for responsive design. All CSS lives in `public/styles/` (single source of truth). Load order: base-architecture.css → porto-desktop.css → services-enhanced.css → document-pages.css → visibility-fixes.css → navigation-glassmorphism.css → subsection-menu.css → sticky-mobile.css → mobile-ios.css → mobile-android.css → desktop-macos.css → dark-mode.css → megamenu.css. Navigation-glassmorphism.css is the single source of truth for header styles and loads after porto-desktop.css enabling cascade-based styling without !important.
- **CSS Consolidation (Dec 2025):** Reduced !important declarations from 361 to 320. Navigation layer cleaned (42→1 !important). Homepage-specific header overrides added to navigation-glassmorphism.css to maintain cascade priority over porto-desktop.css. Duplicate styles/ directory removed. OS-agnostic base variables added to base-architecture.css (--os-font, --os-radius, --os-nav-height, --os-elevation-*). Platform-specific files (mobile-ios.css, mobile-android.css, desktop-macos.css) now inherit from base variables. Dark-mode.css analysis: 255 !important declarations required for light→dark cascade override; full refactor deferred as high-risk.
- **Global Scale:** `html { font-size: 80% }` for a compact desktop fit, with specific overrides for navigation.
- **Dark Mode:** Implemented with a `body.theme-dark` class and `html[data-theme="dark"]` attribute, with an inline script in `Header.astro` for reliable toggling.
- **Mobile Sidebar:** Uses a navy glass background with `backdrop-filter: blur()`, ensuring WCAG AA contrast for text and icons using `var(--text-on-dark)` tokens.
- **Service Worker:** Currently disabled due to production cache poisoning issues; PWA/offline support is pending a robust solution.
- **Vercel Caching:** Pages use `max-age=0, must-revalidate`; hashed assets use Vercel defaults; images use 30-day cache.
- **Layout Components:** `BaseLayout.astro` and `CategoryLayout.astro` provide structural foundations.
- **Schema Markup:** Automatic generation for Service, Breadcrumb, and FAQ schemas via `ServiceLayout` component.
- **Performance Standards:** Page load under 3 seconds on 3G, lazy loading, WebP images with JPG fallback, no JavaScript console errors.
- **GitHub Repository:** `OT.ae-astro-astro` (Astro-only repo).

**Feature Specifications:**
- **Content Structure:** 4-Silo SEO structure (Legal & Corporate, Personal & Civil, Industry Specialized, Locations).
- **Page Anatomy:** "Above the Fold" section (H1, Concierge Intro, Service Snapshot, Primary CTA), Compliance Checklist, Step-by-Step Process, After-Care Guide, Pricing & Timelines, and FAQ.
- **Internal Linking:** Centralized URL mappings in `src/data/serviceLinks.ts` ensure consistent and contextual internal linking with a density of 1-2 links per paragraph.
- **Key Components:** `Icon.astro`, `TrustStrip.astro`, `ProcessSteps.astro`, `BenefitCards.astro`, `AccordionSection.astro`, `TestimonialsCarousel.astro`, `DulBadge.astro`, `AuthorityLogos.astro` for content modularity.
- **DulBadge Component:** Two variants - 'pill' (glassmorphism badge for hero sections) and 'detailed' (full licensing card for About page). Links to verified DUL: https://app.invest.dubai.ae/DUL/1DE9D8AA-768A-4CFC-BC27-A6F23017B858
- **AuthorityLogos Component:** Horizontal strip showing government authorities (MoJ, Dubai Courts, Dubai Police, DLD, MOFAIC) with grayscale-to-color hover effect. Currently uses placeholder SVG icons - official logos needed.
- **TestimonialsCarousel:** Touch-swipe enabled carousel with navigation, auto-rotation, and WCAG AA compliant text on a navy gradient background.
- **serviceLinks.ts Pattern:** Single source of truth for all service/document/location URLs, used for navigation and related service groupings.

## External Dependencies

- **OneDrive:** Stores user images and brand assets.
- **GitHub:** Hosts the project's codebase.
- **Arkan Legal Translation:** Strategic partner for MOJ licensing, stamp, and signature for certified translations.
- **Form Handler:** Used for contact forms with a WhatsApp fallback.
- **Vercel:** Deployment platform.
- **GA4 Analytics:** Configured with Measurement ID `G-FYYVZPDR19`, respects cookie consent.