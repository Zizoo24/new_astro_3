# E-E-A-T Component Specifications
## Technical Implementation Guide

**Version:** 1.0
**Created:** December 28, 2025

---

## Table of Contents

1. [New Components Required](#new-components-required)
2. [Person Schema Component](#1-personschemaastro)
3. [Translator Hero Component](#2-translatorheroastro)
4. [Credentials Grid Component](#3-credentialsgridastro)
5. [Expertise Accordion Component](#4-expertiseaccordionastro)
6. [Case Study Card Component](#5-casestudycardastro)
7. [Enhanced Review Card Component](#6-reviewcardastro)
8. [Sharjah Fee Calculator Component](#7-sharjahfeecalculatorastro)
9. [Verification Badge Component](#8-verificationbadgeastro)
10. [Schema Updates to Existing Components](#schema-updates-to-existing-components)

---

## New Components Required

| Component | Location | Purpose | Priority |
|-----------|----------|---------|----------|
| `PersonSchema.astro` | `src/components/` | Translator structured data | P0 |
| `TranslatorHero.astro` | `src/components/` | Bio page hero section | P0 |
| `CredentialsGrid.astro` | `src/components/` | License/language display | P0 |
| `ExpertiseAccordion.astro` | `src/components/` | Expandable expertise areas | P1 |
| `CaseStudyCard.astro` | `src/components/` | Case study preview cards | P1 |
| `ReviewCard.astro` | `src/components/` | Enhanced testimonial display | P1 |
| `SharjahFeeCalculator.astro` | `src/components/` | 4% fee calculator widget | P2 |
| `VerificationBadge.astro` | `src/components/` | MOJ verification callout | P0 |

---

## 1. PersonSchema.astro

### Purpose
Generate Person structured data for the translator, compliant with Google's E-E-A-T requirements for YMYL content.

### Props Interface

```typescript
interface Props {
  name: string;
  nameArabic?: string;
  jobTitle: string;
  description?: string;
  image?: string;
  license: {
    number: string;
    issuedBy: string;
    validFrom?: string;
    validUntil: string;
  };
  languages: string[];
  areaServed?: string[];
  sameAs?: string[]; // LinkedIn, etc.
  includeInPage?: boolean; // Whether to render visible content
}
```

### Implementation

```astro
---
import { siteConfig } from '../config/site';

interface Props {
  name: string;
  nameArabic?: string;
  jobTitle: string;
  description?: string;
  image?: string;
  license: {
    number: string;
    issuedBy: string;
    validFrom?: string;
    validUntil: string;
  };
  languages: string[];
  areaServed?: string[];
  sameAs?: string[];
}

const {
  name,
  nameArabic,
  jobTitle,
  description,
  image = '/assets/images/team/translator-placeholder.svg',
  license,
  languages,
  areaServed = ['Dubai', 'Abu Dhabi', 'Sharjah', 'UAE'],
  sameAs = []
} = Astro.props;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/about/translator/#translator`,
  "name": name,
  ...(nameArabic && { "alternateName": nameArabic }),
  "jobTitle": jobTitle,
  ...(description && { "description": description }),
  "image": image.startsWith('http') ? image : `${siteConfig.url}${image}`,
  "knowsLanguage": languages.map(lang => ({
    "@type": "Language",
    "name": lang
  })),
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "MOJ Legal Translator License",
    "recognizedBy": {
      "@type": "GovernmentOrganization",
      "name": license.issuedBy,
      "url": "https://www.moj.gov.ae"
    },
    ...(license.validFrom && { "validFrom": license.validFrom }),
    "validUntil": license.validUntil
  },
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`
  },
  "areaServed": areaServed.map(area => ({
    "@type": area === 'UAE' ? 'Country' : 'City',
    "name": area === 'UAE' ? 'United Arab Emirates' : area
  })),
  ...(sameAs.length > 0 && { "sameAs": sameAs })
};
---

<script type="application/ld+json" set:html={JSON.stringify(personSchema)} />
```

### Usage

```astro
<PersonSchema
  name="Khaled Mohamed Abdulwahab Al-Adl"
  nameArabic="خالد محمد عبدالوهاب العدل"
  jobTitle="MOJ-Licensed Legal Translator"
  description="Ministry of Justice licensed legal translator specializing in court documents, corporate filings, and civil records."
  license={{
    number: "701",
    issuedBy: "UAE Ministry of Justice",
    validUntil: "2026-10-15"
  }}
  languages={["Arabic", "English"]}
/>
```

---

## 2. TranslatorHero.astro

### Purpose
Hero section for translator biography page with photo, credentials, and verification callout.

### Props Interface

```typescript
interface Props {
  name: string;
  nameArabic?: string;
  title: string;
  subtitle?: string;
  photo?: string;
  licenseNumber: string;
  validUntil: string;
  verifyHotline?: string;
}
```

### Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  Background: Navy gradient with subtle pattern                  │
│                                                                  │
│  ┌──────────────────┐  ┌─────────────────────────────────────┐  │
│  │                  │  │ Section Label: "THE CERTIFIER"      │  │
│  │   [Photo Frame]  │  │                                     │  │
│  │   with border    │  │ H1: Khaled Mohamed Abdulwahab       │  │
│  │                  │  │     Al-Adl                          │  │
│  │   150x150px      │  │                                     │  │
│  │   rounded        │  │ Arabic: خالد محمد عبدالوهاب العدل   │  │
│  │                  │  │                                     │  │
│  └──────────────────┘  │ Subtitle: MOJ-Licensed Legal        │  │
│                        │          Translator                  │  │
│                        │                                     │  │
│                        │ ┌───────────────────────────────┐   │  │
│                        │ │ License #701 | Valid: 2026    │   │  │
│                        │ │ Verify: 800 333333            │   │  │
│                        │ └───────────────────────────────┘   │  │
│                        └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation

```astro
---
interface Props {
  name: string;
  nameArabic?: string;
  title: string;
  subtitle?: string;
  photo?: string;
  licenseNumber: string;
  validUntil: string;
  verifyHotline?: string;
}

const {
  name,
  nameArabic,
  title,
  subtitle = "MOJ-Licensed Legal Translator",
  photo = "/assets/images/team/translator-placeholder.svg",
  licenseNumber,
  validUntil,
  verifyHotline = "800 333333"
} = Astro.props;

// Format valid until date
const validDate = new Date(validUntil);
const validYear = validDate.getFullYear();
---

<section class="translator-hero">
  <div class="hero-background">
    <div class="hero-overlay"></div>
  </div>
  <div class="container">
    <div class="hero-grid">
      <div class="photo-frame">
        <img
          src={photo}
          alt={`${name} - ${subtitle}`}
          width="150"
          height="150"
          loading="eager"
        />
        <div class="photo-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div class="hero-content">
        <span class="section-label">The Certifier</span>
        <h1 class="translator-name">{name}</h1>
        {nameArabic && (
          <p class="translator-name-arabic">{nameArabic}</p>
        )}
        <p class="translator-subtitle">{subtitle}</p>

        <div class="license-badge">
          <div class="license-info">
            <span class="license-label">MOJ License</span>
            <span class="license-number">#{licenseNumber}</span>
          </div>
          <div class="license-divider"></div>
          <div class="license-info">
            <span class="license-label">Valid Until</span>
            <span class="license-value">{validYear}</span>
          </div>
          <div class="license-divider"></div>
          <div class="license-info">
            <span class="license-label">Verify</span>
            <a href={`tel:${verifyHotline.replace(/\s/g, '')}`} class="license-value">
              {verifyHotline}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .translator-hero {
    position: relative;
    padding: 4rem 0 3rem;
    background: linear-gradient(135deg, var(--primary-navy, #0E2B48) 0%, #1a3a5c 100%);
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(14, 43, 72, 0.3) 100%);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2.5rem;
    align-items: center;
  }

  .photo-frame {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background: var(--accent-coral, #FF1654);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 3px solid var(--primary-navy, #0E2B48);
  }

  .section-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent-coral, #FF1654);
    margin-bottom: 0.5rem;
  }

  .translator-name {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 0.25rem;
    line-height: 1.2;
  }

  .translator-name-arabic {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 0.75rem;
    font-family: 'Noto Sans Arabic', system-ui, sans-serif;
  }

  .translator-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 1.5rem;
    font-weight: 500;
  }

  .license-badge {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .license-info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .license-label {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }

  .license-number,
  .license-value {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
  }

  .license-value {
    text-decoration: none;
  }

  .license-value:hover {
    color: var(--accent-coral, #FF1654);
  }

  .license-divider {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1.5rem;
    }

    .photo-frame {
      margin: 0 auto;
      width: 120px;
      height: 120px;
    }

    .license-badge {
      flex-wrap: wrap;
      justify-content: center;
    }

    .license-divider {
      display: none;
    }
  }
</style>
```

---

## 3. CredentialsGrid.astro

### Purpose
Display translator credentials in a 3-column grid format.

### Props Interface

```typescript
interface Credential {
  icon: string; // Icon name or SVG
  title: string;
  items: string[];
  highlight?: string;
}

interface Props {
  credentials: Credential[];
}
```

### Implementation

```astro
---
interface Credential {
  icon: 'license' | 'language' | 'specialty' | 'experience';
  title: string;
  items: string[];
  highlight?: string;
}

interface Props {
  credentials: Credential[];
}

const { credentials } = Astro.props;

const icons = {
  license: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <path d="M7 8h10M7 12h10M7 16h6"/>
  </svg>`,
  language: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>`,
  specialty: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>`,
  experience: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`
};
---

<div class="credentials-grid">
  {credentials.map((cred) => (
    <div class="credential-card">
      <div class="credential-icon" set:html={icons[cred.icon]} />
      <h3 class="credential-title">{cred.title}</h3>
      {cred.highlight && (
        <span class="credential-highlight">{cred.highlight}</span>
      )}
      <ul class="credential-items">
        {cred.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

<style>
  .credentials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .credential-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    text-align: center;
  }

  .credential-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, var(--primary-navy, #0E2B48) 0%, #1a3a5c 100%);
    border-radius: 0.75rem;
    color: white;
    margin-bottom: 1rem;
  }

  .credential-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-navy, #0E2B48);
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .credential-highlight {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--accent-coral, #FF1654);
    margin-bottom: 0.75rem;
  }

  .credential-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .credential-items li {
    font-size: 0.9rem;
    color: var(--text-muted, #5a6a7a);
    padding: 0.35rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .credential-items li:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .credentials-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Dark mode */
  :global(body.theme-dark) .credential-card {
    background: #21262d;
  }

  :global(body.theme-dark) .credential-title {
    color: #f0f6fc;
  }

  :global(body.theme-dark) .credential-items li {
    color: #a8b3c2;
    border-color: rgba(255, 255, 255, 0.1);
  }
</style>
```

### Usage

```astro
<CredentialsGrid credentials={[
  {
    icon: 'license',
    title: 'MOJ License',
    highlight: '#701',
    items: ['Valid until 2026', 'Verify: 800 333333', 'Dubai Courts Accepted']
  },
  {
    icon: 'language',
    title: 'Languages',
    items: ['Arabic (Native)', 'English (Fluent)', 'Legal Terminology']
  },
  {
    icon: 'specialty',
    title: 'Specializations',
    items: ['Court Documents', 'Corporate Law', 'Civil Records', 'Medical']
  }
]} />
```

---

## 4. ExpertiseAccordion.astro

### Purpose
Expandable accordion showing translator expertise areas with document types.

### Props Interface

```typescript
interface ExpertiseArea {
  title: string;
  description?: string;
  documents: string[];
  defaultOpen?: boolean;
}

interface Props {
  areas: ExpertiseArea[];
  exclusive?: boolean; // Only one open at a time
}
```

### Implementation

```astro
---
interface ExpertiseArea {
  title: string;
  description?: string;
  documents: string[];
  defaultOpen?: boolean;
}

interface Props {
  areas: ExpertiseArea[];
  exclusive?: boolean;
}

const { areas, exclusive = true } = Astro.props;
const accordionName = exclusive ? 'expertise-accordion' : undefined;
---

<div class="expertise-accordion">
  {areas.map((area, index) => (
    <details
      class="expertise-item"
      name={accordionName}
      open={area.defaultOpen || index === 0}
    >
      <summary class="expertise-header">
        <span class="expertise-title">{area.title}</span>
        <span class="expertise-toggle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </summary>
      <div class="expertise-content">
        {area.description && (
          <p class="expertise-description">{area.description}</p>
        )}
        <ul class="expertise-documents">
          {area.documents.map((doc) => (
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </details>
  ))}
</div>

<style>
  .expertise-accordion {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .expertise-item {
    background: #ffffff;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .expertise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;
  }

  .expertise-header:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .expertise-item[open] .expertise-header {
    background: var(--primary-navy, #0E2B48);
  }

  .expertise-item[open] .expertise-title {
    color: #ffffff;
  }

  .expertise-item[open] .expertise-toggle {
    color: #ffffff;
    transform: rotate(180deg);
  }

  .expertise-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-navy, #0E2B48);
  }

  .expertise-toggle {
    color: var(--text-muted, #5a6a7a);
    transition: transform 0.2s ease;
  }

  .expertise-content {
    padding: 1.25rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .expertise-description {
    font-size: 0.95rem;
    color: var(--text-muted, #5a6a7a);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .expertise-documents {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .expertise-documents li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-dark, #1a1a1a);
    padding: 0.35rem 0;
  }

  .expertise-documents svg {
    color: var(--accent-coral, #FF1654);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .expertise-documents {
      grid-template-columns: 1fr;
    }
  }
</style>
```

### Usage

```astro
<ExpertiseAccordion areas={[
  {
    title: "Court & Litigation Documents",
    description: "Translation of judicial documents for Dubai Courts, DIFC Courts, and arbitration proceedings.",
    documents: [
      "Court verdicts and judgments",
      "Legal briefs and submissions",
      "Arbitration awards (DIAC, DIFC-LCIA)",
      "Witness statements",
      "Power of Attorney for litigation"
    ],
    defaultOpen: true
  },
  {
    title: "Corporate & Commercial",
    documents: [
      "Memorandum of Association (MOA)",
      "Articles of Association",
      "Board resolutions",
      "Shareholder agreements",
      "Commercial licenses"
    ]
  }
]} />
```

---

## 5. CaseStudyCard.astro

### Purpose
Preview card for case studies on the hub page.

### Props Interface

```typescript
interface Props {
  title: string;
  category: string;
  excerpt: string;
  outcome: string;
  turnaround: string;
  slug: string;
  icon?: string;
}
```

### Implementation

```astro
---
interface Props {
  title: string;
  category: string;
  excerpt: string;
  outcome: string;
  turnaround: string;
  slug: string;
  icon?: string;
}

const { title, category, excerpt, outcome, turnaround, slug, icon = '📄' } = Astro.props;

const categoryColors: Record<string, string> = {
  'Court Documents': '#6B7280',
  'Immigration': '#3B82F6',
  'Healthcare': '#10B981',
  'Corporate': '#8B5CF6',
  'Academic': '#F59E0B'
};

const categoryColor = categoryColors[category] || '#6B7280';
---

<article class="case-study-card">
  <div class="card-header">
    <span class="card-icon">{icon}</span>
    <span class="card-category" style={`--category-color: ${categoryColor}`}>
      {category}
    </span>
  </div>

  <h3 class="card-title">{title}</h3>
  <p class="card-excerpt">{excerpt}</p>

  <div class="card-outcomes">
    <div class="outcome-item">
      <span class="outcome-icon">✅</span>
      <span class="outcome-text">{outcome}</span>
    </div>
    <div class="outcome-item">
      <span class="outcome-icon">⏱️</span>
      <span class="outcome-text">{turnaround}</span>
    </div>
  </div>

  <a href={`/resources/case-studies/${slug}/`} class="card-link">
    Read Full Story
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </a>
</article>

<style>
  .case-study-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.04);
  }

  .case-study-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-category {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    background: color-mix(in srgb, var(--category-color) 15%, transparent);
    color: var(--category-color);
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-navy, #0E2B48);
    margin: 0 0 0.75rem;
    line-height: 1.3;
  }

  .card-excerpt {
    font-size: 0.9rem;
    color: var(--text-muted, #5a6a7a);
    line-height: 1.6;
    margin: 0 0 1rem;
    flex-grow: 1;
  }

  .card-outcomes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .outcome-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .outcome-icon {
    font-size: 0.9rem;
  }

  .outcome-text {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-dark, #1a1a1a);
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent-coral, #FF1654);
    text-decoration: none;
    transition: gap 0.2s ease;
  }

  .card-link:hover {
    gap: 0.75rem;
  }
</style>
```

---

## 6. ReviewCard.astro

### Purpose
Enhanced testimonial display with outcome tags and verification indicators.

### Props Interface

```typescript
interface Props {
  quote: string;
  name: string;
  role: string;
  date?: string;
  rating?: number;
  service?: string;
  outcome?: string;
  verified?: boolean;
  source?: 'google' | 'facebook' | 'direct';
}
```

### Implementation

```astro
---
interface Props {
  quote: string;
  name: string;
  role: string;
  date?: string;
  rating?: number;
  service?: string;
  outcome?: string;
  verified?: boolean;
  source?: 'google' | 'facebook' | 'direct';
}

const {
  quote,
  name,
  role,
  date,
  rating = 5,
  service,
  outcome,
  verified = true,
  source = 'direct'
} = Astro.props;

const sourceIcons = {
  google: '🔍',
  facebook: '📘',
  direct: '✉️'
};

const sourceLabels = {
  google: 'Google Review',
  facebook: 'Facebook Review',
  direct: 'Direct Feedback'
};
---

<article class="review-card" itemscope itemtype="https://schema.org/Review">
  <div class="review-header">
    <div class="review-rating" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span class={`star ${i < rating ? 'filled' : ''}`}>★</span>
      ))}
      <meta itemprop="ratingValue" content={String(rating)} />
    </div>
    {verified && (
      <span class="verified-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Verified
      </span>
    )}
  </div>

  <blockquote class="review-quote" itemprop="reviewBody">
    "{quote}"
  </blockquote>

  {(service || outcome) && (
    <div class="review-tags">
      {service && (
        <span class="tag service-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          {service}
        </span>
      )}
      {outcome && (
        <span class="tag outcome-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 11 12 14 22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          {outcome}
        </span>
      )}
    </div>
  )}

  <footer class="review-footer">
    <div class="review-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span class="author-name" itemprop="name">{name}</span>
      <span class="author-role">{role}</span>
    </div>
    <div class="review-meta">
      <span class="review-source" title={sourceLabels[source]}>
        {sourceIcons[source]}
      </span>
      {date && (
        <time class="review-date" itemprop="datePublished" datetime={date}>
          {new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </time>
      )}
    </div>
  </footer>
</article>

<style>
  .review-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .review-rating {
    display: flex;
    gap: 0.15rem;
  }

  .star {
    font-size: 1.1rem;
    color: #d1d5db;
  }

  .star.filled {
    color: #fbbf24;
  }

  .verified-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #10b981;
  }

  .review-quote {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-dark, #1a1a1a);
    margin: 0;
    font-style: italic;
  }

  .review-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.35rem 0.75rem;
    border-radius: 1rem;
  }

  .service-tag {
    background: rgba(14, 43, 72, 0.1);
    color: var(--primary-navy, #0E2B48);
  }

  .outcome-tag {
    background: rgba(16, 185, 129, 0.1);
    color: #059669;
  }

  .review-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .review-author {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .author-name {
    font-weight: 600;
    color: var(--primary-navy, #0E2B48);
    font-size: 0.95rem;
  }

  .author-role {
    font-size: 0.8rem;
    color: var(--text-muted, #5a6a7a);
  }

  .review-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-muted, #5a6a7a);
  }
</style>
```

---

## 7. SharjahFeeCalculator.astro

### Purpose
Interactive calculator for Sharjah Municipality 4% attestation fee.

### Implementation

```astro
---
interface Props {
  defaultRent?: number;
}

const { defaultRent = 50000 } = Astro.props;
---

<div class="fee-calculator">
  <h3 class="calculator-title">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M12 9v6M9 12h6"/>
    </svg>
    Sharjah Attestation Fee Calculator
  </h3>

  <div class="calculator-body">
    <label class="input-group">
      <span class="input-label">Annual Rent (AED)</span>
      <input
        type="number"
        id="rent-input"
        value={defaultRent}
        min="0"
        step="1000"
        class="rent-input"
      />
    </label>

    <div class="result-group">
      <span class="result-label">Municipality Attestation Fee (4%)</span>
      <span class="result-value" id="fee-output">AED <span id="fee-amount">{(defaultRent * 0.04).toLocaleString()}</span></span>
    </div>

    <p class="calculator-note">
      This fee is payable directly to Sharjah Municipality, separate from translation fees.
    </p>
  </div>
</div>

<script>
  const rentInput = document.getElementById('rent-input') as HTMLInputElement;
  const feeAmount = document.getElementById('fee-amount');

  if (rentInput && feeAmount) {
    rentInput.addEventListener('input', () => {
      const rent = parseFloat(rentInput.value) || 0;
      const fee = rent * 0.04;
      feeAmount.textContent = fee.toLocaleString();
    });
  }
</script>

<style>
  .fee-calculator {
    background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
    border: 1px solid #fed7aa;
    border-radius: 1rem;
    overflow: hidden;
  }

  .calculator-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #9a3412;
    padding: 1rem 1.25rem;
    margin: 0;
    background: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid #fed7aa;
  }

  .calculator-body {
    padding: 1.25rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .input-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #78350f;
  }

  .rent-input {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: 2px solid #fdba74;
    border-radius: 0.5rem;
    background: #ffffff;
    color: #1a1a1a;
    transition: border-color 0.2s ease;
  }

  .rent-input:focus {
    outline: none;
    border-color: #f97316;
  }

  .result-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #ffffff;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .result-label {
    font-size: 0.9rem;
    color: #78350f;
  }

  .result-value {
    font-size: 1.25rem;
    font-weight: 800;
    color: #ea580c;
  }

  .calculator-note {
    font-size: 0.8rem;
    color: #9a3412;
    margin: 0;
    font-style: italic;
  }
</style>
```

---

## 8. VerificationBadge.astro

### Purpose
Prominent verification callout for MOJ license verification.

### Implementation

```astro
---
interface Props {
  licenseNumber: string;
  hotline?: string;
  variant?: 'inline' | 'card';
}

const {
  licenseNumber,
  hotline = '800 333333',
  variant = 'card'
} = Astro.props;
---

{variant === 'card' ? (
  <div class="verification-card">
    <div class="verification-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    </div>
    <div class="verification-content">
      <h4 class="verification-title">Verify Our License</h4>
      <p class="verification-text">
        Call the Ministry of Justice hotline to verify license #{licenseNumber}
      </p>
      <a href={`tel:${hotline.replace(/\s/g, '')}`} class="verification-hotline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        {hotline}
      </a>
    </div>
  </div>
) : (
  <span class="verification-inline">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
    Verify License #{licenseNumber}: <a href={`tel:${hotline.replace(/\s/g, '')}`}>{hotline}</a>
  </span>
)}

<style>
  .verification-card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    border: 1px solid #a7f3d0;
    border-radius: 0.75rem;
  }

  .verification-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: #10b981;
    border-radius: 50%;
    color: white;
    flex-shrink: 0;
  }

  .verification-content {
    flex: 1;
  }

  .verification-title {
    font-size: 1rem;
    font-weight: 700;
    color: #065f46;
    margin: 0 0 0.35rem;
  }

  .verification-text {
    font-size: 0.9rem;
    color: #047857;
    margin: 0 0 0.75rem;
    line-height: 1.5;
  }

  .verification-hotline {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #059669;
    text-decoration: none;
    padding: 0.5rem 1rem;
    background: #ffffff;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .verification-hotline:hover {
    background: #059669;
    color: #ffffff;
  }

  .verification-inline {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: #059669;
  }

  .verification-inline a {
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
  }
</style>
```

---

## Schema Updates to Existing Components

### ServiceLayout.astro Updates

Add Service schema generation:

```typescript
// Add to frontmatter
import { generateServiceSchema } from '../lib/schema-utils';

// Add to props
interface Props {
  // ... existing props
  serviceType?: string;
  priceFrom?: number;
  priceCurrency?: string;
}

// Generate schema in component
const serviceSchema = generateServiceSchema({
  name: heroTitle,
  description: metaDescription,
  serviceType: serviceType || 'Legal Translation',
  priceFrom: priceFrom,
  priceCurrency: priceCurrency || 'AED'
});
```

### BaseLayout.astro Updates

Update AggregateRating to be dynamic:

```typescript
// Update from hardcoded values
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": siteConfig.reviews?.rating || "5.0",
  "reviewCount": siteConfig.reviews?.count || "15",
  "bestRating": "5",
  "worstRating": "1"
}
```

---

## Component Dependencies

| Component | Depends On |
|-----------|------------|
| TranslatorHero | - |
| CredentialsGrid | - |
| ExpertiseAccordion | - |
| PersonSchema | siteConfig |
| CaseStudyCard | - |
| ReviewCard | - |
| SharjahFeeCalculator | - |
| VerificationBadge | - |

---

## File Locations

```
src/components/
├── eeat/
│   ├── PersonSchema.astro
│   ├── TranslatorHero.astro
│   ├── CredentialsGrid.astro
│   ├── ExpertiseAccordion.astro
│   ├── CaseStudyCard.astro
│   ├── ReviewCard.astro
│   ├── SharjahFeeCalculator.astro
│   └── VerificationBadge.astro
```

---

*Document Version: 1.0*
*Created: December 28, 2025*
