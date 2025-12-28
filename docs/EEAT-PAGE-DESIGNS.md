# E-E-A-T Page Design Specifications
## OnlineTranslation.ae Gap-Bridging Pages

**Version:** 1.0
**Created:** December 28, 2025
**Purpose:** Detailed specifications for new pages to address E-E-A-T gaps

---

## Table of Contents

1. [Translator Biography Page](#1-translator-biography-page)
2. [Sharjah Regulatory Hub](#2-sharjah-regulatory-hub)
3. [Case Studies Section](#3-case-studies-section)
4. [Client Reviews Hub](#4-client-reviews-hub)
5. [Trust & Credentials Page](#5-trust--credentials-page)
6. [Schema Implementation Requirements](#6-schema-implementation-requirements)

---

## 1. Translator Biography Page

### Page Details

| Property | Value |
|----------|-------|
| **URL** | `/about/translator/` |
| **Title** | `Meet Our Certified Translator | Khaled Al-Adl | OnlineTranslation.ae` |
| **Meta Description** | `Meet Khaled Mohamed Abdulwahab Al-Adl, MOJ-licensed legal translator #701. Learn about his credentials, expertise, and commitment to accurate legal translation in Dubai.` |
| **Purpose** | Establish human authority and personal accountability for YMYL trust |

### Content Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO SECTION                                                    │
│  ┌──────────────┐  ┌─────────────────────────────────────────┐  │
│  │              │  │ Section Label: "The Certifier"          │  │
│  │   [PHOTO]    │  │ H1: Khaled Mohamed Abdulwahab Al-Adl    │  │
│  │   Khaled     │  │ خالد محمد عبدالوهاب العدل               │  │
│  │              │  │ Subtitle: MOJ-Licensed Legal Translator │  │
│  │              │  │ License Badge: MOJ #701                 │  │
│  └──────────────┘  │ Valid Until: October 15, 2026           │  │
│                    └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  THE MOJ OATH SECTION                                           │
│  ─────────────────────                                          │
│  H2: "Sworn Before the Court"                                   │
│                                                                  │
│  "Every MOJ-licensed translator in the UAE takes a formal oath  │
│  before a judge, pledging accuracy and fidelity in translation. │
│  This oath carries personal legal liability—errors in certified │
│  documents can result in professional sanctions and civil       │
│  liability. When you receive a document certified by Khaled,    │
│  you receive a document backed by this personal commitment."    │
│                                                                  │
│  [Visual: Stylized oath/scales of justice icon]                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CREDENTIALS GRID                                                │
│  ─────────────────                                               │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │ MOJ License     │ │ Languages       │ │ Specializations │   │
│  │ ─────────────── │ │ ─────────────── │ │ ─────────────── │   │
│  │ License #701    │ │ Arabic (Native) │ │ Court Documents │   │
│  │ Valid: 2026     │ │ English (Fluent)│ │ Corporate Law   │   │
│  │ Verify: 800333  │ │                 │ │ Civil Records   │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  EXPERTISE AREAS (Accordion)                                     │
│  ───────────────────────────                                     │
│  ▼ Court & Litigation Documents                                 │
│    - Verdict translations for Dubai Courts                      │
│    - Appeal submissions and legal briefs                        │
│    - Arbitration awards (DIAC, DIFC-LCIA)                       │
│                                                                  │
│  ▶ Corporate & Commercial                                       │
│  ▶ Personal & Civil Records                                     │
│  ▶ Medical & Healthcare                                         │
│  ▶ Academic & Educational                                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  VERIFICATION SECTION                                            │
│  ────────────────────                                            │
│  H2: "Verify Credentials"                                        │
│                                                                  │
│  "The Ministry of Justice maintains a public registry of all    │
│  licensed legal translators. You can verify Khaled's license    │
│  status at any time."                                            │
│                                                                  │
│  MOJ Verification Hotline: 800 333333                           │
│  License Number: 701                                             │
│  Full Name (Arabic): خالد محمد عبدالوهاب العدل                   │
│                                                                  │
│  [Link to MOJ verification portal if available]                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  PERSONAL COMMITMENT QUOTE                                       │
│  ─────────────────────────                                       │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ "                                                           ││
│  │ Every document I certify carries my name and my reputation. ││
│  │ I treat each translation as if it were my own legal matter— ││
│  │ because to the person waiting for their visa, court ruling, ││
│  │ or business license, it is the most important document in   ││
│  │ their life at that moment.                                  ││
│  │                                            — Khaled Al-Adl  ││
│  │ "                                                           ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTA SECTION                                                     │
│  ───────────                                                     │
│  H2: "Work With Khaled"                                          │
│                                                                  │
│  "Send your documents for a free assessment. Khaled personally  │
│  reviews complex cases and ensures every certified document     │
│  meets court-acceptance standards."                              │
│                                                                  │
│  [WhatsApp CTA Button]  [View Services Button]                   │
└─────────────────────────────────────────────────────────────────┘
```

### Schema Requirements

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://onlinetranslation.ae/about/translator/#translator",
  "name": "Khaled Mohamed Abdulwahab Al-Adl",
  "alternateName": "خالد محمد عبدالوهاب العدل",
  "jobTitle": "MOJ-Licensed Legal Translator",
  "description": "Ministry of Justice licensed legal translator specializing in court documents, corporate filings, and civil records for UAE government acceptance.",
  "image": "/assets/images/team/khaled-al-adl.jpg",
  "knowsLanguage": [
    {"@type": "Language", "name": "Arabic", "alternateName": "ar"},
    {"@type": "Language", "name": "English", "alternateName": "en"}
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "MOJ Legal Translator License",
    "recognizedBy": {
      "@type": "GovernmentOrganization",
      "name": "UAE Ministry of Justice",
      "url": "https://www.moj.gov.ae"
    },
    "validFrom": "2023-10-15",
    "validUntil": "2026-10-15"
  },
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": "https://onlinetranslation.ae/#organization"
  },
  "areaServed": [
    {"@type": "City", "name": "Dubai"},
    {"@type": "City", "name": "Abu Dhabi"},
    {"@type": "City", "name": "Sharjah"},
    {"@type": "Country", "name": "United Arab Emirates"}
  ]
}
```

### Component Requirements

1. **TranslatorHero.astro** - Split hero with photo and credentials
2. **CredentialsGrid.astro** - 3-column grid for license/languages/specializations
3. **ExpertiseAccordion.astro** - Expandable expertise areas
4. **VerificationCard.astro** - MOJ verification details with hotline
5. **PersonalQuote.astro** - Stylized blockquote with attribution

### Visual Assets Needed

- [ ] Professional headshot of Khaled (if available, or placeholder silhouette)
- [ ] MOJ seal/stamp visualization
- [ ] Scales of justice icon for oath section
- [ ] UAE flag or official colors accent

---

## 2. Sharjah Regulatory Hub

### Page Details

| Property | Value |
|----------|-------|
| **URL** | `/locations/sharjah/tenancy-translation/` |
| **Title** | `Sharjah Tenancy Contract Translation | Municipality Requirements | OnlineTranslation.ae` |
| **Meta Description** | `Official translation for Sharjah Municipality tenancy contracts. Includes 4% attestation fee guidance, SEWA clearance requirements, and cross-emirate documentation.` |
| **Purpose** | Capture hyper-local Sharjah search intent with bureaucratic depth |

### Content Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO SECTION                                                    │
│  ─────────────                                                   │
│  Breadcrumb: Home > Locations > Sharjah > Tenancy Translation   │
│  Badge: "Sharjah Municipality Specialist"                        │
│  H1: Tenancy Contract Translation for Sharjah                    │
│  Lead: Complete guide to translating tenancy contracts for       │
│        Sharjah Municipality, family visa, and SEWA requirements. │
│                                                                  │
│  Quick Stats:                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                   │
│  │ From       │ │ Turnaround │ │ Attestation│                   │
│  │ AED 150    │ │ 2-4 Hours  │ │ 4% of Rent │                   │
│  └────────────┘ └────────────┘ └────────────┘                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SHARJAH-SPECIFIC REQUIREMENTS                                   │
│  ─────────────────────────────                                   │
│  H2: What Makes Sharjah Different                                │
│                                                                  │
│  Callout Box (Important):                                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ⚠️ Sharjah Municipality Attestation Fee                     ││
│  │ Unlike Dubai, Sharjah Municipality charges 4% of annual     ││
│  │ rent for tenancy contract attestation. This is in addition  ││
│  │ to translation fees.                                         ││
│  │                                                              ││
│  │ Example: AED 50,000/year rent = AED 2,000 attestation fee   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Key Differences:                                                │
│  • Sharjah uses its own Ejari-equivalent system                  │
│  • SEWA clearance often required for visa sponsorship            │
│  • Different attestation process than Dubai DLD                  │
│  • Cross-emirate documentation has specific requirements         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  USE CASES GRID                                                  │
│  ──────────────                                                  │
│  H2: When You Need Sharjah Tenancy Translation                   │
│                                                                  │
│  ┌─────────────────────┐ ┌─────────────────────┐                │
│  │ 👨‍👩‍👧 Family Visa      │ │ 🏢 SEWA Connection   │                │
│  │ Sponsorship         │ │ Requirements        │                │
│  │ ─────────────────── │ │ ─────────────────── │                │
│  │ Tenancy contract    │ │ Proof of residence  │                │
│  │ proves residence    │ │ for utility setup   │                │
│  │ for GDRFA family    │ │ and billing         │                │
│  │ visa applications   │ │ registration        │                │
│  └─────────────────────┘ └─────────────────────┘                │
│                                                                  │
│  ┌─────────────────────┐ ┌─────────────────────┐                │
│  │ 🏫 School Enrollment │ │ 🚗 Vehicle          │                │
│  │                     │ │ Registration        │                │
│  │ ─────────────────── │ │ ─────────────────── │                │
│  │ Private schools     │ │ RTA Sharjah may     │                │
│  │ require proof of    │ │ require translated  │                │
│  │ Sharjah residence   │ │ tenancy for         │                │
│  │ for admission       │ │ registration        │                │
│  └─────────────────────┘ └─────────────────────┘                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  DOCUMENT CHECKLIST (Accordion)                                  │
│  ──────────────────────────────                                  │
│  H2: Required Documents                                          │
│                                                                  │
│  ▼ Standard Tenancy Translation                                  │
│    ✓ Original Ejari/tenancy contract (Arabic)                   │
│    ✓ Landlord Emirates ID copy                                  │
│    ✓ Tenant Emirates ID copy                                    │
│    ✓ Title deed copy (if available)                             │
│                                                                  │
│  ▶ With SEWA Clearance                                          │
│    Additional: SEWA final bill or clearance certificate         │
│                                                                  │
│  ▶ For Family Visa (Cross-Emirate)                              │
│    Additional: Salary certificate, bank statements              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CROSS-EMIRATE FAQ                                               │
│  ─────────────────                                               │
│  H2: Sharjah ↔ Dubai Documentation Questions                     │
│                                                                  │
│  Q: Can I use a Sharjah tenancy contract for a Dubai visa?      │
│  A: Yes, but it requires specific cross-emirate attestation.    │
│     The tenancy must be attested by Sharjah Municipality first, │
│     then potentially by MOFA for Dubai GDRFA acceptance.        │
│                                                                  │
│  Q: Do I need to translate my SEWA bill?                        │
│  A: SEWA bills are bilingual (Arabic/English). However, if      │
│     submitting to courts or for visa purposes, official         │
│     translation may be required to ensure all details are       │
│     captured in the submission language.                         │
│                                                                  │
│  Q: What is the attestation fee for Sharjah Municipality?       │
│  A: Sharjah Municipality charges 4% of the annual rent for      │
│     contract attestation. This is payable directly to the       │
│     municipality, separate from translation fees.               │
│                                                                  │
│  Q: How long does the full process take?                        │
│  A: Translation: 2-4 hours. Municipality attestation: 1-2       │
│     business days. Total with courier: typically 2-3 days.      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  PROCESS STEPS                                                   │
│  ─────────────                                                   │
│  H2: How It Works                                                │
│                                                                  │
│  [1] ──── [2] ──── [3] ──── [4]                                 │
│  Send     Review   Translate Attest                              │
│  Docs     & Quote  & Certify & Deliver                          │
│                                                                  │
│  Step 1: Send Documents                                          │
│  WhatsApp your tenancy contract scan                             │
│                                                                  │
│  Step 2: Review & Quote                                          │
│  We verify completeness and provide fixed pricing                │
│                                                                  │
│  Step 3: MOJ Translation                                         │
│  Khaled translates and certifies (2-4 hours)                    │
│                                                                  │
│  Step 4: Municipality Attestation                                │
│  We coordinate Sharjah Municipality attestation (optional)       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  PRICING TABLE                                                   │
│  ─────────────                                                   │
│  H2: Sharjah Tenancy Translation Pricing                         │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Service                          │ Price    │ Timeline     ││
│  │─────────────────────────────────────────────────────────────││
│  │ Standard Tenancy Translation     │ AED 150+ │ 2-4 hours    ││
│  │ Express (Same Day)               │ AED 250+ │ 1-2 hours    ││
│  │ Translation + Attestation Coord. │ AED 350+ │ 2-3 days     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Note: Sharjah Municipality 4% attestation fee paid separately  │
│  directly to the municipality.                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  RELATED SERVICES                                                │
│  ────────────────                                                │
│  H2: Related Sharjah Translation Services                        │
│                                                                  │
│  [SEWA Bills] [Salary Certificate] [Bank Statements]             │
│  [Marriage Certificate] [Birth Certificate]                      │
│                                                                  │
│  Cross-link to: /locations/sharjah/, /personal/immigration/      │
└─────────────────────────────────────────────────────────────────┘
```

### Schema Requirements

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sharjah Tenancy Contract Translation",
  "description": "Official MOJ-certified translation of tenancy contracts for Sharjah Municipality, family visa applications, and SEWA requirements.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://onlinetranslation.ae/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sharjah",
    "containedInPlace": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  },
  "serviceType": "Legal Translation",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "150",
      "priceCurrency": "AED",
      "minPrice": "150"
    }
  }
}
```

### Additional Sharjah Pages to Create

| URL | Purpose |
|-----|---------|
| `/locations/sharjah/sewa-translation/` | SEWA bill and clearance translation |
| `/locations/sharjah/family-visa/` | Sharjah-specific family visa documentation |
| `/locations/sharjah/saif-zone/` | SAIF Zone business documentation |

---

## 3. Case Studies Section

### Page Details

| Property | Value |
|----------|-------|
| **URL** | `/resources/case-studies/` (hub) |
| **Title** | `Client Success Stories | Legal Translation Case Studies | OnlineTranslation.ae` |
| **Meta Description** | `Real client success stories from visa approvals to court acceptances. See how our MOJ-certified translations helped clients navigate UAE bureaucracy.` |
| **Purpose** | Demonstrate Experience through measurable outcomes |

### Hub Page Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO                                                            │
│  ────                                                            │
│  H1: Client Success Stories                                      │
│  Lead: Real outcomes from real clients. See how our translations │
│        helped navigate visas, court cases, and business setup.   │
│                                                                  │
│  Stats Bar:                                                      │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 500+       │ │ 99%        │ │ 2hr        │ │ 0          │   │
│  │ Documents  │ │ Acceptance │ │ Avg Time   │ │ Rejections │   │
│  │ Monthly    │ │ Rate       │ │            │ │ (2024)     │   │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CASE STUDY CARDS                                                │
│  ────────────────                                                │
│  Filter: [All] [Visa] [Court] [Corporate] [Medical]              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🎯 THE REJECTED DOCUMENT RESCUE                             ││
│  │ ─────────────────────────────────                           ││
│  │ Category: Court Documents                                   ││
│  │                                                              ││
│  │ "A client came to us with a court verdict translation       ││
│  │ rejected by Dubai Courts. The previous agency had used      ││
│  │ certified (not sworn) translation. We re-translated with    ││
│  │ proper MOJ certification. The appeal was accepted within    ││
│  │ 48 hours of resubmission."                                  ││
│  │                                                              ││
│  │ Outcome: ✅ Appeal Accepted | Turnaround: 3 hours           ││
│  │ [Read Full Story →]                                         ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 👨‍👩‍👧 THE URGENT FAMILY VISA                                  ││
│  │ ─────────────────────────                                   ││
│  │ Category: Immigration                                       ││
│  │                                                              ││
│  │ "A client's family visa application was stuck because       ││
│  │ their marriage certificate translation didn't include the   ││
│  │ attestation chain. We provided full translation with        ││
│  │ preserved attestation stamps. GDRFA approved the visa       ││
│  │ the same week."                                             ││
│  │                                                              ││
│  │ Outcome: ✅ Visa Approved | Turnaround: 4 hours             ││
│  │ [Read Full Story →]                                         ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🏥 THE DHA DATAFLOW DEADLINE                                ││
│  │ ─────────────────────────────                               ││
│  │ Category: Healthcare                                        ││
│  │                                                              ││
│  │ "A physician had 48 hours to submit translated medical      ││
│  │ credentials before her DHA license window closed. We        ││
│  │ translated her degree, Good Standing Certificate, and       ││
│  │ experience letters overnight. DataFlow verification         ││
│  │ passed on first submission."                                ││
│  │                                                              ││
│  │ Outcome: ✅ DHA License Approved | Turnaround: 12 hours     ││
│  │ [Read Full Story →]                                         ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### Individual Case Study Template

**URL Pattern:** `/resources/case-studies/[slug]/`

```
┌─────────────────────────────────────────────────────────────────┐
│  CASE STUDY HEADER                                               │
│  ─────────────────                                               │
│  Breadcrumb: Home > Resources > Case Studies > [Title]          │
│  Category Badge: [Court Documents]                               │
│  H1: The Rejected Document Rescue                                │
│  Subtitle: How we turned a court rejection into an accepted     │
│            appeal within 48 hours                                 │
│                                                                  │
│  Meta: Industry: Legal | Timeline: 3 hours | Outcome: Approved  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  THE SITUATION                                                   │
│  ─────────────                                                   │
│  H2: The Challenge                                               │
│                                                                  │
│  A law firm client came to us in January 2024 with an urgent    │
│  problem. Their client's appeal was rejected by Dubai Courts    │
│  because the supporting verdict translation was not accepted.    │
│                                                                  │
│  The issue: The previous translation agency had provided         │
│  "certified" translation, not "sworn" MOJ translation. Dubai    │
│  Courts, as per Article 18 of the UAE Civil Procedure Law,      │
│  require MOJ-certified translations for all foreign-language    │
│  documents.                                                       │
│                                                                  │
│  The deadline: The appeal window was closing in 72 hours.       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  OUR APPROACH                                                    │
│  ────────────                                                    │
│  H2: What We Did                                                 │
│                                                                  │
│  1. Pre-Validation Review                                        │
│     We reviewed the rejected translation to identify specific    │
│     deficiencies. The document lacked the MOJ stamp, translator  │
│     license number, and sworn declaration.                       │
│                                                                  │
│  2. Priority Translation                                         │
│     Khaled personally handled the 12-page verdict translation,   │
│     ensuring legal terminology matched UAE court conventions.    │
│                                                                  │
│  3. Same-Day Certification                                       │
│     Physical stamping and binding completed within 3 hours.      │
│                                                                  │
│  4. Court Liaison                                                │
│     We coordinated with the law firm's PRO for submission        │
│     timing to ensure the documents reached the right counter.    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  THE OUTCOME                                                     │
│  ───────────                                                     │
│  H2: Results                                                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ✅ Appeal Accepted by Dubai Courts                          ││
│  │ ⏱️ Turnaround: 3 hours from receipt to certified delivery  ││
│  │ 📄 Documents: 12-page verdict + 3 supporting exhibits       ││
│  │ 💰 Cost Saved: Client avoided refiling fees (~AED 5,000)    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Client Testimonial:                                             │
│  "We were facing a nightmare scenario with a deadline and a     │
│  rejected translation. OnlineTranslation.ae not only fixed the  │
│  problem in hours but explained exactly why the original        │
│  translation failed. Our client's appeal went through."         │
│  — Senior Associate, [Law Firm Name Anonymized]                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  KEY LEARNINGS                                                   │
│  ─────────────                                                   │
│  H2: What This Case Teaches                                      │
│                                                                  │
│  • MOJ vs Certified: Dubai Courts require sworn MOJ translation │
│  • Pre-validation: We check documents before you pay            │
│  • Speed matters: Court deadlines don't wait                    │
│                                                                  │
│  Related Resource: [MOJ vs Certified Guide →]                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTA                                                             │
│  ───                                                             │
│  H2: Facing a Similar Situation?                                 │
│                                                                  │
│  Send your documents via WhatsApp. We'll review them free of    │
│  charge and tell you exactly what's needed for acceptance.      │
│                                                                  │
│  [WhatsApp: Get Free Assessment]                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Case Study Inventory (To Create)

| Title | Category | Outcome | URL |
|-------|----------|---------|-----|
| The Rejected Document Rescue | Court | Appeal Accepted | `/resources/case-studies/rejected-document-rescue/` |
| The Urgent Family Visa | Immigration | Visa Approved | `/resources/case-studies/urgent-family-visa/` |
| The DHA DataFlow Deadline | Healthcare | License Approved | `/resources/case-studies/dha-dataflow-deadline/` |
| The Corporate Merger Rush | Corporate | Deal Closed | `/resources/case-studies/corporate-merger-rush/` |
| The Golden Visa Package | Immigration | Golden Visa Granted | `/resources/case-studies/golden-visa-package/` |

### Schema for Case Studies

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Rejected Document Rescue: How MOJ Translation Saved an Appeal",
  "description": "Case study showing how proper MOJ-certified translation rescued a rejected court appeal within 48 hours.",
  "author": {
    "@type": "Person",
    "@id": "https://onlinetranslation.ae/about/translator/#translator"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://onlinetranslation.ae/#organization"
  },
  "datePublished": "2024-01-15",
  "articleSection": "Case Studies",
  "about": {
    "@type": "Service",
    "name": "Court Document Translation"
  }
}
```

---

## 4. Client Reviews Hub

### Page Details

| Property | Value |
|----------|-------|
| **URL** | `/about/reviews/` |
| **Title** | `Client Reviews & Testimonials | OnlineTranslation.ae` |
| **Meta Description** | `Read verified client reviews of OnlineTranslation.ae. 5.0 Google rating with detailed testimonials from visa approvals, court cases, and business translations.` |
| **Purpose** | Consolidate and amplify social proof with specific outcomes |

### Content Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO                                                            │
│  ────                                                            │
│  H1: What Our Clients Say                                        │
│  Lead: Real feedback from real clients. We're proud of our      │
│        5.0 Google rating and the outcomes we've helped achieve.  │
│                                                                  │
│  Rating Summary:                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  ★★★★★  5.0 / 5.0                                          ││
│  │  Based on Google Reviews                                    ││
│  │  [View on Google Maps →]                                    ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  DETAILED REVIEWS                                                │
│  ────────────────                                                │
│  Filter: [All] [5 Star] [Visa] [Court] [Corporate]              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ★★★★★                                                       ││
│  │ "Golden Visa Approved in Record Time"                       ││
│  │ ─────────────────────────────────────                       ││
│  │ "I needed my degree, marriage certificate, and bank         ││
│  │ statements translated for Golden Visa. They completed       ││
│  │ everything in one day and my application was approved       ││
│  │ within 2 weeks. Highly professional service."               ││
│  │                                                              ││
│  │ — Sarah M. | Golden Visa Applicant | December 2024          ││
│  │ Service: Academic + Personal Documents                      ││
│  │ Outcome: ✅ Golden Visa Approved                            ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ★★★★★                                                       ││
│  │ "Court Accepted on First Submission"                        ││
│  │ ─────────────────────────────────────                       ││
│  │ "We've used other agencies before and had documents         ││
│  │ rejected. OnlineTranslation.ae got it right the first       ││
│  │ time. The MOJ stamp was properly placed and the court       ││
│  │ accepted our verdict translation immediately."               ││
│  │                                                              ││
│  │ — Mohammed A. | Law Firm PRO | November 2024                ││
│  │ Service: Court Verdict Translation                          ││
│  │ Outcome: ✅ Accepted by Dubai Courts                        ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  [Load More Reviews]                                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  REVIEW STATISTICS                                               │
│  ─────────────────                                               │
│  H2: By the Numbers                                              │
│                                                                  │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 5.0★       │ │ 100%       │ │ 2min       │ │ 99%        │   │
│  │ Google     │ │ Would      │ │ Avg        │ │ First-Time │   │
│  │ Rating     │ │ Recommend  │ │ Response   │ │ Acceptance │   │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  LEAVE A REVIEW                                                  │
│  ──────────────                                                  │
│  H2: Share Your Experience                                       │
│                                                                  │
│  "If we've helped with your documents, we'd love to hear from   │
│  you. Your review helps others find trusted translation         │
│  services."                                                       │
│                                                                  │
│  [Review on Google] [Review on Facebook]                         │
└─────────────────────────────────────────────────────────────────┘
```

### Schema for Reviews Page

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://onlinetranslation.ae/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "I needed my degree, marriage certificate, and bank statements translated for Golden Visa. They completed everything in one day and my application was approved within 2 weeks.",
      "datePublished": "2024-12-15"
    }
  ]
}
```

---

## 5. Trust & Credentials Page

### Page Details

| Property | Value |
|----------|-------|
| **URL** | `/about/credentials/` |
| **Title** | `Our Credentials & Certifications | OnlineTranslation.ae` |
| **Meta Description** | `Verified credentials: MOJ License #701, Dubai Economy E-Trader License, and government-accepted formatting. Learn why UAE authorities trust our translations.` |
| **Purpose** | Consolidate all authority signals on one comprehensive page |

### Content Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO                                                            │
│  ────                                                            │
│  H1: Credentials & Certifications                                │
│  Lead: Full transparency on our licenses, partnerships, and      │
│        the government bodies that accept our translations.       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  PRIMARY CREDENTIALS                                             │
│  ───────────────────                                             │
│  H2: Official Licenses                                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  MOJ LEGAL TRANSLATOR LICENSE                               ││
│  │  ─────────────────────────────                              ││
│  │  [MOJ Seal Image]                                           ││
│  │                                                              ││
│  │  License Number: #701                                        ││
│  │  Holder: Khaled Mohamed Abdulwahab Al-Adl                   ││
│  │  (خالد محمد عبدالوهاب العدل)                                 ││
│  │  Valid Until: October 15, 2026                              ││
│  │                                                              ││
│  │  Verification:                                               ││
│  │  Call MOJ Hotline: 800 333333                               ││
│  │  Provide License Number: 701                                 ││
│  │                                                              ││
│  │  This license authorizes:                                    ││
│  │  • Sworn translation for UAE courts                         ││
│  │  • Official certification for government submissions        ││
│  │  • Legal stamping and binding per MOJ standards             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  DUBAI UNIFIED LICENSE (E-TRADER)                           ││
│  │  ────────────────────────────────                           ││
│  │  [DUL Badge with Verification Link]                         ││
│  │                                                              ││
│  │  License Number: 1333628                                     ││
│  │  Trade Name: OT.AE for Translation Services                 ││
│  │  Issuing Authority: Department of Economy & Tourism         ││
│  │                                                              ││
│  │  [Verify License on Dubai Economy Portal →]                 ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  GOVERNMENT ACCEPTANCE                                           │
│  ────────────────────                                            │
│  H2: Accepted By                                                 │
│                                                                  │
│  Our translations are formatted for acceptance by these UAE     │
│  government entities:                                            │
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │  [Logo]  │ │  [Logo]  │ │  [Logo]  │ │  [Logo]  │           │
│  │ Ministry │ │  Dubai   │ │  GDRFA   │ │  Dubai   │           │
│  │ of       │ │  Courts  │ │          │ │  Land    │           │
│  │ Justice  │ │          │ │          │ │  Dept    │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │  [Logo]  │ │  [Logo]  │ │  [Logo]  │ │  [Logo]  │           │
│  │  MOHRE   │ │   DHA    │ │  MOFA    │ │  KHDA    │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│                                                                  │
│  Note: Acceptance is based on proper formatting and MOJ         │
│  certification. Individual document requirements may vary.      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SECURITY & COMPLIANCE                                           │
│  ────────────────────                                            │
│  H2: Data Security Measures                                      │
│                                                                  │
│  ┌───────────────────┐ ┌───────────────────┐                    │
│  │ 🔒 Encrypted      │ │ 📝 NDA Available  │                    │
│  │ Transmission      │ │ On Request        │                    │
│  │                   │ │                   │                    │
│  │ All documents     │ │ Corporate clients │                    │
│  │ transmitted via   │ │ can request       │                    │
│  │ secure channels   │ │ formal NDAs       │                    │
│  └───────────────────┘ └───────────────────┘                    │
│                                                                  │
│  ┌───────────────────┐ ┌───────────────────┐                    │
│  │ 🗑️ 30-Day         │ │ 👤 Single         │                    │
│  │ Auto-Deletion     │ │ Translator        │                    │
│  │                   │ │                   │                    │
│  │ Documents purged  │ │ Sensitive docs    │                    │
│  │ after 30 days     │ │ handled by one    │                    │
│  │ automatically     │ │ assigned person   │                    │
│  └───────────────────┘ └───────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  WHAT WE DON'T DO                                                │
│  ────────────────                                                │
│  H2: Our Commitments                                             │
│                                                                  │
│  Transparency means being clear about what we don't do:         │
│                                                                  │
│  ❌ We do NOT use crowdsourced translation platforms            │
│  ❌ We do NOT use unverified freelancers for legal documents    │
│  ❌ We do NOT store documents on cloud services without consent │
│  ❌ We do NOT provide "certified" when MOJ-sworn is required    │
│  ❌ We do NOT accept payment before reviewing your documents    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Schema Implementation Requirements

### Summary of New Schemas Needed

| Schema Type | Page | Priority |
|-------------|------|----------|
| **Person** | `/about/translator/` | 🔴 Critical |
| **Service** | All service pages via ServiceLayout | 🔴 Critical |
| **HowTo** | Deploy ProcessSteps as schema | 🟡 High |
| **FAQPage** | Standardize across all FAQ sections | 🟡 High |
| **Review** | `/about/reviews/` | 🟡 High |
| **Article** | Case studies | 🟢 Medium |

### Implementation Approach

1. **Person Schema** (`src/components/PersonSchema.astro`)
   - Create dedicated component
   - Use on translator bio and as blog author reference

2. **Service Schema Deployment**
   - Already exists in `schema-utils.ts`
   - Add to `ServiceLayout.astro` props

3. **Review Schema Component** (`src/components/ReviewSchema.astro`)
   - Generate individual review markup
   - Aggregate rating on organization

---

## Implementation Priority Matrix

| Priority | Page | E-E-A-T Impact | Effort |
|----------|------|----------------|--------|
| 🔴 P0 | Translator Biography | Very High (Trust) | 4-6 hrs |
| 🔴 P0 | Schema Deployment | Very High (Technical) | 2-3 hrs |
| 🟡 P1 | Sharjah Tenancy Hub | High (Expertise) | 3-4 hrs |
| 🟡 P1 | Reviews Hub | High (Experience) | 2-3 hrs |
| 🟢 P2 | Case Studies (3) | Medium (Experience) | 6-8 hrs |
| 🟢 P2 | Credentials Page | Medium (Authority) | 2-3 hrs |

---

## Next Steps

1. **Immediate**: Create translator biography page with Person schema
2. **Week 1**: Deploy Service schema to ServiceLayout
3. **Week 2**: Build Sharjah tenancy hub with local specifics
4. **Week 3**: Create reviews hub and first 3 case studies
5. **Week 4**: Build credentials consolidation page

---

*Document Version: 1.0*
*Created: December 28, 2025*
*For: OnlineTranslation.ae E-E-A-T Enhancement*
