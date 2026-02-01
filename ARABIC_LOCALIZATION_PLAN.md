# خطة توطين الموقع العربي | Arabic Localization Master Plan

**Version:** 1.0  
**Date:** January 30, 2026  
**Project:** Legal Translation Services Website - Arabic Localization  
**Primary Focus:** Abu Dhabi & UAE Market

---

## 📋 Executive Summary

This document outlines a comprehensive 6-week phased approach to fully localize the website into Arabic, with specific emphasis on:

1. **Abu Dhabi market prioritization** (primary SEO target)
2. **High-quality Modern Standard Arabic (MSA)** - classy, natural, commercial tone
3. **SEO optimization** with strategic keyword integration
4. **Brand voice consistency** - boutique concierge positioning

---

## 🎯 Brand Voice Guidelines (Arabic)

### Core Positioning
- **Boutique concierge service** - not a factory, not a chain
- **Quiet authority** - demonstrate expertise without boasting
- **Direct and helpful** - get to the point, solve problems
- **Human touch** - WhatsApp-first, personal service

### Language Rules

#### ❌ NEVER Use:
| Forbidden Phrase | Reason |
|-----------------|--------|
| "أفضل" (best) | Superlative claims prohibited |
| "الأول" (#1) | Ranking claims prohibited |
| "رائد السوق" (market leader) | Superlative claims prohibited |
| "الألسن" or any competitor name | No competitor mentions |
| "!" (exclamation marks) | Maintains calm, professional tone |
| "شريكك الموثوق" (your trusted partner) | Cliché, overused |

#### ✅ DO Use:
| Preferred Phrases | Usage Context |
|------------------|---------------|
| "نقدم خدمات ترجمة قانونية معتمدة" | Service description |
| "نلتزم بتقديم..." | Commitment language |
| "خدماتنا معتمدة من وزارة العدل" | Credibility |
| "نخدم أبوظبي ودبي والإمارات" | Geographic reach |
| "ترجمة دقيقة واحترافية" | Quality descriptors |
| "في غضون 60 دقيقة" | Speed promise |

### Tone Guidelines
- **Professional but warm** - not cold corporate
- **Confident without arrogance** - state facts, not boasts
- **Action-oriented** - clear CTAs, easy next steps
- **Respectful** - formal "أنتم" not informal "أنت"

---

## 📊 High-Quality Arabic Writing Sources

### Reference Websites for MSA Commercial Writing

| Source | URL | Why Use It |
|--------|-----|------------|
| UAE Government Portal | u.ae/ar | Official, elegant MSA |
| TAMM Abu Dhabi | tamm.abudhabi/ar | Government services Arabic |
| ADCB Bank | adcb.com/ar | Premium financial Arabic |
| Emirates Airline | emirates.com/ar | Luxury brand Arabic |
| Dubai Courts | dc.gov.ae/ar | Legal terminology |
| Ministry of Justice | moj.gov.ae/ar | Official legal Arabic |

### Writing Style Characteristics to Emulate

```
من مصادر حكومية وتجارية راقية:

✓ جمل واضحة ومباشرة
✓ تراكيب نحوية سليمة
✓ مصطلحات قانونية دقيقة
✓ نبرة محترمة ومهنية
✓ استخدام صيغة الجمع للمخاطب (نقدم، نلتزم، نوفر)
✓ تجنب الحشو والإطالة
```

---

## 🗂️ Phase 1: Infrastructure & Navigation (Week 1)

### 1.1 Create Arabic Navigation Data

**File:** `src/data/navigation-ar.ts`

```typescript
// Priority navigation labels with SEO keywords
export const navigationAr = {
  main: [
    {
      label: "الرئيسية",
      href: "/عربي/",
    },
    {
      label: "خدمات الترجمة القانونية",
      href: "/عربي/خدمات-الترجمة/",
      children: [
        {
          label: "ترجمة قانونية معتمدة",
          href: "/عربي/ترجمة-قانونية-معتمدة/",
        },
        // ... more items
      ]
    },
    {
      label: "الترجمة في أبوظبي",
      href: "/عربي/ابوظبي/",
    },
    {
      label: "تواصل معنا",
      href: "/عربي/اتصل-بنا/",
    }
  ]
};
```

### 1.2 Update Header Component

**File:** `src/components/Header-porto.astro`

Tasks:
- [ ] Add EN/AR language toggle
- [ ] Detect current language from URL
- [ ] Load appropriate navigation data
- [ ] Implement RTL direction switching

### 1.3 Update Mobile Navigation

**File:** `src/components/MobileShell.astro`

Tasks:
- [ ] Arabic accordion labels
- [ ] RTL slide direction (left-to-right)
- [ ] Touch-friendly Arabic menu

### 1.4 Update Footer

**File:** `src/components/Footer.astro`

Tasks:
- [ ] Arabic footer navigation
- [ ] Arabic contact information
- [ ] Social media labels in Arabic

---

## 🗂️ Phase 2: Core Pages (Week 2)

### Priority Pages - Abu Dhabi Focus

| English URL | Arabic URL | SEO Priority |
|------------|------------|--------------|
| `/` | `/عربي/` | ✅ High |
| `/about/` | `/عربي/من-نحن/` | Medium |
| `/contact/` | `/عربي/اتصل-بنا/` | ✅ High |
| `/legal-translation-dubai/` | `/عربي/ترجمة-قانونية-معتمدة/` | ✅ Critical |
| `/services/` | `/عربي/خدماتنا/` | ✅ High |

### Abu Dhabi Landing Page (NEW - Priority)

**Create:** `/عربي/ابوظبي/` 

This is a NEW strategic page for Abu Dhabi SEO targeting.

**H1:** `مكتب ترجمة قانونية في أبوظبي`

**Content Structure:**
```markdown
# مكتب ترجمة قانونية في أبوظبي

## خدمات الترجمة القانونية في أبوظبي

نقدم خدمات ترجمة قانونية معتمدة في أبوظبي، معتمدة من وزارة العدل 
الإماراتية. نخدم الأفراد والشركات في جميع أنحاء إمارة أبوظبي.

## ترجمة قانونية معتمدة في أبوظبي

[Content with strategic SEO keywords]

## خدمات الترجمة القانونية في أبوظبي

[Service listing with Abu Dhabi focus]

## لماذا تختارنا للترجمة القانونية في أبوظبي

[Value propositions - no "best" claims]
```

---

## 🗂️ Phase 3: Legal Translation Pages (Week 3)

### Pillar Page

**URL:** `/عربي/ترجمة-قانونية-معتمدة/`

**H1:** `الترجمة القانونية المعتمدة في الإمارات`

### Cluster Pages

| Service | Arabic URL | H1 |
|---------|-----------|-----|
| Contracts | `/عربي/ترجمة-عقود/` | ترجمة العقود القانونية |
| MOA | `/عربي/ترجمة-عقد-تأسيس/` | ترجمة عقود التأسيس |
| POA | `/عربي/ترجمة-توكيل/` | ترجمة التوكيلات الرسمية |
| Court Documents | `/عربي/ترجمة-وثائق-المحاكم/` | ترجمة وثائق المحاكم |

---

## 🗂️ Phase 4: Personal Documents (Week 4)

### Pillar Page

**URL:** `/عربي/ترجمة-الوثائق-الشخصية/`

### Cluster Pages

| Document | Arabic URL | H1 |
|----------|-----------|-----|
| Birth Certificate | `/عربي/ترجمة-شهادة-ميلاد/` | ترجمة شهادات الميلاد |
| Marriage Certificate | `/عربي/ترجمة-عقد-زواج/` | ترجمة عقود الزواج |
| Degree Certificate | `/عربي/ترجمة-شهادات-جامعية/` | ترجمة الشهادات الجامعية |
| Driving License | `/عربي/ترجمة-رخصة-قيادة/` | ترجمة رخص القيادة |

---

## 🗂️ Phase 5: Attestation & Specialized (Week 5)

### Attestation Services

| Service | Arabic URL | H1 |
|---------|-----------|-----|
| MOFA Attestation | `/عربي/تصديق-وزارة-الخارجية/` | تصديق وزارة الخارجية |
| Embassy Attestation | `/عربي/تصديق-السفارات/` | تصديق السفارات |
| Apostille | `/عربي/خدمة-الأبوستيل/` | خدمة الأبوستيل |

### Specialized Translation

| Specialization | Arabic URL | H1 |
|---------------|-----------|-----|
| Medical | `/عربي/ترجمة-طبية/` | الترجمة الطبية المتخصصة |
| Technical | `/عربي/ترجمة-تقنية/` | الترجمة التقنية |
| Financial | `/عربي/ترجمة-مالية/` | الترجمة المالية |

---

## 🗂️ Phase 6: Location Pages & Resources (Week 6)

### Location Pages

| Location | Arabic URL | H1 |
|----------|-----------|-----|
| Abu Dhabi | `/عربي/ابوظبي/` | مكتب ترجمة قانونية في أبوظبي |
| Dubai | `/عربي/دبي/` | خدمات الترجمة القانونية في دبي |
| Sharjah | `/عربي/الشارقة/` | الترجمة القانونية في الشارقة |

### Resource Pages

| Resource | Arabic URL | H1 |
|----------|-----------|-----|
| FAQ | `/عربي/الأسئلة-الشائعة/` | الأسئلة الشائعة عن الترجمة القانونية |
| Pricing Guide | `/عربي/دليل-الأسعار/` | دليل أسعار الترجمة القانونية |
| Process Guide | `/عربي/كيفية-الترجمة/` | خطوات الحصول على ترجمة معتمدة |

---

## 📝 Content Writing Guidelines

### Page Template Structure

```astro
---
// Arabic Page Template
import BaseLayoutArabic from "@layouts/BaseLayoutArabic.astro";
import HeroArabic from "@components/HeroArabic.astro";
---

<BaseLayoutArabic
  title="[SEO Title with Keywords]"
  description="[Meta description with keywords]"
  hreflangEn="/english-equivalent/"
>
  <HeroArabic
    headline="[H1 with primary keyword]"
    subheadline="[Supporting text]"
    ctaText="تواصل معنا الآن"
    ctaLink="/عربي/اتصل-بنا/"
  />
  
  <!-- Content sections -->
</BaseLayoutArabic>
```

### Writing Checklist for Each Page

- [ ] H1 includes primary keyword (from SEO doc)
- [ ] Abu Dhabi mentioned prominently
- [ ] No "best/top" superlatives
- [ ] No competitor names
- [ ] Clear CTA (WhatsApp preferred)
- [ ] Natural MSA (not machine translation)
- [ ] Ministry of Justice credibility mentioned
- [ ] Service details are specific and helpful

---

## 🔧 Technical Implementation

### CSS Reuse & RTL Adaptation (MANDATORY)

```
╔═══════════════════════════════════════════════════════════════════════╗
║  When creating Arabic pages, ALWAYS reuse the English page's CSS      ║
║  and adapt it for RTL. Do NOT create new CSS from scratch.            ║
╚═══════════════════════════════════════════════════════════════════════╝
```

**Step 1: Copy English Page CSS**
1. Find the English equivalent page (e.g., `src/pages/personal/vital-records/birth/index.astro`)
2. Copy the `<style>` block from the English page
3. Copy all CSS class names used in the HTML structure

**Step 2: RTL Adaptation**

| English Property | Arabic RTL Equivalent |
|------------------|----------------------|
| `margin-left` | `margin-right` |
| `padding-left` | `padding-right` |
| `border-left` | `border-right` |
| `text-align: left` | `text-align: right` |
| `float: left` | `float: right` |
| Icon after text | Icon before text in HTML |

**Step 3: LTR Islands (Keep Left-to-Right)**
```html
<!-- Phone numbers -->
<span dir="ltr">+971 50 862 0217</span>

<!-- Email addresses -->
<span dir="ltr">info@onlinetranslation.ae</span>

<!-- Brand names -->
<span dir="ltr">OnlineTranslation.ae</span>
```

**Step 4: Icon Positioning in RTL**
```html
<!-- English: icon after text -->
<a href="/contact/">Contact Us <i class="fas fa-arrow-right"></i></a>

<!-- Arabic: icon BEFORE text (appears on right in RTL) -->
<a href="/ar/contact/"><i class="fas fa-arrow-left"></i> تواصلوا معنا</a>
```

**RTL CSS Files (automatic overrides):**
- `public/styles/rtl.css` — Global RTL styles
- `BaseLayoutArabic.astro` — Includes `dir="rtl"` on html

### Hreflang Implementation

```html
<!-- On English pages -->
<link rel="alternate" hreflang="en-AE" href="https://domain.com/services/" />
<link rel="alternate" hreflang="ar" href="https://domain.com/عربي/خدماتنا/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/services/" />

<!-- On Arabic pages -->
<link rel="alternate" hreflang="ar" href="https://domain.com/عربي/خدماتنا/" />
<link rel="alternate" hreflang="en-AE" href="https://domain.com/services/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/services/" />
```

### Language Switcher Logic

```javascript
// Get current page's alternate language URL
function getAlternateUrl(currentPath, targetLang) {
  const urlMap = {
    '/': { ar: '/عربي/', en: '/' },
    '/services/': { ar: '/عربي/خدماتنا/', en: '/services/' },
    '/contact/': { ar: '/عربي/اتصل-بنا/', en: '/contact/' },
    // ... complete mapping
  };
  
  return urlMap[currentPath]?.[targetLang] || (targetLang === 'ar' ? '/عربي/' : '/');
}
```

---

## 📊 Progress Tracking

### Current Status (Updated February 1, 2026)

**Existing Arabic Pages (55 pages):**

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/ar/` | ✅ Complete |
| About | `/ar/about/` | ✅ Complete |
| Contact | `/ar/contact/` | ✅ Complete |
| Services Hub | `/ar/services/` | ✅ Complete |
| Legal Translation Hub | `/ar/legal-translation-dubai/` | ✅ Complete |
| Contracts Hub | `/ar/legal/contracts/` | ✅ Complete |
| Corporate Hub | `/ar/legal/corporate/` | ✅ Complete (Jan 31) |
| POA Translation | `/ar/legal/corporate/poa/` | ✅ Complete (Jan 31) |
| Personal Hub | `/ar/personal/` | ✅ Complete |
| Vital Records Hub | `/ar/personal/vital-records/` | ✅ Complete |
| Birth Certificate | `/ar/personal/vital-records/birth/` | ✅ Complete (Jan 31) |
| Marriage Certificate | `/ar/personal/vital-records/marriage/` | ✅ Complete (Jan 31) |
| Divorce Certificate | `/ar/personal/vital-records/divorce/` | ✅ Complete (Jan 31) |
| Death Certificate | `/ar/personal/vital-records/death/` | ✅ Complete (Jan 31) |
| Academic Hub | `/ar/personal/academic/` | ✅ Complete |
| NYUAD | `/ar/personal/academic/nyuad/` | ✅ Complete |
| Degree Certificate | `/ar/personal/academic/degree/` | ✅ Complete (Jan 31) |
| Immigration Hub | `/ar/personal/immigration/` | ✅ Complete (Jan 31) |
| Immigration - PCC | `/ar/personal/immigration/pcc/` | ✅ Complete (Jan 31) |
| Immigration - Bank | `/ar/personal/immigration/bank/` | ✅ Complete (Jan 31) |
| Attestation Hub | `/ar/services/attestation/` | ✅ Complete |
| India Attestation | `/ar/services/attestation/india/` | ✅ Complete (Jan 31) |
| UK Attestation | `/ar/services/attestation/uk/` | ✅ Complete (Jan 31) |
| US Attestation | `/ar/services/attestation/us/` | ✅ Complete (Jan 31) |
| Immigration - License | `/ar/personal/immigration/license/` | ✅ Complete (Jan 31) |
| Academic - Transcripts | `/ar/personal/academic/transcripts/` | ✅ Complete (Jan 31) |
| Golden Visa | `/ar/services/golden-visa-translation/` | ✅ Complete (Jan 31) |
| Abu Dhabi | `/ar/locations/abu-dhabi/` | ✅ Complete |
| Dubai | `/ar/locations/dubai/` | ✅ Complete |
| NDA Translation | `/ar/legal/contracts/nda/` | ✅ Complete (Jan 31) |
| SPA Translation | `/ar/legal/contracts/spa/` | ✅ Complete (Jan 31) |
| MOU Translation | `/ar/legal/contracts/mou/` | ✅ Complete (Jan 31) |
| Lease Translation | `/ar/legal/contracts/lease/` | ✅ Complete (Jan 31) |
| MOA Translation | `/ar/legal/corporate/moa/` | ✅ Complete (Jan 31) |
| Resolution Translation | `/ar/legal/corporate/resolution/` | ✅ Complete (Jan 31) |
| Litigation Hub | `/ar/legal/litigation/` | ✅ Complete (Jan 31) |
| Verdict Translation | `/ar/legal/litigation/verdict/` | ✅ Complete (Jan 31) |
| Arbitration Translation | `/ar/legal/litigation/arbitration/` | ✅ Complete (Jan 31) |
| Wills Translation | `/ar/legal/wills/` | ✅ Complete (Jan 31) |
| Specialized Hub | `/ar/specialized-translation/` | ✅ Complete (Feb 1) |
| Medical Translation | `/ar/specialized/medical/` | ✅ Complete (Feb 1) |
| Technical Translation | `/ar/specialized/technical/` | ✅ Complete (Feb 1) |
| Hospitality Translation | `/ar/specialized/hospitality/` | ✅ Complete (Feb 1) |
| Digital Translation | `/ar/specialized/digital/` | ✅ Complete (Feb 1) |
| Locations Hub | `/ar/locations/` | ✅ Complete (Feb 1) |
| Sharjah | `/ar/locations/sharjah/` | ✅ Complete (Feb 1) |
| Dubai DIFC | `/ar/locations/dubai/difc/` | ✅ Complete (Feb 1) |
| Dubai JLT | `/ar/locations/dubai/jlt/` | ✅ Complete (Feb 1) |
| Dubai Marina | `/ar/locations/dubai/marina/` | ✅ Complete (Feb 1) |
| Dubai Business Bay | `/ar/locations/dubai/business-bay/` | ✅ Complete (Feb 1) |
| Resources Hub | `/ar/resources/` | ✅ Complete (Feb 1) |
| FAQ | `/ar/resources/faq/` | ✅ Complete (Feb 1) |
| Pricing Guide | `/ar/resources/pricing-guide/` | ✅ Complete (Feb 1) |
| Document Checklist | `/ar/resources/document-checklist/` | ✅ Complete (Feb 1) |
| Blog Hub | `/ar/blog/` | ✅ Complete (Feb 1) |

### Week 1 Deliverables ✅ COMPLETE
- [x] navigation-ar.ts created
- [x] Header language switcher working (HeaderUnified.astro)
- [x] Mobile menu Arabic version (MobileShellArabic.astro)
- [x] Footer Arabic version (FooterArabic.astro)

### Week 2 Deliverables ✅ COMPLETE
- [x] Homepage Arabic
- [x] About page Arabic
- [x] Contact page Arabic
- [x] Abu Dhabi landing page

### Week 3 Deliverables ✅ COMPLETE
- [x] Legal translation pillar page (`/ar/legal-translation-dubai/`)
- [x] Contracts hub (`/ar/legal/contracts/`)
- [x] NDA translation (`/ar/legal/contracts/nda/`) ✅ Jan 31
- [x] SPA translation (`/ar/legal/contracts/spa/`) ✅ Jan 31
- [x] MOU translation (`/ar/legal/contracts/mou/`) ✅ Jan 31
- [x] Lease translation (`/ar/legal/contracts/lease/`) ✅ Jan 31
- [x] Corporate hub (`/ar/legal/corporate/`) ✅ Jan 31
- [x] MOA translation (`/ar/legal/corporate/moa/`) ✅ Jan 31
- [x] POA translation (`/ar/legal/corporate/poa/`) ✅ Jan 31
- [x] Resolution translation (`/ar/legal/corporate/resolution/`) ✅ Jan 31
- [x] Litigation hub (`/ar/legal/litigation/`) ✅ Jan 31
- [x] Verdict translation (`/ar/legal/litigation/verdict/`) ✅ Jan 31
- [x] Arbitration translation (`/ar/legal/litigation/arbitration/`) ✅ Jan 31
- [x] Wills translation (`/ar/legal/wills/`) ✅ Jan 31

### Week 4 Deliverables ✅ COMPLETE
- [x] Personal documents pillar (`/ar/personal/`)
- [x] Vital records hub (`/ar/personal/vital-records/`)
- [x] Academic hub (`/ar/personal/academic/`)
- [x] Birth certificate (`/ar/personal/vital-records/birth/`) ✅ Jan 31
- [x] Marriage certificate (`/ar/personal/vital-records/marriage/`) ✅ Jan 31
- [x] Divorce certificate (`/ar/personal/vital-records/divorce/`) ✅ Jan 31
- [x] Death certificate (`/ar/personal/vital-records/death/`) ✅ Jan 31
- [x] Immigration hub (`/ar/personal/immigration/`) ✅ Jan 31
- [x] PCC translation (`/ar/personal/immigration/pcc/`) ✅ Jan 31
- [x] Bank statements (`/ar/personal/immigration/bank/`) ✅ Jan 31
- [x] Driving license (`/ar/personal/immigration/license/`) ✅ Jan 31
- [x] Degree certificate (`/ar/personal/academic/degree/`) ✅ Jan 31
- [x] Transcripts (`/ar/personal/academic/transcripts/`) ✅ Jan 31

### Week 5 Deliverables ✅ COMPLETE
- [x] Attestation hub (`/ar/services/attestation/`)
- [x] India attestation (`/ar/services/attestation/india/`) ✅ Jan 31
- [x] UK attestation (`/ar/services/attestation/uk/`) ✅ Jan 31
- [x] US attestation (`/ar/services/attestation/us/`) ✅ Jan 31
- [x] Golden Visa (`/ar/services/golden-visa-translation/`) ✅ Jan 31
- [x] Specialized hub (`/ar/specialized-translation/`) ✅ Feb 1
- [x] Medical translation (`/ar/specialized/medical/`) ✅ Feb 1
- [x] Technical translation (`/ar/specialized/technical/`) ✅ Feb 1
- [x] Hospitality translation (`/ar/specialized/hospitality/`) ✅ Feb 1
- [x] Digital translation (`/ar/specialized/digital/`) ✅ Feb 1

### Week 6 Deliverables ✅ COMPLETE
- [x] Abu Dhabi location (`/ar/locations/abu-dhabi/`)
- [x] Dubai location (`/ar/locations/dubai/`)
- [x] Locations hub (`/ar/locations/`) ✅ Feb 1
- [x] Sharjah location (`/ar/locations/sharjah/`) ✅ Feb 1
- [x] Dubai DIFC (`/ar/locations/dubai/difc/`) ✅ Feb 1
- [x] Dubai JLT (`/ar/locations/dubai/jlt/`) ✅ Feb 1
- [x] Dubai Marina (`/ar/locations/dubai/marina/`) ✅ Feb 1
- [x] Dubai Business Bay (`/ar/locations/dubai/business-bay/`) ✅ Feb 1
- [x] Resources hub (`/ar/resources/`) ✅ Feb 1
- [x] FAQ (`/ar/resources/faq/`) ✅ Feb 1
- [x] Pricing guide (`/ar/resources/pricing-guide/`) ✅ Feb 1
- [x] Document checklist (`/ar/resources/document-checklist/`) ✅ Feb 1
- [x] Blog hub (`/ar/blog/`) ✅ Feb 1

---

## 🚀 Next Priority Pages

Based on SEO value and user demand:

| Priority | Page | Arabic URL | SEO Keywords |
|----------|------|------------|--------------|
| 1 | Birth Certificate | `/ar/personal/vital-records/birth/` | ترجمة شهادة الميلاد |
| 2 | India Attestation | `/ar/services/attestation/india/` | تصديق الشهادات الهندية |
| 3 | Golden Visa | `/ar/services/golden-visa-translation/` | ترجمة الفيزا الذهبية |
| 4 | POA Translation | `/ar/legal/corporate/poa/` | ترجمة التوكيل الرسمي |
| 5 | Marriage Certificate | `/ar/personal/vital-records/marriage/` | ترجمة عقد الزواج |

---

## 🎯 Success Metrics

### SEO Targets (3-month post-launch)
- [ ] Rank top 10 for "مكتب ترجمة قانونية في أبوظبي"
- [ ] Rank top 10 for "ترجمة قانونية معتمدة الإمارات"
- [ ] Organic Arabic traffic +200%

### User Experience
- [ ] Language switcher click rate tracked
- [ ] Arabic page bounce rate < 60%
- [ ] Arabic contact form submissions tracked

---

## 📚 Appendix: Key Files Reference

| File | Purpose | Status |
|------|---------|--------|
| `BaseLayoutArabic.astro` | Arabic layout with RTL | ✅ Complete |
| `rtl.css` | RTL styles | ✅ Complete |
| `navigation-ar.ts` | Arabic nav data | ✅ Complete |
| `HeaderUnified.astro` | Unified EN/AR header | ✅ Complete |
| `MobileShellArabic.astro` | Arabic mobile nav | ✅ Complete |
| `FooterArabic.astro` | Arabic footer | ✅ Complete |

---

## 🚀 PHASE 2: FULL BILINGUAL COVERAGE (Weeks 7-12)

### Overview

Phase 1 (Weeks 1-6) established the core Arabic site with 60 pages. Phase 2 completes full bilingual coverage by localizing the remaining 58 pages.

**Phase 2 Timeline:** 6 weeks (Weeks 7-12)
**Goal:** 100% English-Arabic parity (excluding system pages)

---

## 🗂️ Week 7: Blog Posts - Part 1 (10 pages)

### High-Priority Blog Posts

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/blog/legal-translation-dubai-moj-guide/` | `/ar/blog/legal-translation-dubai-moj-guide/` | Critical | ✅ Feb 1 |
| `/blog/court-document-translation-dubai/` | `/ar/blog/court-document-translation-dubai/` | High | ⬜ Pending |
| `/blog/marriage-certificate-translation-dubai/` | `/ar/blog/marriage-certificate-translation-dubai/` | High | ⬜ Pending |
| `/blog/uae-attestation-process-guide/` | `/ar/blog/uae-attestation-process-guide/` | High | ⬜ Pending |
| `/blog/degree-certificate-translation-dubai/` | `/ar/blog/degree-certificate-translation-dubai/` | High | ⬜ Pending |
| `/blog/authenticated-translation-moj-vs-certified/` | `/ar/blog/authenticated-translation-moj-vs-certified/` | High | ⬜ Pending |
| `/blog/birth-certificate-translation-uae-visa/` | `/ar/blog/birth-certificate-translation-uae-visa/` | High | ⬜ Pending |
| `/blog/legal-translation-cost-dubai-2026/` | `/ar/blog/legal-translation-cost-dubai-2026/` | High | ⬜ Pending |
| `/blog/difc-vs-dubai-courts-translation/` | `/ar/blog/difc-vs-dubai-courts-translation/` | Medium | ⬜ Pending |
| `/blog/certified-translator-uae/` | `/ar/blog/certified-translator-uae/` | Medium | ⬜ Pending |

---

## 🗂️ Week 8: Blog Posts - Part 2 (9 pages)

### Remaining Blog Posts

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/blog/medical-translation-dha-license/` | `/ar/blog/medical-translation-dha-license/` | Medium | ⬜ Pending |
| `/blog/phd-dba-doctorate-translation-uae/` | `/ar/blog/phd-dba-doctorate-translation-uae/` | Medium | ⬜ Pending |
| `/blog/professional-certificates-vs-degrees-translation/` | `/ar/blog/professional-certificates-vs-degrees-translation/` | Medium | ⬜ Pending |
| `/blog/study-gap-uae-employment/` | `/ar/blog/study-gap-uae-employment/` | Medium | ⬜ Pending |
| `/blog/degrees-accepted-uae-work-permit/` | `/ar/blog/degrees-accepted-uae-work-permit/` | Medium | ⬜ Pending |
| `/blog/uae-arrival-paperwork/` | `/ar/blog/uae-arrival-paperwork/` | Medium | ⬜ Pending |
| `/blog/us-citizens-dubai-documents/` | `/ar/blog/us-citizens-dubai-documents/` | Low | ⬜ Pending |
| `/blog/why-machine-translation-fails/` | `/ar/blog/why-machine-translation-fails/` | Low | ⬜ Pending |

**Week 8 Subtotal:** 8 blog posts

---

## 🗂️ Week 9: Service Pages (12 pages)

### Attestation Services

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/services/attestation/apostille/` | `/ar/services/attestation/apostille/` | High | ⬜ Pending |
| `/services/attestation/mofa/` | `/ar/services/attestation/mofa/` | High | ⬜ Pending |
| `/services/attestation/embassy/` | `/ar/services/attestation/embassy/` | High | ⬜ Pending |
| `/services/attestation/canada/` | `/ar/services/attestation/canada/` | Medium | ⬜ Pending |
| `/services/attestation/pakistan/` | `/ar/services/attestation/pakistan/` | Medium | ⬜ Pending |
| `/services/attestation/philippines/` | `/ar/services/attestation/philippines/` | Medium | ⬜ Pending |

### Core Services

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/services/certificate-translation/` | `/ar/services/certificate-translation/` | High | ⬜ Pending |
| `/services/corporate-translation/` | `/ar/services/corporate-translation/` | High | ⬜ Pending |
| `/services/legal-translation/` | `/ar/services/legal-translation/` | High | ⬜ Pending |
| `/services/proofreading/` | `/ar/services/proofreading/` | Medium | ⬜ Pending |
| `/services/title-deed-translation/` | `/ar/services/title-deed-translation/` | Medium | ⬜ Pending |

**Week 9 Subtotal:** 11 service pages

---

## 🗂️ Week 10: Resource Pages (13 pages)

### Guides

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/resources/attestation-guide/` | `/ar/resources/attestation-guide/` | High | ⬜ Pending |
| `/resources/authenticated-translation/` | `/ar/resources/authenticated-translation/` | High | ⬜ Pending |
| `/resources/court-interpreter-uae/` | `/ar/resources/court-interpreter-uae/` | Medium | ⬜ Pending |
| `/resources/distance-education-translation/` | `/ar/resources/distance-education-translation/` | Medium | ⬜ Pending |
| `/resources/golden-visa-complete-guide/` | `/ar/resources/golden-visa-complete-guide/` | High | ⬜ Pending |
| `/resources/japan-visa-translation/` | `/ar/resources/japan-visa-translation/` | Low | ⬜ Pending |
| `/resources/moe-equivalency/` | `/ar/resources/moe-equivalency/` | Medium | ⬜ Pending |
| `/resources/visa-rejection-reasons/` | `/ar/resources/visa-rejection-reasons/` | High | ⬜ Pending |

### Case Studies

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/resources/case-studies/` | `/ar/resources/case-studies/` | Medium | ⬜ Pending |
| `/resources/case-studies/dha-dataflow-deadline/` | `/ar/resources/case-studies/dha-dataflow-deadline/` | Medium | ⬜ Pending |
| `/resources/case-studies/rejected-document-rescue/` | `/ar/resources/case-studies/rejected-document-rescue/` | Medium | ⬜ Pending |
| `/resources/case-studies/urgent-family-visa/` | `/ar/resources/case-studies/urgent-family-visa/` | Medium | ⬜ Pending |

**Week 10 Subtotal:** 12 resource pages

---

## 🗂️ Week 11: About Pages & Industry Pages (8 pages)

### About Section

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/about/credentials/` | `/ar/about/credentials/` | High | ⬜ Pending |
| `/about/reviews/` | `/ar/about/reviews/` | High | ⬜ Pending |
| `/about/translator/` | `/ar/about/translator/` | Medium | ⬜ Pending |

### Industry Pages (New Section)

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/industries/` | `/ar/industries/` | Medium | ⬜ Pending |
| `/industries/e-commerce/` | `/ar/industries/e-commerce/` | Medium | ⬜ Pending |
| `/industries/healthcare/` | `/ar/industries/healthcare/` | Medium | ⬜ Pending |
| `/industries/legal/` | `/ar/industries/legal/` | Medium | ⬜ Pending |
| `/industries/real-estate/` | `/ar/industries/real-estate/` | Medium | ⬜ Pending |

**Week 11 Subtotal:** 8 pages

---

## 🗂️ Week 12: Specialized & Remaining Pages (6 pages)

### Specialized Services

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/specialized/financial/` | `/ar/specialized/financial/` | High | ⬜ Pending |
| `/specialized/medical/dha-dataflow/` | `/ar/specialized/medical/dha-dataflow/` | High | ⬜ Pending |

### Remaining Gaps

| English URL | Arabic URL | Priority | Status |
|-------------|------------|----------|--------|
| `/legal/corporate/license/` | `/ar/legal/corporate/license/` | Medium | ⬜ Pending |
| `/locations/sharjah/tenancy-translation/` | `/ar/locations/sharjah/tenancy-translation/` | Medium | ⬜ Pending |
| `/our-services/` | `/ar/our-services/` | Low | ⬜ Pending |
| `/personal-documents/` | `/ar/personal-documents/` | Low | ⬜ Pending |

**Week 12 Subtotal:** 6 pages

---

## 📊 Phase 2 Summary

| Week | Focus Area | Pages | Cumulative |
|------|-----------|-------|------------|
| Week 7 | Blog Posts Part 1 | 10 | 70 |
| Week 8 | Blog Posts Part 2 | 8 | 78 |
| Week 9 | Service Pages | 11 | 89 |
| Week 10 | Resource Pages | 12 | 101 |
| Week 11 | About + Industry | 8 | 109 |
| Week 12 | Specialized + Gaps | 6 | 115 |

**Total Phase 2 Pages:** 55 new Arabic pages
**Final Coverage:** 115/118 eligible pages (~97%)

### Pages Excluded from Localization

These pages do NOT need Arabic versions:

| Page Type | Count | Reason |
|-----------|-------|--------|
| System pages (404, offline, thank-you) | 3 | Utility pages |
| Privacy/Terms | 2 | Legal pages in English only |
| Language landing pages (Bengali, Chinese, etc.) | 9 | Community-specific |
| Legacy Arabic redirect (/عربي/) | 1 | Redirects to /ar/ |

---

## 🎯 Phase 2 Success Metrics

### SEO Targets (6 months post-completion)

- [ ] Arabic organic traffic: +400% from baseline
- [ ] Top 5 ranking for "ترجمة قانونية أبوظبي"
- [ ] Top 5 ranking for "ترجمة قانونية دبي"
- [ ] Top 10 ranking for 15+ Arabic keywords
- [ ] Arabic page engagement: Bounce rate < 55%

### Coverage Targets

- [ ] 100% service pages localized
- [ ] 100% location pages localized
- [ ] 100% blog posts localized
- [ ] 100% resource pages localized

---

## 📝 Phase 2 Writing Guidelines

### Blog Post Localization

For each blog post:
1. Translate content maintaining SEO keyword density
2. Adapt examples to UAE/Abu Dhabi context where relevant
3. Update internal links to Arabic equivalents
4. Include Arabic FAQ schema
5. Add hreflang to English version

### Industry Pages

Industry pages should:
1. Focus on Abu Dhabi market first
2. Include industry-specific terminology
3. Reference UAE regulations and authorities
4. Link to relevant Arabic service pages

### Case Studies

Case studies should:
1. Maintain anonymity of clients
2. Adapt currency references (AED)
3. Reference UAE-specific processes
4. Include outcome metrics

---

*Document maintained by: Translation Team*
*Last updated: February 1, 2026*
*Phase 2 Target Completion: March 15, 2026*
