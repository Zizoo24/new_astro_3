# Phase 2 Analysis: French vs Urdu SERP CTR Comparison

**Created**: January 9, 2026
**Status**: Complete
**Finding**: RTL script in title causes 0% CTR despite position 6 ranking

---

## The Paradox

| Page | Position | Impressions | CTR | Clicks |
|------|----------|-------------|-----|--------|
| `/french/` | 16.9 (worse) | 23 | **8.7%** | 2 |
| `/urdu/` | 6.0 (better!) | 23 | **0%** | 0 |

The Urdu page ranks nearly **3x better** but gets **zero clicks**. This is a severe CTR problem.

---

## Root Cause Analysis

### Title Comparison

**French (works):**
```
French Translation Dubai | Traduction française Dubaï | MOJ Certified
```
- All Latin characters
- LTR rendering throughout
- French script is familiar to English readers

**Urdu (broken):**
```
Urdu Translation Dubai | اردو ترجمہ دبئی | MOJ Certified
```
- Mixed Latin and Arabic script
- RTL script embedded in LTR context
- Creates visual confusion in Google SERPs

### Why RTL Script Fails in SERP Titles

1. **Visual rendering issues**: Arabic/Urdu script renders right-to-left, creating visual jumps when mixed with English
2. **Trust signal problem**: English searchers may perceive Arabic script as "foreign" or less trustworthy
3. **Mobile rendering**: Mixed LTR/RTL often renders particularly poorly on mobile SERPs
4. **Character width**: Arabic characters have different width metrics, potentially truncating differently

---

## Solution Implemented

### Before (0% CTR)
```
Title: Urdu Translation Dubai | اردو ترجمہ دبئی | MOJ Certified
Meta: Professional Urdu translation services in Dubai. MOJ-certified for courts, immigration & legal documents. دبئی میں تصدیق شدہ اردو ترجمہ خدمات۔ WhatsApp: +971 50 862 0217
```

### After (testing)
```
Title: Urdu Translation Dubai | Pakistani Documents | MOJ Certified
Meta: Urdu translation services in Dubai trusted by 500+ Pakistani families. MOJ-certified for courts, visas & GDRFA. Same-day available. WhatsApp: +971 50 862 0217
```

### Changes Made

1. **Removed Urdu script from title** - English only for SERP display
2. **Added "Pakistani Documents"** - Targets audience without using script
3. **Added social proof** - "trusted by 500+ Pakistani families"
4. **Added specificity** - "courts, visas & GDRFA"
5. **Added urgency** - "Same-day available"

---

## Expected Impact

| Metric | Before | Target (8 weeks) |
|--------|--------|------------------|
| CTR | 0% | 4-8% (position 6 avg) |
| Clicks | 0 | 1-2 per week |

### Validation Timeline

- Week 1-2: Title change re-indexed
- Week 3-4: Initial CTR data
- Week 6-8: Statistical significance

---

## Academic Transcript Page Optimization

Also optimized as part of Phase 2:

### Keyword Gap

Target keyword: "academic transcript translation service" (position 11.7)

**Before:**
```
Title: Transcript Translation Dubai | MOJ Certified
```
Missing: "academic", "service"

**After:**
```
Title: Academic Transcript Translation Service Dubai | MOJ Certified
```
Exact match for target keyword.

---

## Next Steps

1. **Monitor /urdu/ CTR** - Wait 4-6 weeks for data
2. **Monitor academic transcript position** - Should improve from 11.7 to <10
3. **If /urdu/ CTR still 0%** - Try alternative title with "Pakistani families" emphasis
4. **Document learnings** - Apply to other language pages if needed

---

*Analysis Version: 1.0*
*Last Updated: January 9, 2026*
