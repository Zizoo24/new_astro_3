# Hero Image Implementation Plan

**Created:** December 30, 2025
**Status:** Assessment Complete - Ready for Implementation
**Scope:** Add hero images with gradient overlay to all 98 pages

---

## Executive Summary

The site has a **fully functional hero image system** in `ServiceLayout.astro` with gradient overlay support. However, only **2 pages** currently use it. This plan maps appropriate images to all pages for implementation.

---

## Current State

### Hero System Architecture (Already Built)

```
ServiceLayout.astro
├── heroImage prop → Triggers .has-hero-image class
├── <img class="hero-bg-image"> → Background image
├── <div class="hero-gradient-overlay"> → Navy gradient overlay
└── CSS (hero-enhancements.css, hero-optimization.css)
    ├── Gradient: 135° navy (rgba(14,43,72,0.92) → rgba(42,63,95,0.85))
    ├── Text shadow for legibility
    └── Mobile-responsive (absolute vs fixed positioning)
```

### Pages Currently Using Hero Images

| Page | Image | Status |
|------|-------|--------|
| `/services/legal-translation/` | `vis-translation.png` | ✅ Active |
| `/services/corporate-translation/` | `technical-translation.png` | ✅ Active |

**Remaining:** 96 pages need hero images added

---

## Available Hero Images

### Primary Hero Images (`/assets/images/onedrive/hero/`)

| Image | Size | Best For | Mood |
|-------|------|----------|------|
| `city-cyber.png` | 724 KB | Corporate, Dubai locations, Homepage | Modern, urban |
| `cyber-smith.png` | 583 KB | Technical, specialized services | Tech-forward |
| `medical-cyber.png` | 691 KB | Healthcare, DHA, medical pages | Clinical, professional |
| `office-team.png` | 374 KB | About, contact, reviews | Collaborative, human |
| `ot-man.png` | 519 KB | Translator bio, credentials | Personal, trustworthy |
| `technical-translation.png` | 911 KB | Corporate, technical silos | Professional |
| `vis-translation.png` | 760 KB | Legal, visualization | Analytical |

### Legacy Images (`/assets/images/`)

| Image | Size | Best For |
|-------|------|----------|
| `hero-city.jpg` | 245 KB | Homepage alternative, general |
| `hero-team.jpg` | 176 KB | About section alternative |

### Location-Specific (`/assets/images/onedrive/locations/`)

| Image | Size | Page |
|-------|------|------|
| `palm-jumeirah.png` | — | Palm Jumeirah location |
| `sharjah.png` | — | Sharjah locations |

### Resource Images (`/assets/images/resources/`)

| Image | Size | Notes |
|-------|------|-------|
| `authenticated-translation-hero.jpg` | 670 KB | Attestation/authentication pages |
| `authenticated-translation-hero 2.png` | **7.14 MB** | ⚠️ DELETE - oversized duplicate |

---

## Recommended Image Mapping by Silo

### 1. Legal Silo (13 pages)

**Recommended Image:** `vis-translation.png`
**Rationale:** Analytical/document visualization fits legal context

| Page | Path | Image |
|------|------|-------|
| Legal Hub | `/legal-translation-dubai/` | `vis-translation.png` |
| Contracts Hub | `/legal/contracts/` | `vis-translation.png` |
| NDA | `/legal/contracts/nda/` | `vis-translation.png` |
| SPA | `/legal/contracts/spa/` | `vis-translation.png` |
| MOU | `/legal/contracts/mou/` | `vis-translation.png` |
| Lease | `/legal/contracts/lease/` | `vis-translation.png` |
| Corporate Hub | `/legal/corporate/` | `technical-translation.png` |
| POA | `/legal/corporate/poa/` | `vis-translation.png` |
| MOA | `/legal/corporate/moa/` | `vis-translation.png` |
| Resolution | `/legal/corporate/resolution/` | `vis-translation.png` |
| License | `/legal/corporate/license/` | `vis-translation.png` |
| Litigation | `/legal/litigation/` | `vis-translation.png` |
| Wills | `/legal/wills/` | `vis-translation.png` |

### 2. Personal/Civil Silo (13 pages)

**Recommended Image:** `office-team.png`
**Rationale:** Human-centered, supportive tone for personal documents

| Page | Path | Image |
|------|------|-------|
| Personal Hub | `/personal-documents/` | `office-team.png` |
| Vital Records Hub | `/personal/vital-records/` | `office-team.png` |
| Birth | `/personal/vital-records/birth/` | `office-team.png` |
| Marriage | `/personal/vital-records/marriage/` | `office-team.png` |
| Divorce | `/personal/vital-records/divorce/` | `office-team.png` |
| Death | `/personal/vital-records/death/` | `office-team.png` |
| Immigration Hub | `/personal/immigration/` | `city-cyber.png` |
| PCC | `/personal/immigration/pcc/` | `city-cyber.png` |
| Bank | `/personal/immigration/bank/` | `city-cyber.png` |
| License | `/personal/immigration/license/` | `city-cyber.png` |
| Academic Hub | `/personal/academic/` | `cyber-smith.png` |
| Degree | `/personal/academic/degree/` | `cyber-smith.png` |
| Transcripts | `/personal/academic/transcripts/` | `cyber-smith.png` |

### 3. Specialized Silo (8 pages)

**Recommended Images:** Mixed by specialty

| Page | Path | Image |
|------|------|-------|
| Specialized Hub | `/specialized-translation/` | `technical-translation.png` |
| Medical Hub | `/specialized/medical/` | `medical-cyber.png` |
| DHA DataFlow | `/specialized/medical/dha-dataflow/` | `medical-cyber.png` |
| Technical | `/specialized/technical/` | `technical-translation.png` |
| Financial | `/specialized/financial/` | `city-cyber.png` |
| Hospitality | `/specialized/hospitality/` | `city-cyber.png` |
| Digital | `/specialized/digital/` | `cyber-smith.png` |

### 4. Services Silo (15 pages)

| Page | Path | Image |
|------|------|-------|
| Services Hub | `/services/` | `city-cyber.png` |
| Legal Translation | `/services/legal-translation/` | `vis-translation.png` ✅ Done |
| Corporate Translation | `/services/corporate-translation/` | `technical-translation.png` ✅ Done |
| Certificate Translation | `/services/certificate-translation/` | `office-team.png` |
| Golden Visa | `/services/golden-visa-translation/` | `city-cyber.png` |
| Title Deed | `/services/title-deed-translation-dubai/` | `city-cyber.png` |
| Attestation Hub | `/services/attestation/` | `authenticated-translation-hero.jpg` |
| Apostille | `/services/attestation/apostille/` | `authenticated-translation-hero.jpg` |
| Embassy | `/services/attestation/embassy/` | `authenticated-translation-hero.jpg` |
| MOFA | `/services/attestation/mofa/` | `authenticated-translation-hero.jpg` |
| India | `/services/attestation/india/` | `authenticated-translation-hero.jpg` |
| Pakistan | `/services/attestation/pakistan/` | `authenticated-translation-hero.jpg` |
| US | `/services/attestation/us/` | `authenticated-translation-hero.jpg` |
| UK | `/services/attestation/uk/` | `authenticated-translation-hero.jpg` |
| Canada | `/services/attestation/canada/` | `authenticated-translation-hero.jpg` |
| Philippines | `/services/attestation/philippines/` | `authenticated-translation-hero.jpg` |

### 5. Location Silo (11 pages)

**Primary Image:** `city-cyber.png`
**Override:** Location-specific where available

| Page | Path | Image |
|------|------|-------|
| Locations Hub | `/locations/` | `city-cyber.png` |
| Dubai Hub | `/locations/dubai/` | `city-cyber.png` |
| DIFC | `/locations/dubai/difc/` | `city-cyber.png` |
| Business Bay | `/locations/dubai/business-bay/` | `city-cyber.png` |
| JLT | `/locations/dubai/jlt/` | `city-cyber.png` |
| Marina | `/locations/dubai/marina/` | `city-cyber.png` |
| Downtown | `/locations/dubai/downtown/` | `city-cyber.png` |
| Palm Jumeirah | `/locations/dubai/palm-jumeirah/` | `palm-jumeirah.png` |
| Abu Dhabi | `/locations/abu-dhabi/` | `city-cyber.png` |
| Sharjah Hub | `/locations/sharjah/` | `sharjah.png` |
| Sharjah Tenancy | `/locations/sharjah/tenancy-translation/` | `sharjah.png` |

### 6. Resources Silo (14 pages)

**Primary Image:** `office-team.png` (informational, helpful tone)

| Page | Path | Image |
|------|------|-------|
| Resources Hub | `/resources/` | `office-team.png` |
| FAQ | `/resources/faq/` | `office-team.png` |
| Turnaround Times | `/resources/turnaround-times/` | `office-team.png` |
| Authenticated Translation | `/resources/authenticated-translation/` | `authenticated-translation-hero.jpg` |
| MOJ vs Certified | `/resources/moj-vs-certified/` | `vis-translation.png` |
| Attestation Guide | `/resources/attestation-guide/` | `authenticated-translation-hero.jpg` |
| Document Checklist | `/resources/document-checklist/` | `office-team.png` |
| Pricing Guide | `/resources/pricing-guide/` | `office-team.png` |
| Golden Visa Checklist | `/resources/golden-visa-checklist/` | `city-cyber.png` |
| US Citizens Guide | `/resources/us-citizens-dubai-guide/` | `city-cyber.png` |
| Case Studies Hub | `/resources/case-studies/` | `office-team.png` |
| Case: Family Visa | `/resources/case-studies/urgent-family-visa/` | `office-team.png` |
| Case: Rejected Doc | `/resources/case-studies/rejected-document-rescue/` | `office-team.png` |
| Case: DHA Deadline | `/resources/case-studies/dha-dataflow-deadline/` | `medical-cyber.png` |

### 7. Industries Silo (5 pages)

| Page | Path | Image |
|------|------|-------|
| Industries Hub | `/industries/` | `technical-translation.png` |
| Legal | `/industries/legal/` | `vis-translation.png` |
| Healthcare | `/industries/healthcare/` | `medical-cyber.png` |
| E-commerce | `/industries/e-commerce/` | `cyber-smith.png` |
| Real Estate | `/industries/real-estate/` | `city-cyber.png` |

### 8. Other Pages

| Page | Path | Image | Layout |
|------|------|-------|--------|
| Homepage | `/` | `city-cyber.png` | Custom |
| About | `/about/` | `office-team.png` | PageHero |
| Translator | `/about/translator/` | `ot-man.png` | TranslatorHero |
| Credentials | `/about/credentials/` | `office-team.png` | Custom |
| Reviews | `/about/reviews/` | `office-team.png` | Custom |
| Contact | `/contact/` | `office-team.png` | Custom |
| Blog Hub | `/blog/` | `cyber-smith.png` | BlogLayout |
| Blog Posts | `/blog/*/` | `cyber-smith.png` | BlogLayout |

### 9. Language Pages (10 pages)

**Image:** `city-cyber.png` (international, diverse)

| Page | Path |
|------|------|
| Arabic | `/عربي/` |
| Bengali | `/bengali/` |
| Chinese | `/chinese/` |
| Farsi | `/farsi/` |
| French | `/french/` |
| Hindi | `/hindi/` |
| Malayalam | `/malayalam/` |
| Russian | `/russian/` |
| Tagalog | `/tagalog/` |
| Urdu | `/urdu/` |

---

## Implementation Approach

### Phase 1: ServiceLayout Pages (Easiest - 60+ pages)

These pages already use `ServiceLayout.astro`. Just add `heroImage` prop:

```astro
---
// Before
const props = {
  heroTitle: "...",
  heroIntro: "...",
  // No heroImage
};
---

// After
const props = {
  heroTitle: "...",
  heroIntro: "...",
  heroImage: "/assets/images/onedrive/hero/city-cyber.png",
};
---
```

### Phase 2: CategoryLayout Pages (10+ pages)

Need to add heroImage support to `CategoryLayout.astro` similar to ServiceLayout.

### Phase 3: Custom Layout Pages (20+ pages)

Pages like Homepage, Contact, About require individual hero section updates.

### Phase 4: BlogLayout Pages (5+ pages)

Add hero image support to `BlogLayout.astro`.

---

## Image Optimization Recommendations

### Before Implementation:

1. **DELETE** `authenticated-translation-hero 2.png` (7.14 MB duplicate)
2. **Compress** images over 500KB to ~300KB target:
   - `technical-translation.png` (911 KB → ~300 KB)
   - `vis-translation.png` (760 KB → ~300 KB)
   - `city-cyber.png` (724 KB → ~300 KB)
   - `medical-cyber.png` (691 KB → ~300 KB)
   - `authenticated-translation-hero.jpg` (670 KB → ~300 KB)

3. **Generate WebP versions** for modern browsers

### Optimization Command:

```bash
# Using ImageMagick (example)
for img in public/assets/images/onedrive/hero/*.png; do
  convert "$img" -resize 1920x1080\> -quality 85 "${img%.png}.jpg"
done
```

---

## CSS Already in Place

The gradient overlay is already implemented in `hero-enhancements.css`:

```css
.section--hero.has-hero-image .hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(14, 43, 72, 0.95) 0%,
    rgba(26, 41, 66, 0.92) 50%,
    rgba(42, 63, 95, 0.85) 100%
  );
  z-index: 1;
}
```

No CSS changes needed for ServiceLayout pages.

---

## Summary Statistics

| Category | Pages | Primary Image |
|----------|-------|---------------|
| Legal Silo | 13 | `vis-translation.png` |
| Personal Silo | 13 | `office-team.png` |
| Specialized Silo | 8 | Mixed |
| Services Silo | 15 | Mixed |
| Location Silo | 11 | `city-cyber.png` |
| Resources Silo | 14 | `office-team.png` |
| Industries Silo | 5 | Mixed |
| Language Pages | 10 | `city-cyber.png` |
| Other Pages | 9 | Mixed |
| **Total** | **98** | **7 unique images** |

---

## Next Steps

1. **Approve this mapping** - Confirm image assignments are appropriate
2. **Optimize images** - Compress to ~300KB target
3. **Implement Phase 1** - Add `heroImage` to all ServiceLayout pages
4. **Implement Phase 2-4** - Update other layouts
5. **Test mobile** - Verify gradient overlay works on all devices

---

*Document generated for OnlineTranslation.ae hero image implementation project*
