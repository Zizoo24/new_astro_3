# OnlineTranslation.ae - Task Backlog

> **Primary Reference:** See `MASTER STRATEGIC BLUEPRINT_ The Digital Concierge Model.md` for all strategic guidance.
> SEO tasks tracked in Part VIII of the master blueprint.

This document tracks component/UI tasks. For SEO tasks, see `SEO-REPAIR-ROADMAP.md`.

---

## Completed Tasks

### Session: December 2024 - Component Architecture & CSS Fixes

| Task | Description | Notes |
|------|-------------|-------|
| Fix Vercel icons | Updated manifest.webmanifest and favicon links to match actual icon filenames | All icon paths now return HTTP 200 |
| Remove duplicate CSS directory | Deleted `src/styles/` which had outdated CSS conflicting with canonical `public/styles/` | Eliminates old whatsappPulse animation and other regressions |
| Fix mobile sticky bar | Restored mobile bottom navigation functionality | CSS selectors corrected |
| Fix homepage transparent navigation | Changed CSS targeting from `body.homepage` to `.header-homepage` for more reliable styling | Coral announcement bar stays coral, main nav transparent with white text before scroll |
| Create PageHero component | Reusable hero for category pages with breadcrumbs, supports dark/light themes | `src/components/PageHero.astro` |
| Create ServiceHero component | Detailed hero for service pages with badges, CTAs, and trust bars | `src/components/ServiceHero.astro` |
| Create CTASection component | Consistent WhatsApp call-to-action sections across pages | `src/components/CTASection.astro` |
| Migrate locations page | Converted to use new reusable PageHero and CTASection components | Proof of concept for component pattern |
| Service worker v148 | Bumped version for cache invalidation after CSS updates | `public/service-worker.js` |

---

## Current Tasks (In Progress)

| Task | Description | Status |
|------|-------------|--------|
| Fix hero-cta-secondary mobile styling | "Or request a written quote" link should be underlined but NOT blue on mobile | Completed |
| Create TestimonialsCarousel component | Carousel with touch swipe, navigation dots, auto-rotation | Completed |
| Add testimonials to homepage | Implement carousel with realistic client testimonials | Completed |
| Fix mobile sidebar contrast | Section titles, nav links, borders now use light colors for navy background | Completed |
| Update documentation | Updated replit.md with sidebar contrast rules, TestimonialsCarousel, service worker v152 | Completed |
| Fix brand-suffix color | Restored coral (#FF1654) for ".ae" suffix in sidebar | Completed |
| Add sidebar category links | Services, Personal, Corporate, Locations, Resources now link to category pages | Completed |
| Separate accordion from links | Chevron toggles accordion, section title navigates to category page | Completed |
| Fix Vercel CSS issues | Added .contact-btn.phone/.email styles, fixed dark section link colors | Completed |

---

## RelatedServices Deployment (Internal Linking Enhancement)

### Phase A: Completed (December 2024)

| Silo | Pages Updated | Status |
|------|---------------|--------|
| Legal/Contracts | lease, mou, spa, hub (4 pages) | ✅ Complete |
| Legal/Corporate | resolution (1 page) | ✅ Complete |
| Legal/Litigation | arbitration, verdict (2 pages) | ✅ Complete |
| Services/Attestation | mofa, embassy, philippines, pakistan (4 pages) | ✅ Complete |

### Phase B: Completed (December 15, 2024)

| Silo | Pages Updated | Status |
|------|---------------|--------|
| Locations | business-bay, downtown, marina, abu-dhabi (4 pages) | ✅ Complete |
| Specialized | digital, hospitality, technical (3 pages) | ✅ Complete |
| Industries | healthcare, real-estate, legal, e-commerce (4 pages) | ✅ Complete |
| Resources | attestation-guide, document-checklist, golden-visa-checklist, pricing-guide, faq (5 pages) | ✅ Complete |

**Total Completed:** 27 pages with RelatedServices component

### Phase C: Hub/Category Pages - Completed (December 15, 2024)

| Page | URL | Status |
|------|-----|--------|
| Legal Hub | /legal/ | ✅ Complete |
| Services Hub | /services/ | ✅ Complete |
| Locations Hub | /locations/ | ✅ Complete |
| Dubai Hub | /locations/dubai/ | ✅ Complete |
| Personal Hub | /personal/ | ✅ Complete |
| Industries Hub | /industries/ | ✅ Complete |
| Resources Hub | /resources/ | ✅ Complete |
| Specialized Hub | /specialized-translation/ | ✅ Complete |

**Total Phase C:** 8 hub/category pages
**Grand Total:** 35 pages with RelatedServices component

**Implementation Pattern:**
```astro
---
import RelatedServices from '../components/RelatedServices.astro';
---
<!-- Add before CTA section -->
<section class="section">
  <div class="container">
    <RelatedServices
      pageKey="pageKeyFromServiceLinks"
      title="You May Also Need"
      showFamily={true}
      showNextSteps={true}
      maxItems={6}
    />
  </div>
</section>
```

---

## Future Tasks (Backlog)

### High Priority

| Task | Description | Notes |
|------|-------------|-------|
| Complete RelatedServices deployment | Deploy to remaining ~27 service pages | Phase A, B, C complete - remaining service detail pages |
| Migrate high-traffic pages to ServiceLayout | Use the birth-certificate-style data-driven structure | ServiceLayout already supports this pattern |
| Expand 4 category pages to 2,000+ words | SEO requirement for organic reach | Legal & Corporate, Personal & Civil, Industry Specialized, Locations |
| Fix navigation URL bug | `/personal/education/degree/` should be `/personal/academic/degree/` | Verify in navigation.ts |

### Medium Priority

| Task | Description | Notes |
|------|-------------|-------|
| CSS consolidation | Remove redundant overrides and unused styles from public/styles/ | Wait until component migrations stabilize |
| Add more service pages | Target: 55+ pages total (currently 49) | Follow ServiceLayout pattern |
| Blog content production | Target: 15-30 posts/month | Infrastructure ready, 0 posts published |

### Low Priority / Ideas

| Task | Description | Notes |
|------|-------------|-------|
| Dark mode refinements | Ensure all components respect theme-dark class | Some pages may need testing |
| PWA enhancements | App-like experience improvements | Offline support, push notifications |
| Service worker re-enablement | Implement Workbox-based solution | Deferred until other priorities complete |

---

## SEO Implementation Status (Per Master Blueprint Part VIII)

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Bug Fixes (serviceLinks.ts, navigation.ts, robots.txt) | ✅ Complete |
| Phase 2 | Schema Enhancement | ✅ Complete |
| Phase 3 | Technical SEO | ✅ Complete |
| Phase 4 | Internal Linking (RelatedServices) | ✅ Complete (35/62 pages deployed) |
| Phase 5 | Content Engine (Blog) | ⏳ Infrastructure ready |
| Phase 6 | Polish (Pricing schemas, image optimization) | ⏳ Pending |

---

## Technical Notes

### CSS Architecture
- **Canonical CSS location:** `public/styles/` (NOT `src/styles/`)
- **Key files:**
  - `porto-desktop.css` - Base desktop styles
  - `navigation-glassmorphism.css` - Header/nav styling
  - `sticky-mobile.css` - Mobile bottom bar
  - `mobile-ios.css` - iOS-specific adjustments
  - `dark-mode.css` - Dark theme overrides

### Component Architecture
- **Layouts:** `BaseLayout.astro`, `ServiceLayout.astro`, `CategoryLayout.astro`
- **Reusable components:** `PageHero`, `ServiceHero`, `CTASection`, `TrustStrip`, `ProcessSteps`, `BenefitCards`, `AccordionSection`
- **Data pattern:** Service pages use `pageData` object passed to ServiceLayout

### Service Worker
- **Status:** Disabled (cleanup version that self-unregisters)
- **Reason:** Previous caching worker caused production cache poisoning on Vercel
- **Future:** Implement Workbox-based solution with hashed assets before re-enabling

### Vercel Cache Headers (vercel.json)
- `/service-worker.js`: no-cache, no-store, must-revalidate
- HTML pages: max-age=0, must-revalidate (via negative lookahead regex excluding static dirs)
- `/styles/*`, `/scripts/*`: max-age=0, must-revalidate (prevents stale CSS/JS)
- `/_astro/*`: default long-term caching (hashed filenames)
- `/images/*`: 30-day cache

### Inline Cache Buster (BaseLayout.astro)
- Synchronous inline script in `<head>` runs before any deferred scripts
- Unregisters all service workers via `navigator.serviceWorker.getRegistrations()`
- Clears all CacheStorage caches via `caches.keys()` / `caches.delete()`
- Guarantees fresh assets on every page load

### Versioned Script Files
- `main-v2.js` and `navigation-v2.js` replace original filenames
- Forces CDN cache miss on Vercel for all visitors

### Mobile Navigation Architecture
- **Footer bar items** (Menu, Search): `<button type="button">` elements to prevent navigation fallback
- **Header toggles** (Sidebar, Theme): `<button type="button">` elements
- **Real links** (WhatsApp, Call, Contact): `<a>` elements with proper hrefs
- **Script loading**: All scripts use `defer` attribute for DOM-ready execution
- **Focus states**: Accessible box-shadow focus rings using `:focus-visible`

### Mobile Sidebar Contrast (visibility-fixes.css)
- Sidebar background is forced to navy via `visibility-fixes.css`
- All sidebar text must use light colors (white/rgba(255,255,255,x))
- Hover/active states should use white text, not accent color

---

*Last updated: December 15, 2024 - Phase C RelatedServices deployment complete*
