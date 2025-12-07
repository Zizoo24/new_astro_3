# OnlineTranslation.ae - Master Reference Document

## Overview

OnlineTranslation.ae is a "Digital Concierge" service in Dubai, specializing in document clearing and project management for legal translation. It aims to provide a "boutique" experience, emphasizing speed, trust, and government acceptance of translated documents. The service offers features like a "60-Minute Promise" for digital drafts and a "White-Glove" Shield for pre-validation. Operating in partnership with Arkan Legal Translation for MOJ licensing and certification, OnlineTranslation.ae manages the platform, customer service, and logistics. The project seeks significant organic reach through a highly structured SEO content strategy.

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

The system is designed as a "Digital Concierge" with a "WhatsApp-First Architecture," built using Astro 5.x static site generator.

**UI/UX Decisions:**
- **Design Inspiration:** Divi Exodus immigration template.
- **Color Palette:** Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c), Text Dark (#1a1a1a), Text Muted (#5a6a7a), Background Light (#f8f9fa).
- **Color Token System:** All colors use CSS custom properties defined in `base-architecture.css`. Light mode uses `:root`, dark mode uses `[data-theme="dark"]`. Token categories: `--surface-*` (backgrounds), `--text-*` (typography with documented contrast ratios), `--link-*` (link colors), `--accent-*` (coral/gold), `--state-*` (success/warning/error), `--border-*` (borders). Legacy aliases maintain backward compatibility: `--primary-color` (navy surfaces), `--primary-accent` (bright accents for dark mode text/icons), `--accent-color`, `--bg-dark`, etc.
- **Dark Mode Contrast:** All text meets WCAG AA (≥4.5:1). Headings use #f4f7fc (17.4:1), body text uses #d1dce9 (14.0:1), muted text uses #9fb2c9 (8.2:1). `--primary-accent` provides bright cyan (#58a6ff) for icons/links against dark backgrounds.
- **Typography:** Headings (Montserrat or Jost, 700-800 weight, uppercase with 0.3em letter-spacing), Body (Open Sans or Roboto, 400 weight, 1.8-1.9 line-height).
- **Principles:** Mobile-first design (70%+ UAE traffic is mobile), seamless WhatsApp integration, accordion-based content, sticky bottom navigation (mobile only), no floating CTAs.
- **Hero Section:** Desktop features three overlapping cards (MOJ Certified, Court Accepted, 60-Min Draft); mobile displays these cards sequentially.
- **Micro-Components:** Icon Box, Timeline, Alert Box for visual punctuation.

**Technical Implementations:**
- **Tech Stack:** Astro 5.x with a component-based architecture.
- **Deployment:** Vercel.
- **Current Page Count:** 49 pages built (target: 55+).
- **CSS Architecture:** CSS files served from `public/styles/` (synced from `styles/`). Key files: `base-architecture.css` (design system tokens, responsive variables), `porto-desktop.css` (desktop styles), `navigation-glassmorphism.css` (header/nav/dropdown styling), `sticky-mobile.css` (mobile bottom bar and sidebar), `visibility-fixes.css` (sidebar contrast), `dark-mode.css` (theme overrides).
- **Responsive Design System:** Uses CSS custom properties with `clamp()` for fluid scaling. Typography: `--fs-xs` through `--fs-hero`. Spacing: `--space-xs` through `--space-3xl`. Section padding: `--section-py`, `--section-py-sm`, `--section-py-lg`. All defined in `base-architecture.css`.
- **Global Scale:** `html { font-size: 80% }` applies a 20% reduction to all rem-based elements for a more compact desktop fit. The nav bar is exempt via `.nav-shell { font-size: calc(1rem / 0.8) }` which restores the original 16px baseline for the header. Header uses flexbox layout with flexible nav width (`flex: 1 1 auto`) and fixed contact button (`flex-shrink: 0`). Media query at 1400px further reduces spacing for narrower screens.
- **Announcement Bar Collapse:** On scroll past 50px, the coral announcement bar collapses using `max-height: 0` animation (not transform) so content moves up smoothly without leaving a gap.
- **Dark Mode:** Toggle sets both `body.theme-dark` class and `html[data-theme="dark"]` attribute. Color variables auto-switch in dark mode. Moon/sun icon toggle in header and mobile. Theme toggle logic is implemented as an inline script (`is:inline`) in `Header.astro` for reliable production execution on Vercel - this ensures the script runs immediately without build/deployment race conditions.
- **Mobile Sidebar Contrast:** The sidebar background is forced to navy via `visibility-fixes.css` (`rgba(14, 43, 72, 0.98)`). All sidebar text must use light colors (`rgba(255, 255, 255, 0.7-0.92)`). Hover/active states use white text (#ffffff), not accent color, to meet WCAG AA contrast requirements (≥4.5:1 for text, ≥3:1 for icons).
- **Service Worker:** Currently disabled (self-unregistering cleanup version). The previous caching service worker was causing production cache poisoning on Vercel. PWA/offline support is temporarily disabled until a hashed-cache or Workbox-based solution is implemented.
- **Vercel Caching:** All pages use `max-age=0, must-revalidate` by default. Hashed `/_astro/` assets use Vercel default caching. Service worker uses `no-cache, no-store`. Images use 30-day cache. No Content-Security-Policy header (was causing resource blocking issues).
- **Sidebar Section Links:** Section titles (Services, Personal, etc.) are now clickable links to category pages. The chevron icon is a separate button that toggles the accordion submenu.
- **Layout Components:** `BaseLayout.astro` (base HTML wrapper), `CategoryLayout.astro` (reusable category page structure with hero, breadcrumbs, and shared styles).
- **Schema Markup:** Automatic generation for Service, Breadcrumb, and FAQ schemas via `ServiceLayout` component.
- **Performance Standards:** Page load under 3 seconds on 3G, lazy loading, WebP images with JPG fallback, no JavaScript console errors.
- **GitHub Repository:** `OT.ae-astro-astro` (Astro-only repo).
- **Reference Repos:** `OnlineTranslation-Hybrid` (original static HTML), `onlinetranslation-dubai` (complete Astro version).

**Feature Specifications:**
- **Content Structure:** 4-Silo SEO structure (Legal & Corporate, Personal & Civil, Industry Specialized, Locations).
- **Page Anatomy:** "Above the Fold" section (H1, Concierge Intro, Service Snapshot, Primary CTA), Compliance Checklist, Step-by-Step Process, After-Care Guide, Pricing & Timelines, and FAQ.
- **Internal Linking:** Centralized URL mappings in `src/data/serviceLinks.ts` for consistent internal linking across service, document, and location mentions. Link density standard: 1-2 contextual links per paragraph, no duplicate anchors within same thematic blocks.
- **Key Components:** `Icon.astro`, `TrustStrip.astro`, `ProcessSteps.astro`, `BenefitCards.astro`, `AccordionSection.astro`, `TestimonialsCarousel.astro` for content modularity and reusability.
- **TestimonialsCarousel:** Touch-swipe enabled carousel with navigation dots, arrow controls, and 5-second auto-rotation. External JS in `public/scripts/testimonials-carousel.js`. Displays client testimonials with names, roles, and UAE locations. Guard clause checks for `.testimonials-section` OR `.carousel-wrapper` before initializing. All testimonial text uses light colors (0.75-0.9 opacity white) on navy gradient background for WCAG AA compliance.
- **Homepage Styling (December 2025):** Service cards use `.service-card-v2` styles with dark mode support via CSS variables. Process step index circles use coral (#FF1654) background with 20px bold white text (qualifies as "large text" for 3:1 contrast). Diagonal navy section transitions use `z-index: -1` and `pointer-events: none` to prevent overlay issues. Testimonials section has navy gradient with glassmorphism cards.
- **serviceLinks.ts Pattern:** Single source of truth for all service/document/location URLs. Exports: `serviceLinks` (object with url/text/full), `footerServices` (array for footer rendering), `relatedServices` (grouped by category), `makeLink()` helper function. Footer.astro wired to use `footerServices`.

## External Dependencies

- **OneDrive:** Stores user images and brand assets from the `OtLegalTranslationcom` folder.
- **GitHub:** Hosts the `OT.ae-astro-astro` repository.
- **Arkan Legal Translation:** Strategic partner providing MOJ license, stamp, and signature for certified translations.
- **Form Handler:** Used for contact forms with graceful fallback to WhatsApp.
- **Vercel:** Deployment platform for the website.

## Recent Changes (December 2025)

### Theme Toggle Styling
- Desktop theme toggle button (#themeToggle) now uses softer neutral styling in light mode
- Muted gray border and text color (`--text-muted`) instead of stark navy contrast
- Hover state uses coral accent for consistency with brand
- Scrolled state uses subtle white tones on navy header background

### Vercel Configuration
- Removed duplicate `/contact-us/` redirect entry (was appearing twice in vercel.json)
- Security headers already in place: X-Content-Type-Options (nosniff), X-Frame-Options (DENY), Referrer-Policy (strict-origin-when-cross-origin)
- cleanUrls: true and trailingSlash: false configured for SEO

### SEO Content Expansion
- Legal Translation page (`/services/legal-translation/`) expanded to 2000+ words with comprehensive content covering court documents, contracts, litigation support, and working with law firms
- Palm Jumeirah page (`/locations/dubai/palm-jumeirah/`) expanded to 2000+ words covering property documentation, remote investor support, developer handovers, and transaction scenarios
- Content follows brand voice: professional, helpful, no hype, concierge tone
- Pages include multiple content sections with proper heading hierarchy (H2, H3) for SEO

### Content Standards
- Target: 2000+ words per service/location page for SEO authority
- Style: Professional concierge voice, solution-focused, no marketing speak
- Structure: Hero intro + accordion sections + prose content sections + pricing + FAQ
- Internal linking: Contextual links to related services using established URL patterns