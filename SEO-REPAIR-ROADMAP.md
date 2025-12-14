# SEO Repair Roadmap - OnlineTranslation.ae

**Audit Date:** December 14, 2025
**Status:** Comprehensive assessment complete

---

## Executive Summary

| Area | Critical | High | Medium | Low |
|------|----------|------|--------|-----|
| Technical | 2 | 3 | 2 | 1 |
| Schema | 4 | 4 | 5 | 2 |
| Content/Linking | 3 | 4 | 3 | 1 |
| **Total** | **9** | **11** | **10** | **4** |

---

## Phase 1: Critical Bug Fixes (Immediate)

*These break functionality or cause crawl errors*

### 1.1 serviceLinks.ts Bugs

**Bug A: Wrong degree URL (Line 201)**
```typescript
// CURRENT (WRONG)
degree: {
  url: "/personal/education/degree/",

// SHOULD BE
degree: {
  url: "/personal/academic/degree/",
```

**Bug B: getLocationPages() returns wrong data (Line 892)**
```typescript
// CURRENT (BUG)
export const getLocationPages = (key: string): ServiceLink[] => {
  return relationships.locations
    .map(k => serviceLinks[key])  // ❌ Returns same key repeatedly
    .filter(Boolean);
};

// SHOULD BE
export const getLocationPages = (key: string): ServiceLink[] => {
  return relationships.locations
    .map(k => serviceLinks[k])  // ✅ Returns each location
    .filter(Boolean);
};
```

**File:** `/src/data/serviceLinks.ts`

---

### 1.2 navigation.ts URL Mismatch

**Line 316:** Wrong degree URL path
```typescript
// Fix: Change /personal/education/degree/ to /personal/academic/degree/
```

**File:** `/src/data/navigation.ts`

---

### 1.3 robots.txt Sync Issues

**Problem:** Root and public versions have different content
- Line 39: sitemap.xml vs sitemap-index.xml
- Line 20: /personal/academic/ vs /personal/education/
- Line 51: /llms.txt only in public version

**Fix:** Synchronize files or remove root version (public is served)

**Files:**
- `/robots.txt`
- `/public/robots.txt`

---

### 1.4 Missing Blog Routes (Breaking Links)

**Problem:** UI references routes that don't exist

| Missing Route | Referenced In |
|---------------|---------------|
| `/blog/category/[category]/` | `/src/pages/blog/index.astro:61` |
| `/blog/tag/[tag]/` | `/src/layouts/BlogLayout.astro:202` |

**Fix:** Create category and tag archive pages

---

## Phase 2: Schema Consistency (High Priority)

*Affects search engine understanding of your business*

### 2.1 Conflicting Business Address

**Current State:**
- BaseLayout.astro (Line 84): `"streetAddress": "Umm Al Sheif"`
- ServiceLayout.astro (Line 101): `"streetAddress": "Palm Jumeirah"`

**Fix:** Standardize to single authoritative address across ALL schema files

**Files:**
- `/src/layouts/BaseLayout.astro`
- `/src/layouts/BaseLayoutArabic.astro`
- `/src/layouts/ServiceLayout.astro`
- `/src/layouts/CategoryLayout.astro`

---

### 2.2 Multiple LocalBusiness Definitions

**Problem:** Every page generates a new LocalBusiness schema (inherited from BaseLayout)

**Fix:**
1. Create single Organization schema with `@id`
2. Reference `@id` in Service provider fields
3. Remove duplicate full definitions

---

### 2.3 Add WebSite Schema

**Missing:** No site-level WebSite schema

**Add to BaseLayout:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://onlinetranslation.ae/#website",
  "url": "https://onlinetranslation.ae",
  "name": "OnlineTranslation.ae",
  "description": "...",
  "publisher": { "@id": "https://onlinetranslation.ae/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://onlinetranslation.ae/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

### 2.4 Fix Hreflang in BaseLayout

**Current (Lines 50-51):**
```html
<link rel="alternate" hreflang="en-AE" href={fullCanonical} />
<link rel="alternate" hreflang="x-default" href={fullCanonical} />
```

**Missing:** Arabic version reference
```html
<link rel="alternate" hreflang="ar" href={arabicURL} />
```

**File:** `/src/layouts/BaseLayout.astro`

---

### 2.5 Standardize areaServed Format

**Inconsistent across files:**
- CategoryLayout: `[{ "@type": "City", "name": "Dubai" }]` ✓
- ServiceLayout: `["Dubai", "Abu Dhabi"]` ✗

**Fix:** Use typed City objects everywhere

---

### 2.6 Add ContactPoint Schema

**Current:** Scattered telephone/email properties

**Should be:**
```json
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "Customer Service",
  "telephone": "+971508620217",
  "email": "info@onlinetranslation.ae",
  "availableLanguage": ["English", "Arabic"]
}
```

---

## Phase 3: Technical SEO (High Priority)

### 3.1 Add GSC Verification Meta Tag

**File:** `/src/layouts/BaseLayout.astro`

**Add:**
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

---

### 3.2 Add Blog to robots.txt

**Current:** `/blog/` not in Allow directives

**Add to public/robots.txt:**
```
Allow: /blog/
Allow: /blog/category/
Allow: /blog/tag/
```

---

### 3.3 Add Blog to Sitemap

**Current:** Static sitemap doesn't include blog

**Fix:** Ensure Astro sitemap integration includes blog collection

**File:** `/astro.config.mjs`

---

### 3.4 Image Optimization

**Issues found:**
- No width/height attributes (CLS risk)
- No srcset for responsive images
- No WebP format support

**Priority pages to fix:**
- `/src/pages/contact.astro`
- `/src/pages/about.astro`
- `/src/pages/index.astro`

---

## Phase 4: Internal Linking (Medium Priority)

### 4.1 Deploy RelatedServices Across Site

**Current usage:** Only 1 page (blog posts)

**Should add to:**
- All legal service pages (21 pages)
- All personal document pages (17 pages)
- All attestation pages (14 pages)
- All location pages (10 pages)

---

### 4.2 Deploy CrossSiloLinks Component

**Current usage:** Only `/personal-documents/index.astro`

**Should add to:**
- Hub/pillar pages for each silo
- High-traffic landing pages

---

### 4.3 Create Breadcrumb Component

**Problem:** 79 pages have custom breadcrumb implementations (inconsistent)

**Fix:** Create single `<Breadcrumb />` component and use across all pages

---

### 4.4 Fix BlogLayout RelatedServices

**Current (Line 214):** Only shows first related service
```typescript
relatedServices[0]
```

**Should show:** All related services (up to 4)

---

## Phase 5: Content Engine (Ongoing)

### 5.1 Blog Infrastructure Completion

- [x] Blog collection configured
- [x] Blog index page created
- [x] Dynamic post routing
- [ ] Category archive pages
- [ ] Tag archive pages
- [ ] Related posts component
- [ ] Author pages (optional)

### 5.2 Content Production

**Current:** 1 blog post

**Target:** 15-30 posts/month

**Priority categories:**
1. Golden Visa (highest search volume)
2. Legal Translation (money page support)
3. Attestation (process guides)
4. How-to Guides (informational intent)

---

## Phase 6: Polish & Optimization (Low Priority)

### 6.1 Add Pricing to Offer Schemas

Currently missing price information in all Service/Offer schemas

### 6.2 Add AggregateRating Schema

If reviews exist, implement ratings schema

### 6.3 Add HowTo Schema

For multi-step process pages:
- MOFA attestation process
- Academic attestation steps
- Specialized translation workflows

### 6.4 Arabic Schema Localization

BaseLayoutArabic uses English day names in schema

---

## Implementation Order

| Phase | Effort | Impact | Priority |
|-------|--------|--------|----------|
| 1. Critical Bugs | 2 hours | Fixes broken functionality | DO FIRST |
| 2. Schema Consistency | 4 hours | Improves search understanding | URGENT |
| 3. Technical SEO | 3 hours | Enables proper crawling | URGENT |
| 4. Internal Linking | 6 hours | Boosts page authority | HIGH |
| 5. Content Engine | Ongoing | Traffic growth | MEDIUM |
| 6. Polish | 4 hours | Marginal gains | LOW |

---

## Files Requiring Changes

### Phase 1 Files
- `/src/data/serviceLinks.ts` (Lines 201, 892)
- `/src/data/navigation.ts` (Line 316)
- `/robots.txt` and `/public/robots.txt`
- `/src/pages/blog/category/[category].astro` (CREATE)
- `/src/pages/blog/tag/[tag].astro` (CREATE)

### Phase 2 Files
- `/src/layouts/BaseLayout.astro`
- `/src/layouts/BaseLayoutArabic.astro`
- `/src/layouts/ServiceLayout.astro`
- `/src/layouts/CategoryLayout.astro`
- `/src/layouts/BlogLayout.astro`

### Phase 3 Files
- `/src/layouts/BaseLayout.astro`
- `/public/robots.txt`
- `/astro.config.mjs`
- Image files across pages

### Phase 4 Files
- 50+ service/page files
- `/src/components/Breadcrumb.astro` (CREATE)
- `/src/layouts/BlogLayout.astro`

---

## Success Metrics

After implementation:
- [ ] Zero 404 errors in GSC
- [ ] Schema validation passes (Google Rich Results Test)
- [ ] All pages indexed
- [ ] Core Web Vitals: Green
- [ ] robots.txt validated
- [ ] Sitemap includes all pages

---

*Generated by SEO Audit - December 2025*
