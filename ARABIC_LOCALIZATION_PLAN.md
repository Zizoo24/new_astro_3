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

### Current Status (Updated January 31, 2026)

**Existing Arabic Pages (26 pages):**

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
| Abu Dhabi | `/ar/locations/abu-dhabi/` | ✅ Complete |
| Dubai | `/ar/locations/dubai/` | ✅ Complete |

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

### Week 3 Deliverables - IN PROGRESS
- [x] Legal translation pillar page (`/ar/legal-translation-dubai/`)
- [x] Contracts hub (`/ar/legal/contracts/`)
- [ ] NDA translation (`/ar/legal/contracts/nda/`)
- [ ] SPA translation (`/ar/legal/contracts/spa/`)
- [ ] MOU translation (`/ar/legal/contracts/mou/`)
- [ ] Lease translation (`/ar/legal/contracts/lease/`)
- [x] Corporate hub (`/ar/legal/corporate/`) ✅ Jan 31
- [ ] MOA translation (`/ar/legal/corporate/moa/`)
- [x] POA translation (`/ar/legal/corporate/poa/`) ✅ Jan 31
- [ ] Resolution translation (`/ar/legal/corporate/resolution/`)
- [ ] Litigation hub (`/ar/legal/litigation/`)
- [ ] Verdict translation (`/ar/legal/litigation/verdict/`)
- [ ] Arbitration translation (`/ar/legal/litigation/arbitration/`)
- [ ] Wills translation (`/ar/legal/wills/`)

### Week 4 Deliverables - IN PROGRESS
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
- [ ] Driving license (`/ar/personal/immigration/license/`)
- [x] Degree certificate (`/ar/personal/academic/degree/`) ✅ Jan 31
- [ ] Transcripts (`/ar/personal/academic/transcripts/`)

### Week 5 Deliverables - IN PROGRESS
- [x] Attestation hub (`/ar/services/attestation/`)
- [x] India attestation (`/ar/services/attestation/india/`) ✅ Jan 31
- [x] UK attestation (`/ar/services/attestation/uk/`) ✅ Jan 31
- [x] US attestation (`/ar/services/attestation/us/`) ✅ Jan 31
- [ ] Golden Visa (`/ar/services/golden-visa-translation/`)
- [ ] Specialized hub (`/ar/specialized-translation/`)
- [ ] Medical translation (`/ar/specialized/medical/`)
- [ ] Technical translation (`/ar/specialized/technical/`)
- [ ] Hospitality translation (`/ar/specialized/hospitality/`)
- [ ] Digital translation (`/ar/specialized/digital/`)

### Week 6 Deliverables - PARTIAL
- [x] Abu Dhabi location (`/ar/locations/abu-dhabi/`)
- [x] Dubai location (`/ar/locations/dubai/`)
- [ ] Locations hub (`/ar/locations/`)
- [ ] Sharjah location (`/ar/locations/sharjah/`)
- [ ] Dubai sub-locations (DIFC, JLT, Marina, etc.)
- [ ] Resources hub (`/ar/resources/`)
- [ ] FAQ (`/ar/resources/faq/`)
- [ ] Pricing guide (`/ar/resources/pricing-guide/`)
- [ ] Document checklist (`/ar/resources/document-checklist/`)
- [ ] Blog hub (`/ar/blog/`)

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

*Document maintained by: Translation Team*  
*Last updated: January 31, 2026*
