# OnlineTranslation.ae - Master Reference Document

## Overview

OnlineTranslation.ae is a "Digital Concierge" service in Dubai, specializing in document clearing and project management for legal translation. It aims to provide a "boutique" experience, emphasizing speed, trust, and government acceptance of translated documents, bridging the gap between slow legacy agencies and unreliable street shops. The service offers "Stress Management" and "Government Acceptance" through features like a "60-Minute Promise" for digital drafts and a "White-Glove" Shield for pre-validation. Operating in partnership with Arkan Legal Translation for MOJ licensing and certification, OnlineTranslation.ae manages the platform, customer service, and logistics. The project's ambition is to achieve significant organic reach via a highly structured SEO content strategy.

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

The system is designed as a "Digital Concierge" with a "WhatsApp-First Architecture."

**UI/UX Decisions:**
- **Design Inspiration:** Divi Exodus immigration template.
- **Color Palette:** Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c), Text Dark (#1a1a1a), Text Muted (#666666), Background Light (#f8f9fa).
- **Typography:** Headings (Montserrat or Jost, 700-800 weight, uppercase with 0.3em letter-spacing), Body (Open Sans or Roboto, 400 weight, 1.8-1.9 line-height).
- **Principles:** Mobile-first design (70%+ UAE traffic is mobile), seamless WhatsApp integration, accordion-based content for SEO and mobile optimization, sticky bottom navigation (mobile only), no floating CTAs (use bottom action bar).
- **Hero Section:** Desktop features three overlapping cards (MOJ Certified, Court Accepted, 60-Min Draft); mobile displays these cards flowing after the hero.

**Technical Implementations:**
- **Tech Stack:** Static HTML/CSS/JS (no build process).
- **Deployment:** Vercel with `vercel.json` for configuration.
- **PWA:** `manifest.webmanifest` and `service-worker.js` for Progressive Web App capabilities.
- **Local Development:** `server.py` for a local development server.
- **CSS Architecture:** Base architecture CSS (`base-architecture.css`) defining section primitives, container system, grid utilities, spacing scale, and responsive breakpoints. Component styles reside in `porto-desktop.css` and 6 OS-specific stylesheets.
- **Schema Markup:** Required on every page (Service, LocalBusiness, FAQPage, BreadcrumbList).
- **Performance Standards:** Page load under 3 seconds on 3G, lazy loading, WebP images with JPG fallback, no JavaScript console errors.
- **CI/CD:** GitHub Actions for automated sitemap generation and deployment.

**Feature Specifications:**
- **Content Structure:** 4-Silo SEO structure (Legal & Corporate, Personal & Civil, Industry Specialized, Locations).
- **Page Anatomy:** "Above the Fold" section (H1, Concierge Intro, Service Snapshot, Primary CTA), Compliance Checklist (accordion), Step-by-Step Process (accordion), After-Care Guide, Pricing & Timelines, and FAQ (schema optimized).
- **Operational Scripts:** Pre-defined scripts for WhatsApp triage and client query handling.

## External Dependencies

- **OneDrive:** Used for storing user's images and brand assets from the `OtLegalTranslationcom` folder.
- **GitHub:** Utilized for version control with the `onlinetranslation-dubai` repository.
- **Arkan Legal Translation:** Strategic partner for fulfillment, providing the MOJ license, stamp, and signature for certified translations.
- **Form Handler:** Contact forms use `form-handler.js` with graceful fallback to WhatsApp; optional Supabase integration for database storage.
- **Vercel:** Platform for production website deployment.

## Recent Changes (December 2025)

**Micro-Components for Visual Punctuation - December 6, 2025:**
- **Icon Box** (`.icon-box`): Flex container for checklist items with icon + content layout
  - Variants: `.icon-box--navy`, `.icon-box--gold` for different icon colors
  - Use with `.grid-2` for 2-column layout
- **Timeline** (`.timeline` + `.timeline-item`): Vertical process steps with coral/navy line
  - Variants: `.timeline--navy` for navy-colored timeline
  - Use `.timeline-title` span for step headers
- **Alert Box** (`.alert-box`): Callout boxes for warnings and important notes
  - Variants: `.alert-box--warning` (gold), `.alert-box--info` (navy), `.alert-box--success` (green)
  - Default is coral/red
- All components added to `styles/base-architecture.css`
- Birth certificate page refactored as template: Module B uses timeline, alert-boxes added to Module A

**Homepage Transparent Header - December 6, 2025:**
- **Homepage-only body class:** Added `homepage` class to index.html body tag
- **Transparent header on initial load:** Homepage header is fully transparent (no background, no blur) until scroll
- **White header elements:** Logo text, nav links, contact button, social icons, and mobile toggle all display white on homepage before scroll
- **CSS implementation:** `.homepage .header-desktop.exodus-header:not(.scrolled)` rules in porto-desktop.css
- **Scroll behavior preserved:** Header transitions to navy background on scroll (same as before)

**Service Worker:** Currently at v139