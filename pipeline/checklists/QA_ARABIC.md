# Arabic Localization - Post-Production Checklist

## Overview
This document provides a systematic checklist for auditing and verifying Arabic (RTL) pages before deployment.

---

## 1. LANGUAGE SWITCHER VERIFICATION

### Desktop Header
- [ ] Switcher displays "En - ع" format
- [ ] Active state clearly highlighted
- [ ] Links navigate to correct language equivalents
- [ ] Positioned correctly in header actions area

### Mobile Sidebar
- [ ] Language switcher visible in sidebar
- [ ] Correct label and format
- [ ] Tap targets adequate (44x44px minimum)

### Footer
- [ ] Language switcher present in footer
- [ ] Consistent design with header switcher

---

## 2. RTL LAYOUT VERIFICATION

### Header (Arabic)
- [ ] Logo positioned on RIGHT side
- [ ] Navigation items flow RIGHT to LEFT
- [ ] Dropdown menus open correctly (aligned right)
- [ ] Flyout submenus open to LEFT of parent
- [ ] Top bar content reversed (contact info flows RTL)
- [ ] Coral accent bar positioning correct

### Footer (Arabic)
- [ ] Grid columns flow RIGHT to LEFT (Brand → Quick Links → Services → Contact)
- [ ] Section headers align RIGHT
- [ ] Underline accents under headers on RIGHT side
- [ ] Contact icons positioned AFTER text (RTL)
- [ ] Social icons row-reversed
- [ ] Partnership badge content reversed

### Body Content
- [ ] Text alignment: RIGHT
- [ ] Paragraphs and headings align RIGHT
- [ ] Lists and bullets align RIGHT
- [ ] Card layouts flow RIGHT to LEFT
- [ ] Icons positioned correctly for RTL context
- [ ] Form labels align RIGHT
- [ ] Form inputs text-align RIGHT

### Interactive Elements
- [ ] Buttons with icons: icon AFTER text (visually on left in RTL)
- [ ] Arrows/chevrons point correct direction
- [ ] Carousel navigation arrows swapped (prev on right, next on left)
- [ ] FAQ accordion chevrons on LEFT side
- [ ] Progress indicators flow RIGHT to LEFT

---

## 3. CONTENT TRANSLATION VERIFICATION

### Text Content
- [ ] All UI labels translated
- [ ] All headings translated
- [ ] All paragraph content translated
- [ ] All button labels translated
- [ ] All placeholder text translated
- [ ] All alt text on images translated
- [ ] All aria-labels translated

### Formal Arabic Style (per Style Guide)
- [ ] Using formal "أنتم" (plural you) addressing
- [ ] No superlatives (أفضل, الأول, رائد)
- [ ] No competitor mentions
- [ ] Professional MSA tone throughout
- [ ] Consistent terminology across pages

### Numbers and Dates
- [ ] Phone numbers display LTR (dir="ltr")
- [ ] Email addresses display LTR
- [ ] URLs display LTR
- [ ] Arabic numerals where appropriate (٠١٢٣٤٥٦٧٨٩)
- [ ] Business hours in Arabic format

---

## 4. INTERNAL LINKING VERIFICATION

### Navigation Links
- [ ] All main nav links point to `/ar/` versions
- [ ] All dropdown items link to `/ar/` pages
- [ ] Footer quick links → `/ar/` versions
- [ ] Footer services links → `/ar/` versions

### In-Page Links
- [ ] CTA buttons link to `/ar/` pages (not English)
- [ ] Service cards link to `/ar/` equivalents
- [ ] Related content links → `/ar/` versions
- [ ] Breadcrumb links use `/ar/` prefix

### Cross-Linking Strategy
Every Arabic page should link to:
- [ ] Arabic homepage (`/ar/`)
- [ ] At least 2-3 related service pages
- [ ] Contact page (`/ar/contact/`)
- [ ] Relevant location pages
- [ ] Related blog/resource content (when available)

---

## 5. CSS/STYLING VERIFICATION

### Typography
- [ ] Noto Sans Arabic font loading correctly
- [ ] Font weights displaying properly (400, 600, 700)
- [ ] Line height adequate for Arabic (1.8-2.0)
- [ ] Letter spacing appropriate

### Spacing and Alignment
- [ ] Padding/margin correct for RTL context
- [ ] Border-left → border-right swapped where needed
- [ ] Text indentation on correct side
- [ ] Icon margins on correct side

### Colors and Contrast
- [ ] All colors match English site
- [ ] Text contrast meets WCAG AA
- [ ] Accent colors (coral) consistent

---

## 6. FUNCTIONALITY VERIFICATION

### Interactive Components
- [ ] FAQ accordions expand/collapse properly
- [ ] Testimonials carousel slides correctly (RTL direction)
- [ ] Trust bar carousel animates correctly
- [ ] Mobile menu opens from RIGHT side
- [ ] Mobile menu closes properly
- [ ] Form validation works
- [ ] Form submission works

### Navigation
- [ ] Smooth scroll to sections works
- [ ] Anchor links work correctly
- [ ] Back button behavior correct
- [ ] Page transitions smooth

---

## 7. SEO VERIFICATION

### Meta Tags
- [ ] `<html lang="ar" dir="rtl">`
- [ ] Page title in Arabic
- [ ] Meta description in Arabic
- [ ] Open Graph tags in Arabic

### Hreflang Tags
- [ ] `<link rel="alternate" hreflang="en" href="[english-url]">`
- [ ] `<link rel="alternate" hreflang="ar" href="[arabic-url]">`
- [ ] `<link rel="alternate" hreflang="x-default" href="[english-url]">`

### Structured Data
- [ ] Schema.org markup includes Arabic content
- [ ] Address in Arabic where appropriate
- [ ] Business name consistent

---

## 8. PAGE-BY-PAGE CHECKLIST

### Priority 1: Core Pages
| Page | English URL | Arabic URL | Status |
|------|-------------|------------|--------|
| Homepage | `/` | `/ar/` | 🟡 In Progress (needs RTL fixes) |
| Legal Translation Hub | `/legal-translation-dubai/` | `/ar/legal-translation-dubai/` | ⬜ Not Started |
| Personal Documents Hub | `/personal-documents/` | `/ar/personal-documents/` | ⬜ Not Started |
| Contact | `/contact/` | `/ar/contact/` | ⬜ Not Started |

### Priority 2: Service Pages
| Page | English URL | Arabic URL | Status |
|------|-------------|------------|--------|
| Attestation Services | `/services/attestation/` | `/ar/services/attestation/` | ⬜ Not Started |
| Golden Visa Translation | `/services/golden-visa-translation/` | `/ar/services/golden-visa-translation/` | ⬜ Not Started |
| Contract Translation | `/legal/contract-translation/` | `/ar/legal/contract-translation/` | ⬜ Not Started |
| Birth Certificate | `/personal/birth-certificate-translation/` | `/ar/personal/birth-certificate-translation/` | ⬜ Not Started |

### Priority 3: Location Pages
| Page | English URL | Arabic URL | Status |
|------|-------------|------------|--------|
| Locations Hub | `/locations/` | `/ar/locations/` | ⬜ Not Started |
| Abu Dhabi | `/locations/abu-dhabi/` | `/ar/locations/abu-dhabi/` | ⬜ Not Started |

### Priority 4: Supporting Pages
| Page | English URL | Arabic URL | Status |
|------|-------------|------------|--------|
| About | `/about/` | `/ar/about/` | ⬜ Not Started |
| Privacy | `/privacy/` | `/ar/privacy/` | ⬜ Not Started |
| Terms | `/terms/` | `/ar/terms/` | ⬜ Not Started |

---

## 9. COMMON RTL CSS FIXES

```css
/* Direction */
[dir="rtl"] { direction: rtl; text-align: right; }

/* Flexbox reversal */
[dir="rtl"] .flex-row { flex-direction: row-reverse; }

/* Grid reversal - reorder columns */
[dir="rtl"] .grid-4-col { grid-template-columns: 1fr 1fr 1fr 1.5fr; }

/* Positioning swaps */
[dir="rtl"] .positioned-left { left: auto; right: 0; }
[dir="rtl"] .positioned-right { right: auto; left: 0; }

/* Margin/Padding swaps */
[dir="rtl"] .ml-auto { margin-left: 0; margin-right: auto; }
[dir="rtl"] .pl-4 { padding-left: 0; padding-right: 1rem; }

/* Border swaps */
[dir="rtl"] .border-l { border-left: none; border-right: 1px solid; }

/* Transform for icons */
[dir="rtl"] .arrow-icon { transform: scaleX(-1); }

/* LTR islands for numbers/emails */
[dir="rtl"] .ltr-content { direction: ltr; unicode-bidi: embed; }
```

---

## 10. TESTING PROTOCOL

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x812)

### Accessibility Testing
- [ ] Screen reader navigation (NVDA/VoiceOver)
- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Skip links work

---

## Status Legend
- ⬜ Not Started
- 🟡 In Progress
- 🟢 Complete
- 🔴 Blocked/Issues

---

## Notes
- Last Updated: January 30, 2026
- Maintainer: Claude AI / Development Team
