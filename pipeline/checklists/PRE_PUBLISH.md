# Pre-Publish Checklist

## OnlineTranslation.ae — Final Verification Before Deployment

---

## Instructions

Complete ALL items before publishing any content. Mark each item with [x] when verified.

---

## 1. Brand Compliance

### Banned Vocabulary Check

- [ ] No "best" or "أفضل"
- [ ] No "top" or "elite" or "premier"
- [ ] No "#1" or "number one" or "الأول"
- [ ] No "market leader" or "رائد السوق"
- [ ] No "leading" or "رائد"
- [ ] No "state-of-the-art" or "revolutionary"
- [ ] No "unrivaled" or "unmatched"
- [ ] No "cheapest" or "best prices"
- [ ] No "guarantee" or "نضمن" (use "نلتزم" instead)
- [ ] No competitor names mentioned
- [ ] No exclamation points (!)
- [ ] No ALL-CAPS for emphasis

### Voice Check

- [ ] Tone is calm and professional
- [ ] No desperate or salesy language
- [ ] Direct, no flowery intros
- [ ] Polite but not servile

---

## 2. Content Quality

### Readability

- [ ] All sentences under 25 words
- [ ] Paragraphs max 3-4 sentences
- [ ] Bullet points for 3+ items
- [ ] Subheadings every 2-3 paragraphs

### Structure (Service Pages)

- [ ] Hero section with H1, intro, bullets, CTA
- [ ] Compliance/requirements section
- [ ] Process steps (4 steps)
- [ ] After-care guide
- [ ] Pricing tiers (no exact prices)
- [ ] FAQ section (6-15 questions)

### Factual Accuracy

- [ ] UAE is NOT stated as Hague member
- [ ] MOJ License #701 correct
- [ ] WhatsApp number: +971 50 862 0217
- [ ] UAE entity names spelled correctly
- [ ] Service descriptions accurate

---

## 3. SEO Requirements

### Meta Elements

- [ ] Title tag under 60 characters
- [ ] Meta description under 155 characters
- [ ] Title includes primary keyword
- [ ] Meta description includes CTA or WhatsApp

### On-Page SEO

- [ ] H1 includes primary keyword
- [ ] Only ONE H1 per page
- [ ] H2s include secondary keywords
- [ ] Primary keyword in first paragraph
- [ ] Natural keyword distribution

### Internal Linking

- [ ] Minimum 8 internal links
- [ ] Links use descriptive anchor text
- [ ] No "click here" or "learn more" anchors
- [ ] Links to related services included
- [ ] Cross-silo links where relevant

### Schema Markup

- [ ] FAQ schema implemented
- [ ] Service schema (if applicable)
- [ ] Breadcrumb schema
- [ ] LocalBusiness schema (inherited from layout)

---

## 4. Technical Requirements

### Page Build

- [ ] `npm run build` completes without errors
- [ ] No TypeScript/Astro errors
- [ ] Page renders at expected URL

### Images

- [ ] All images have alt text
- [ ] Alt text is descriptive (not keyword stuffing)
- [ ] Images optimized for web

### Mobile

- [ ] Page is mobile responsive
- [ ] Touch targets at least 44x44px
- [ ] No horizontal scroll

### Accessibility

- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Focus states visible
- [ ] ARIA labels where needed

---

## 5. Arabic-Specific (Skip if English only)

### Language

- [ ] Modern Standard Arabic (MSA), not colloquial
- [ ] Formal أنتم form used throughout
- [ ] نحن verb forms: نقدم، نوفر، نلتزم
- [ ] No banned Arabic phrases (أفضل، الأول، رائد)
- [ ] Natural Arabic flow (not literal translation)

### Typography

- [ ] Arabic-Indic numerals in body: ٦٠، ١٥٠
- [ ] Arabic comma: ،
- [ ] Arabic question mark: ؟
- [ ] Arabic semicolon: ؛

### RTL Layout

- [ ] `<html lang="ar" dir="rtl">` set
- [ ] Text right-aligned
- [ ] Flex containers reversed where needed
- [ ] Icons appear after text (visually on left)

### LTR Exceptions

- [ ] Phone numbers in `<span dir="ltr">`
- [ ] Email addresses in `<span dir="ltr">`
- [ ] URLs preserved as-is

### Geographic Focus

- [ ] Abu Dhabi (أبوظبي) mentioned prominently
- [ ] Dubai (دبي) secondary
- [ ] UAE (الإمارات) tertiary

### Hreflang

- [ ] Arabic page has hreflang to English equivalent
- [ ] English page has hreflang to Arabic equivalent
- [ ] x-default set to English

---

## 6. Final Verification

### Preview

- [ ] Page previewed in browser
- [ ] Content displays correctly
- [ ] No broken layouts
- [ ] Forms functional (if any)
- [ ] Language switcher works

### Cross-Browser (Optional but Recommended)

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Sign-Off

**Content reviewed by:** _________________
**Date:** _________________
**Page URL:** _________________
**Status:** [ ] Ready to publish / [ ] Needs revision

---

*Last updated: January 30, 2026*
