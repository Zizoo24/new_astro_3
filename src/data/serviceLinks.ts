/**
 * serviceLinks.ts - Comprehensive Internal Linking System
 *
 * NEAR-EXTREME LINKING STRATEGY:
 * - Every page has semantic relationships defined
 * - Related: Similar services the user might need
 * - Prerequisites: Documents needed before this service
 * - NextSteps: What to do after this service
 * - Family: Same document type variations
 * - CrossSilo: Links to other content silos
 * - Locations: Geo-targeted versions
 * - Resources: Helpful guides and informational content
 * - Trust: E-E-A-T trust signal pages
 *
 * Updated: 2025-12-28
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ServiceLink {
  url: string;
  text: string;
  full: string;
  icon?: string;
  badge?: string;
}

export interface PageRelationships {
  related: string[];      // Similar services
  prerequisites?: string[]; // Needed before this
  nextSteps?: string[];   // What comes after
  family?: string[];      // Same category variations
  crossSilo?: string[];   // Links to other silos
  locations?: string[];   // Geo-targeted pages
  attestation?: string[]; // Related attestation services
  resources?: string[];   // Helpful guides and informational content
  trust?: string[];       // E-E-A-T trust signal pages
}

// ============================================
// ALL SERVICE LINKS - COMPREHENSIVE CATALOG
// ============================================

export const serviceLinks: Record<string, ServiceLink> = {
  // ========================================
  // SILO 1: LEGAL & CORPORATE
  // ========================================
  legalTranslation: {
    url: "/legal-translation-dubai/",
    text: "legal translation",
    full: "MOJ-certified legal translation in Dubai",
    icon: "fas fa-gavel"
  },
  contracts: {
    url: "/legal/contracts/",
    text: "contract translation",
    full: "contract translation services",
    icon: "fas fa-file-signature"
  },
  nda: {
    url: "/legal/contracts/nda/",
    text: "NDA translation",
    full: "Non-Disclosure Agreement translation",
    icon: "fas fa-user-secret"
  },
  lease: {
    url: "/legal/contracts/lease/",
    text: "lease agreement translation",
    full: "lease contract translation for Dubai rentals",
    icon: "fas fa-home"
  },
  spa: {
    url: "/legal/contracts/spa/",
    text: "SPA translation",
    full: "Sale & Purchase Agreement translation",
    icon: "fas fa-handshake"
  },
  mou: {
    url: "/legal/contracts/mou/",
    text: "MOU translation",
    full: "Memorandum of Understanding translation",
    icon: "fas fa-file-contract"
  },
  corporate: {
    url: "/legal/corporate/",
    text: "corporate documents",
    full: "corporate document translation",
    icon: "fas fa-building"
  },
  poa: {
    url: "/legal/corporate/poa/",
    text: "Power of Attorney translation",
    full: "Power of Attorney (POA) translation",
    icon: "fas fa-gavel"
  },
  moa: {
    url: "/legal/corporate/moa/",
    text: "MOA translation",
    full: "Memorandum of Association translation",
    icon: "fas fa-landmark"
  },
  resolution: {
    url: "/legal/corporate/resolution/",
    text: "board resolution translation",
    full: "board resolution translation services",
    icon: "fas fa-users"
  },
  litigation: {
    url: "/legal/litigation/",
    text: "court documents",
    full: "court document translation",
    icon: "fas fa-balance-scale"
  },
  verdict: {
    url: "/legal/litigation/verdict/",
    text: "court verdict translation",
    full: "court verdict and judgment translation",
    icon: "fas fa-gavel"
  },
  arbitration: {
    url: "/legal/litigation/arbitration/",
    text: "arbitration translation",
    full: "arbitration award translation",
    icon: "fas fa-balance-scale-left"
  },
  wills: {
    url: "/legal/wills/",
    text: "will translation",
    full: "will and testament translation",
    icon: "fas fa-scroll"
  },

  // ========================================
  // SILO 2: PERSONAL & CIVIL
  // ========================================
  personalDocuments: {
    url: "/personal-documents/",
    text: "personal documents",
    full: "personal document translation services",
    icon: "fas fa-user"
  },
  vitalRecords: {
    url: "/personal/vital-records/",
    text: "vital records",
    full: "vital records translation",
    icon: "fas fa-file-alt"
  },
  birthCertificate: {
    url: "/personal/vital-records/birth/",
    text: "birth certificate translation",
    full: "birth certificate translation for UAE visas",
    icon: "fas fa-baby"
  },
  marriageCertificate: {
    url: "/personal/vital-records/marriage/",
    text: "marriage certificate translation",
    full: "marriage certificate translation for visa",
    icon: "fas fa-ring"
  },
  divorceCertificate: {
    url: "/personal/vital-records/divorce/",
    text: "divorce certificate translation",
    full: "divorce decree translation services",
    icon: "fas fa-file-contract"
  },
  deathCertificate: {
    url: "/personal/vital-records/death/",
    text: "death certificate translation",
    full: "death certificate translation for legal matters",
    icon: "fas fa-heart-broken"
  },
  immigration: {
    url: "/personal/immigration/",
    text: "immigration documents",
    full: "immigration document translation",
    icon: "fas fa-passport"
  },
  pcc: {
    url: "/personal/immigration/pcc/",
    text: "police clearance translation",
    full: "Police Clearance Certificate (PCC) translation",
    icon: "fas fa-shield-alt"
  },
  bankStatement: {
    url: "/personal/immigration/bank/",
    text: "bank statement translation",
    full: "bank statement translation for visa",
    icon: "fas fa-university"
  },
  drivingLicense: {
    url: "/personal/immigration/license/",
    text: "driving license translation",
    full: "driving license translation for UAE exchange",
    icon: "fas fa-id-card"
  },
  academic: {
    url: "/personal/academic/",
    text: "academic documents",
    full: "academic document translation",
    icon: "fas fa-graduation-cap"
  },
  degree: {
    url: "/personal/academic/degree/",
    text: "degree translation",
    full: "university degree certificate translation",
    icon: "fas fa-scroll"
  },
  transcripts: {
    url: "/personal/academic/transcripts/",
    text: "transcript translation",
    full: "academic transcript translation",
    icon: "fas fa-list-alt"
  },

  // ========================================
  // SILO 3: SERVICES & ATTESTATION
  // ========================================
  services: {
    url: "/services/",
    text: "our services",
    full: "translation services",
    icon: "fas fa-concierge-bell"
  },
  certificateTranslation: {
    url: "/services/certificate-translation/",
    text: "certificate translation",
    full: "certificate translation services",
    icon: "fas fa-certificate"
  },
  corporateTranslation: {
    url: "/services/corporate-translation/",
    text: "corporate translation",
    full: "corporate document translation",
    icon: "fas fa-building"
  },
  goldenVisa: {
    url: "/services/golden-visa-translation/",
    text: "Golden Visa translation",
    full: "Golden Visa document package translation",
    icon: "fas fa-passport",
    badge: "POPULAR"
  },
  attestation: {
    url: "/services/attestation/",
    text: "attestation services",
    full: "document attestation and MOFAIC services",
    icon: "fas fa-stamp"
  },
  mofaAttestation: {
    url: "/services/attestation/mofa/",
    text: "MOFA attestation",
    full: "MOFAIC attestation services",
    icon: "fas fa-building-columns"
  },
  embassyAttestation: {
    url: "/services/attestation/embassy/",
    text: "embassy legalization",
    full: "embassy attestation and legalization",
    icon: "fas fa-flag"
  },
  apostille: {
    url: "/services/attestation/apostille/",
    text: "apostille services",
    full: "apostille certification services",
    icon: "fas fa-certificate"
  },
  indiaAttestation: {
    url: "/services/attestation/india/",
    text: "India attestation",
    full: "Indian document attestation in UAE",
    icon: "fas fa-flag"
  },
  ukAttestation: {
    url: "/services/attestation/uk/",
    text: "UK attestation",
    full: "UK document attestation services",
    icon: "fas fa-flag"
  },
  usAttestation: {
    url: "/services/attestation/us/",
    text: "US attestation",
    full: "US document attestation services",
    icon: "fas fa-flag"
  },
  philippinesAttestation: {
    url: "/services/attestation/philippines/",
    text: "Philippines attestation",
    full: "Philippines document attestation",
    icon: "fas fa-flag"
  },
  pakistanAttestation: {
    url: "/services/attestation/pakistan/",
    text: "Pakistan attestation",
    full: "Pakistan document attestation",
    icon: "fas fa-flag"
  },

  // ========================================
  // SILO 4: SPECIALIZED
  // ========================================
  specialized: {
    url: "/specialized-translation/",
    text: "specialized translation",
    full: "specialized translation services",
    icon: "fas fa-cogs"
  },
  medical: {
    url: "/specialized/medical/",
    text: "medical translation",
    full: "medical report translation",
    icon: "fas fa-notes-medical"
  },
  dhaDataflow: {
    url: "/specialized/medical/dha-dataflow/",
    text: "DHA DataFlow translation",
    full: "DHA DataFlow healthcare licensing translation",
    icon: "fas fa-user-md"
  },
  technical: {
    url: "/specialized/technical/",
    text: "technical translation",
    full: "technical manual translation",
    icon: "fas fa-tools"
  },
  hospitality: {
    url: "/specialized/hospitality/",
    text: "hospitality translation",
    full: "menu and hospitality translation",
    icon: "fas fa-utensils"
  },
  digital: {
    url: "/specialized/digital/",
    text: "website localization",
    full: "website and app localization",
    icon: "fas fa-globe"
  },
  financial: {
    url: "/specialized/financial/",
    text: "financial translation",
    full: "financial document translation",
    icon: "fas fa-chart-line"
  },
  tradeLicense: {
    url: "/legal/corporate/license/",
    text: "trade license translation",
    full: "trade license and commercial registration",
    icon: "fas fa-id-badge"
  },

  // ========================================
  // SILO 5: LOCATIONS
  // ========================================
  locations: {
    url: "/locations/",
    text: "our locations",
    full: "translation services locations",
    icon: "fas fa-map-marker-alt"
  },
  dubai: {
    url: "/locations/dubai/",
    text: "Dubai translation",
    full: "legal translation in Dubai",
    icon: "fas fa-city"
  },
  palmJumeirah: {
    url: "/locations/dubai/palm-jumeirah/",
    text: "Palm Jumeirah",
    full: "legal translation in Palm Jumeirah",
    icon: "fas fa-umbrella-beach"
  },
  difc: {
    url: "/locations/dubai/difc/",
    text: "DIFC",
    full: "legal translation in DIFC",
    icon: "fas fa-landmark"
  },
  jlt: {
    url: "/locations/dubai/jlt/",
    text: "JLT",
    full: "legal translation in JLT & DMCC",
    icon: "fas fa-building"
  },
  businessBay: {
    url: "/locations/dubai/business-bay/",
    text: "Business Bay",
    full: "legal translation in Business Bay",
    icon: "fas fa-briefcase"
  },
  marina: {
    url: "/locations/dubai/marina/",
    text: "Dubai Marina",
    full: "legal translation in Dubai Marina",
    icon: "fas fa-water"
  },
  abuDhabi: {
    url: "/locations/abu-dhabi/",
    text: "Abu Dhabi",
    full: "legal translation in Abu Dhabi",
    icon: "fas fa-mosque"
  },
  sharjah: {
    url: "/locations/sharjah/",
    text: "Sharjah",
    full: "legal translation in Sharjah",
    icon: "fas fa-university"
  },
  downtown: {
    url: "/locations/dubai/downtown/",
    text: "Downtown Dubai",
    full: "legal translation in Downtown Dubai",
    icon: "fas fa-building"
  },

  // ========================================
  // SILO 6: RESOURCES
  // ========================================
  resources: {
    url: "/resources/",
    text: "resources",
    full: "helpful resources",
    icon: "fas fa-book"
  },
  pricingGuide: {
    url: "/resources/pricing-guide/",
    text: "pricing guide",
    full: "translation pricing guide",
    icon: "fas fa-tags"
  },
  documentChecklist: {
    url: "/resources/document-checklist/",
    text: "document checklist",
    full: "document preparation checklist",
    icon: "fas fa-list-check"
  },
  attestationGuide: {
    url: "/resources/attestation-guide/",
    text: "attestation guide",
    full: "attestation process guide",
    icon: "fas fa-stamp"
  },
  goldenVisaChecklist: {
    url: "/resources/golden-visa-checklist/",
    text: "Golden Visa checklist",
    full: "Golden Visa document checklist",
    icon: "fas fa-passport"
  },
  faq: {
    url: "/resources/faq/",
    text: "FAQ",
    full: "frequently asked questions",
    icon: "fas fa-question-circle"
  },
  mojVsCertified: {
    url: "/resources/moj-vs-certified/",
    text: "MOJ vs Certified Guide",
    full: "MOJ Legal vs Certified Translation comparison",
    icon: "fas fa-balance-scale",
    badge: "NEW"
  },
  authenticatedTranslation: {
    url: "/resources/authenticated-translation/",
    text: "Authenticated Translation Guide",
    full: "Complete guide to authenticated translation in UAE",
    icon: "fas fa-stamp"
  },
  distanceEducation: {
    url: "/resources/distance-education-uae/",
    text: "Distance Education Guide",
    full: "Are distance education degrees valid in UAE?",
    icon: "fas fa-laptop",
    badge: "NEW"
  },
  mohesrEquivalency: {
    url: "/resources/mohesr-equivalency/",
    text: "MOHESR Equivalency Guide",
    full: "MOHESR equivalency vs translation explained",
    icon: "fas fa-certificate",
    badge: "NEW"
  },

  // ========================================
  // BLOG POSTS (Academic Cluster)
  // ========================================
  phdDbaTranslation: {
    url: "/blog/phd-dba-doctorate-translation-uae/",
    text: "PhD & DBA Translation",
    full: "PhD, DBA & Doctorate translation requirements by authority",
    icon: "fas fa-user-graduate",
    badge: "NEW"
  },
  degreesWorkPermit: {
    url: "/blog/degrees-accepted-uae-work-permit/",
    text: "Degrees for Work Permits",
    full: "Types of degrees accepted for UAE work permits",
    icon: "fas fa-briefcase",
    badge: "NEW"
  },
  studyGapGuide: {
    url: "/blog/study-gap-uae-employment/",
    text: "Study Gap Guide",
    full: "Study gaps and UAE employment explained",
    icon: "fas fa-history",
    badge: "NEW"
  },
  professionalCertsVsDegrees: {
    url: "/blog/professional-certificates-vs-degrees-translation/",
    text: "Certificates vs Degrees",
    full: "Professional certificates vs academic degrees translation",
    icon: "fas fa-certificate",
    badge: "NEW"
  },

  // ========================================
  // INDUSTRIES
  // ========================================
  industries: {
    url: "/industries/",
    text: "industries",
    full: "industry-specific translation",
    icon: "fas fa-industry"
  },
  healthcareIndustry: {
    url: "/industries/healthcare/",
    text: "healthcare translation",
    full: "healthcare industry translation",
    icon: "fas fa-hospital"
  },
  realEstateIndustry: {
    url: "/industries/real-estate/",
    text: "real estate translation",
    full: "real estate industry translation",
    icon: "fas fa-building"
  },
  legalIndustry: {
    url: "/industries/legal/",
    text: "legal industry",
    full: "law firm translation services",
    icon: "fas fa-balance-scale"
  },
  ecommerceIndustry: {
    url: "/industries/e-commerce/",
    text: "e-commerce translation",
    full: "e-commerce localization",
    icon: "fas fa-shopping-cart"
  },

  // ========================================
  // CORE PAGES
  // ========================================
  about: {
    url: "/about/",
    text: "about us",
    full: "about OnlineTranslation.ae",
    icon: "fas fa-info-circle"
  },
  translator: {
    url: "/about/translator/",
    text: "meet the translator",
    full: "Meet Khaled Al-Adl, MOJ-licensed translator",
    icon: "fas fa-user-tie",
    badge: "NEW"
  },
  credentials: {
    url: "/about/credentials/",
    text: "our credentials",
    full: "MOJ License #701 and verification details",
    icon: "fas fa-certificate"
  },
  reviews: {
    url: "/about/reviews/",
    text: "client reviews",
    full: "verified client testimonials and outcomes",
    icon: "fas fa-star"
  },
  caseStudies: {
    url: "/resources/case-studies/",
    text: "case studies",
    full: "real client success stories",
    icon: "fas fa-briefcase",
    badge: "NEW"
  },
  sharjahTenancy: {
    url: "/locations/sharjah/tenancy-translation/",
    text: "Sharjah tenancy translation",
    full: "Sharjah rental contract translation with 4% attestation",
    icon: "fas fa-home"
  },
  contact: {
    url: "/contact/",
    text: "contact us",
    full: "contact our team",
    icon: "fas fa-envelope"
  },
};

// ============================================
// SEMANTIC RELATIONSHIPS - NEAR-EXTREME LINKING
// ============================================

export const pageRelationships: Record<string, PageRelationships> = {
  // ========================================
  // VITAL RECORDS FAMILY
  // ========================================
  birthCertificate: {
    related: ["marriageCertificate", "degree", "goldenVisa", "pcc"],
    family: ["marriageCertificate", "divorceCertificate", "deathCertificate"],
    nextSteps: ["attestation", "mofaAttestation", "indiaAttestation"],
    crossSilo: ["goldenVisa", "immigration", "legalTranslation"],
    locations: ["palmJumeirah", "dubai", "abuDhabi"],
    attestation: ["indiaAttestation", "ukAttestation", "philippinesAttestation"],
    resources: ["documentChecklist", "attestationGuide", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  marriageCertificate: {
    related: ["birthCertificate", "divorceCertificate", "goldenVisa", "pcc"],
    family: ["birthCertificate", "divorceCertificate", "deathCertificate"],
    nextSteps: ["attestation", "mofaAttestation"],
    crossSilo: ["goldenVisa", "immigration", "legalTranslation"],
    locations: ["palmJumeirah", "dubai", "abuDhabi"],
    attestation: ["indiaAttestation", "ukAttestation", "philippinesAttestation"],
    resources: ["documentChecklist", "attestationGuide", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  divorceCertificate: {
    related: ["marriageCertificate", "poa", "wills"],
    family: ["birthCertificate", "marriageCertificate", "deathCertificate"],
    prerequisites: ["marriageCertificate"],
    nextSteps: ["attestation", "embassyAttestation"],
    crossSilo: ["litigation", "legalTranslation"],
    locations: ["dubai", "abuDhabi"],
    resources: ["documentChecklist", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  deathCertificate: {
    related: ["wills", "poa", "marriageCertificate"],
    family: ["birthCertificate", "marriageCertificate", "divorceCertificate"],
    nextSteps: ["attestation", "embassyAttestation", "wills"],
    crossSilo: ["legalTranslation", "litigation"],
    locations: ["dubai", "abuDhabi"],
    resources: ["documentChecklist", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },

  // ========================================
  // IMMIGRATION DOCUMENTS
  // ========================================
  pcc: {
    related: ["birthCertificate", "degree", "goldenVisa", "bankStatement"],
    nextSteps: ["mofaAttestation", "embassyAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "abuDhabi", "sharjah"],
    attestation: ["indiaAttestation", "ukAttestation", "usAttestation"],
    resources: ["documentChecklist", "attestationGuide", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  bankStatement: {
    related: ["pcc", "degree", "goldenVisa", "drivingLicense"],
    crossSilo: ["goldenVisa", "immigration", "realEstateIndustry"],
    locations: ["dubai", "difc", "businessBay"],
    resources: ["documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  drivingLicense: {
    related: ["pcc", "bankStatement", "birthCertificate"],
    crossSilo: ["immigration"],
    locations: ["dubai", "abuDhabi", "sharjah"],
    resources: ["documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },

  // ========================================
  // ACADEMIC DOCUMENTS
  // ========================================
  degree: {
    related: ["transcripts", "pcc", "goldenVisa", "birthCertificate", "dhaDataflow"],
    family: ["transcripts"],
    nextSteps: ["attestation", "mofaAttestation"],
    crossSilo: ["goldenVisa", "immigration", "medical", "dhaDataflow"],
    locations: ["dubai", "abuDhabi"],
    attestation: ["indiaAttestation", "ukAttestation", "usAttestation", "philippinesAttestation"],
    resources: ["documentChecklist", "attestationGuide", "mojVsCertified", "pricingGuide", "distanceEducation", "mohesrEquivalency", "phdDbaTranslation", "degreesWorkPermit", "studyGapGuide", "professionalCertsVsDegrees"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  transcripts: {
    related: ["degree", "pcc", "goldenVisa"],
    family: ["degree"],
    nextSteps: ["attestation"],
    crossSilo: ["immigration", "dhaDataflow"],
    locations: ["dubai", "abuDhabi"],
    resources: ["documentChecklist", "attestationGuide", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },

  // ========================================
  // CONTRACTS
  // ========================================
  nda: {
    related: ["mou", "spa", "contracts", "corporate"],
    family: ["lease", "spa", "mou"],
    crossSilo: ["corporateTranslation", "legalTranslation"],
    locations: ["difc", "businessBay", "jlt"]
  },
  lease: {
    related: ["spa", "nda", "realEstateIndustry"],
    family: ["nda", "spa", "mou"],
    crossSilo: ["realEstateIndustry", "legalTranslation"],
    locations: ["palmJumeirah", "dubai", "marina", "businessBay"]
  },
  spa: {
    related: ["lease", "mou", "realEstateIndustry", "poa"],
    family: ["nda", "lease", "mou"],
    crossSilo: ["realEstateIndustry", "legalTranslation"],
    locations: ["palmJumeirah", "difc", "businessBay"]
  },
  mou: {
    related: ["nda", "moa", "corporate", "contracts"],
    family: ["nda", "lease", "spa"],
    crossSilo: ["corporateTranslation", "legalTranslation"],
    locations: ["difc", "businessBay", "jlt"]
  },

  // ========================================
  // CORPORATE DOCUMENTS
  // ========================================
  poa: {
    related: ["moa", "resolution", "wills", "corporate"],
    family: ["moa", "resolution"],
    crossSilo: ["legalTranslation", "corporateTranslation"],
    locations: ["difc", "businessBay", "jlt"],
    attestation: ["mofaAttestation", "embassyAttestation"]
  },
  moa: {
    related: ["poa", "resolution", "mou", "corporate"],
    family: ["poa", "resolution"],
    crossSilo: ["corporateTranslation", "legalTranslation"],
    locations: ["difc", "businessBay", "jlt"]
  },
  resolution: {
    related: ["moa", "poa", "corporate"],
    family: ["poa", "moa"],
    crossSilo: ["corporateTranslation"],
    locations: ["difc", "businessBay"]
  },

  // ========================================
  // LITIGATION
  // ========================================
  verdict: {
    related: ["arbitration", "litigation", "legalTranslation"],
    family: ["arbitration"],
    crossSilo: ["legalIndustry", "legalTranslation"],
    locations: ["dubai", "abuDhabi"]
  },
  arbitration: {
    related: ["verdict", "litigation", "contracts"],
    family: ["verdict"],
    crossSilo: ["legalIndustry", "legalTranslation", "difc"],
    locations: ["difc", "dubai"]
  },
  wills: {
    related: ["poa", "deathCertificate", "marriageCertificate"],
    crossSilo: ["legalTranslation"],
    locations: ["dubai", "abuDhabi"]
  },

  // ========================================
  // GOLDEN VISA (HIGH VALUE)
  // ========================================
  goldenVisa: {
    related: ["birthCertificate", "marriageCertificate", "degree", "pcc", "bankStatement"],
    prerequisites: ["birthCertificate", "marriageCertificate", "degree", "pcc"],
    nextSteps: ["mofaAttestation", "attestation"],
    crossSilo: ["immigration", "vitalRecords", "academic"],
    locations: ["palmJumeirah", "dubai", "difc"],
    attestation: ["mofaAttestation", "indiaAttestation", "ukAttestation"],
    resources: ["goldenVisaChecklist", "attestationGuide", "documentChecklist", "mojVsCertified", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },

  // ========================================
  // ATTESTATION SERVICES
  // ========================================
  attestation: {
    related: ["mofaAttestation", "embassyAttestation", "apostille"],
    family: ["mofaAttestation", "embassyAttestation", "apostille"],
    crossSilo: ["goldenVisa", "immigration", "birthCertificate", "degree"],
    locations: ["dubai", "abuDhabi"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide", "mojVsCertified"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  mofaAttestation: {
    related: ["embassyAttestation", "apostille", "attestation"],
    family: ["embassyAttestation", "apostille"],
    prerequisites: ["birthCertificate", "marriageCertificate", "degree"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "abuDhabi"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  indiaAttestation: {
    related: ["mofaAttestation", "embassyAttestation", "birthCertificate", "degree"],
    family: ["ukAttestation", "usAttestation", "philippinesAttestation", "pakistanAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "abuDhabi", "sharjah"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  ukAttestation: {
    related: ["mofaAttestation", "apostille", "degree"],
    family: ["indiaAttestation", "usAttestation", "philippinesAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "difc"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  usAttestation: {
    related: ["apostille", "mofaAttestation", "degree"],
    family: ["indiaAttestation", "ukAttestation", "philippinesAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "difc"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },

  // ========================================
  // SPECIALIZED SERVICES
  // ========================================
  medical: {
    related: ["dhaDataflow", "healthcareIndustry", "certificateTranslation", "legalTranslation"],
    family: ["dhaDataflow"],
    crossSilo: ["healthcareIndustry", "immigration", "degree"],
    locations: ["dubai", "abuDhabi"],
    resources: ["documentChecklist", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  dhaDataflow: {
    related: ["medical", "degree", "healthcareIndustry", "certificateTranslation"],
    family: ["medical"],
    prerequisites: ["degree", "transcripts"],
    nextSteps: ["attestation", "mofaAttestation"],
    crossSilo: ["healthcareIndustry", "immigration", "goldenVisa", "academic"],
    locations: ["dubai", "abuDhabi"],
    resources: ["documentChecklist", "attestationGuide", "pricingGuide"],
    trust: ["credentials", "translator", "reviews", "caseStudies"]
  },
  technical: {
    related: ["digital", "corporateTranslation", "contracts"],
    crossSilo: ["ecommerceIndustry"],
    locations: ["difc", "businessBay", "jlt"],
    resources: ["pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  hospitality: {
    related: ["digital", "realEstateIndustry"],
    locations: ["palmJumeirah", "marina", "dubai"],
    resources: ["pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  digital: {
    related: ["technical", "ecommerceIndustry", "hospitality"],
    crossSilo: ["ecommerceIndustry"],
    locations: ["difc", "businessBay"],
    resources: ["pricingGuide"],
    trust: ["credentials", "translator", "reviews"]
  },
  financial: {
    related: ["corporateTranslation", "bankStatement", "moa"],
    crossSilo: ["corporate", "realEstateIndustry"],
    locations: ["difc", "businessBay", "abuDhabi"],
    resources: ["pricingGuide", "mojVsCertified"],
    trust: ["credentials", "translator", "reviews"]
  },
  tradeLicense: {
    related: ["moa", "poa", "corporateTranslation"],
    family: ["moa", "resolution"],
    crossSilo: ["corporate", "legalTranslation"],
    locations: ["difc", "businessBay", "jlt"]
  },

  // ========================================
  // LOCATIONS
  // ========================================
  palmJumeirah: {
    related: ["marina", "dubai", "goldenVisa"],
    family: ["difc", "jlt", "businessBay", "marina"],
    crossSilo: ["goldenVisa", "realEstateIndustry", "lease", "spa"]
  },
  difc: {
    related: ["businessBay", "jlt", "corporateTranslation"],
    family: ["palmJumeirah", "jlt", "businessBay", "marina"],
    crossSilo: ["corporate", "contracts", "arbitration", "legalIndustry"]
  },
  jlt: {
    related: ["difc", "businessBay", "corporateTranslation"],
    family: ["palmJumeirah", "difc", "businessBay", "marina"],
    crossSilo: ["corporate", "contracts"]
  },
  businessBay: {
    related: ["difc", "jlt", "corporateTranslation"],
    family: ["palmJumeirah", "difc", "jlt", "marina"],
    crossSilo: ["corporate", "contracts", "realEstateIndustry"]
  },
  marina: {
    related: ["palmJumeirah", "jlt", "hospitality"],
    family: ["palmJumeirah", "difc", "jlt", "businessBay"],
    crossSilo: ["lease", "realEstateIndustry"]
  },
  abuDhabi: {
    related: ["dubai", "sharjah"],
    crossSilo: ["goldenVisa", "immigration", "attestation"]
  },
  sharjah: {
    related: ["dubai", "abuDhabi", "sharjahTenancy"],
    crossSilo: ["immigration", "attestation", "lease"]
  },

  // ========================================
  // INDUSTRIES
  // ========================================
  healthcareIndustry: {
    related: ["medical", "certificateTranslation"],
    crossSilo: ["medical", "immigration"],
    locations: ["dubai", "abuDhabi"]
  },
  realEstateIndustry: {
    related: ["lease", "spa", "poa"],
    crossSilo: ["contracts", "legalTranslation"],
    locations: ["palmJumeirah", "difc", "businessBay", "marina"]
  },
  legalIndustry: {
    related: ["legalTranslation", "contracts", "litigation"],
    crossSilo: ["corporate", "verdict", "arbitration"],
    locations: ["difc", "businessBay"]
  },
  ecommerceIndustry: {
    related: ["digital", "technical"],
    crossSilo: ["corporateTranslation"],
    locations: ["difc", "businessBay", "jlt"]
  },

  // ========================================
  // ATTESTATION SERVICES (ADDITIONAL)
  // ========================================
  embassyAttestation: {
    related: ["mofaAttestation", "apostille", "attestation"],
    family: ["mofaAttestation", "apostille"],
    crossSilo: ["goldenVisa", "immigration", "birthCertificate", "degree"],
    locations: ["dubai", "abuDhabi"]
  },
  apostille: {
    related: ["mofaAttestation", "embassyAttestation", "ukAttestation", "usAttestation"],
    family: ["mofaAttestation", "embassyAttestation"],
    crossSilo: ["goldenVisa", "immigration", "degree"],
    locations: ["dubai", "abuDhabi"]
  },
  philippinesAttestation: {
    related: ["mofaAttestation", "embassyAttestation", "birthCertificate", "degree"],
    family: ["indiaAttestation", "ukAttestation", "usAttestation", "pakistanAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "sharjah"]
  },
  pakistanAttestation: {
    related: ["mofaAttestation", "embassyAttestation", "birthCertificate", "degree"],
    family: ["indiaAttestation", "ukAttestation", "philippinesAttestation"],
    crossSilo: ["goldenVisa", "immigration"],
    locations: ["dubai", "sharjah"]
  },

  // ========================================
  // SERVICE HUBS
  // ========================================
  legalTranslation: {
    related: ["contracts", "corporate", "litigation", "wills"],
    crossSilo: ["goldenVisa", "attestation", "corporateTranslation"],
    locations: ["difc", "businessBay", "dubai"]
  },
  corporateTranslation: {
    related: ["moa", "poa", "resolution", "tradeLicense"],
    crossSilo: ["legalTranslation", "contracts", "goldenVisa"],
    locations: ["difc", "businessBay", "jlt"]
  },
  certificateTranslation: {
    related: ["birthCertificate", "marriageCertificate", "degree", "pcc"],
    crossSilo: ["attestation", "goldenVisa", "immigration"],
    locations: ["dubai", "abuDhabi", "sharjah"]
  },

  // ========================================
  // RESOURCES
  // ========================================
  pricingGuide: {
    related: ["legalTranslation", "attestation", "goldenVisa", "certificateTranslation"],
    crossSilo: ["birthCertificate", "marriageCertificate", "degree", "contracts"]
  },
  documentChecklist: {
    related: ["goldenVisaChecklist", "attestationGuide", "pricingGuide"],
    crossSilo: ["goldenVisa", "attestation", "immigration", "birthCertificate"]
  },
  attestationGuide: {
    related: ["mofaAttestation", "embassyAttestation", "apostille"],
    crossSilo: ["goldenVisa", "birthCertificate", "degree", "marriageCertificate"]
  },
  goldenVisaChecklist: {
    related: ["goldenVisa", "attestationGuide", "documentChecklist"],
    prerequisites: ["birthCertificate", "marriageCertificate", "degree", "pcc"],
    crossSilo: ["attestation", "mofaAttestation"]
  },
  faq: {
    related: ["pricingGuide", "attestationGuide", "documentChecklist"],
    crossSilo: ["legalTranslation", "goldenVisa", "attestation"]
  },
  mojVsCertified: {
    related: ["legalTranslation", "certificateTranslation", "pricingGuide", "attestation", "authenticatedTranslation"],
    crossSilo: ["goldenVisa", "contracts", "poa", "birthCertificate", "marriageCertificate", "degree"]
  },
  authenticatedTranslation: {
    related: ["mojVsCertified", "legalTranslation", "attestation", "mofaAttestation", "certificateTranslation"],
    family: ["mojVsCertified", "attestationGuide", "pricingGuide"],
    crossSilo: ["goldenVisa", "birthCertificate", "marriageCertificate", "degree", "pcc", "poa", "contracts"]
  },
  distanceEducation: {
    related: ["degree", "transcripts", "mohesrEquivalency", "attestationGuide", "phdDbaTranslation", "degreesWorkPermit"],
    family: ["mohesrEquivalency", "attestationGuide", "phdDbaTranslation", "degreesWorkPermit"],
    crossSilo: ["goldenVisa", "degree", "immigration", "dhaDataflow"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide", "phdDbaTranslation", "degreesWorkPermit"]
  },
  mohesrEquivalency: {
    related: ["degree", "transcripts", "distanceEducation", "goldenVisa", "attestationGuide", "phdDbaTranslation", "degreesWorkPermit"],
    family: ["distanceEducation", "attestationGuide", "phdDbaTranslation", "degreesWorkPermit"],
    crossSilo: ["goldenVisa", "degree", "immigration", "dhaDataflow"],
    resources: ["attestationGuide", "documentChecklist", "pricingGuide", "phdDbaTranslation", "degreesWorkPermit"]
  },

  // ========================================
  // BLOG POSTS (Academic Cluster)
  // ========================================
  phdDbaTranslation: {
    related: ["degree", "transcripts", "mohesrEquivalency", "distanceEducation", "goldenVisa", "dhaDataflow"],
    family: ["degreesWorkPermit", "distanceEducation", "mohesrEquivalency"],
    crossSilo: ["goldenVisa", "attestation", "immigration", "medical"],
    resources: ["mohesrEquivalency", "distanceEducation", "attestationGuide", "documentChecklist"]
  },
  degreesWorkPermit: {
    related: ["degree", "transcripts", "mohesrEquivalency", "distanceEducation", "phdDbaTranslation", "dhaDataflow", "studyGapGuide", "professionalCertsVsDegrees"],
    family: ["phdDbaTranslation", "distanceEducation", "mohesrEquivalency", "studyGapGuide", "professionalCertsVsDegrees"],
    crossSilo: ["goldenVisa", "attestation", "immigration"],
    resources: ["mohesrEquivalency", "distanceEducation", "attestationGuide", "documentChecklist"]
  },
  studyGapGuide: {
    related: ["degree", "transcripts", "degreesWorkPermit", "goldenVisa", "mohesrEquivalency"],
    family: ["degreesWorkPermit", "phdDbaTranslation", "professionalCertsVsDegrees"],
    crossSilo: ["goldenVisa", "attestation", "immigration", "dhaDataflow"],
    resources: ["mohesrEquivalency", "distanceEducation", "attestationGuide"]
  },
  professionalCertsVsDegrees: {
    related: ["degree", "transcripts", "degreesWorkPermit", "attestation", "mojVsCertified"],
    family: ["degreesWorkPermit", "phdDbaTranslation", "studyGapGuide"],
    crossSilo: ["goldenVisa", "attestation", "dhaDataflow"],
    resources: ["mojVsCertified", "attestationGuide", "documentChecklist"]
  },

  // ========================================
  // CATEGORY HUB PAGES
  // ========================================
  contracts: {
    related: ["nda", "lease", "spa", "mou"],
    crossSilo: ["legalTranslation", "corporateTranslation", "realEstateIndustry"],
    locations: ["difc", "businessBay"]
  },
  corporate: {
    related: ["poa", "moa", "resolution", "tradeLicense"],
    crossSilo: ["legalTranslation", "corporateTranslation", "contracts"],
    locations: ["difc", "businessBay", "jlt"]
  },
  litigation: {
    related: ["verdict", "arbitration", "legalTranslation"],
    crossSilo: ["contracts", "wills", "legalIndustry"],
    locations: ["dubai", "difc"]
  },
  legal: {
    related: ["contracts", "corporate", "litigation", "wills"],
    crossSilo: ["legalTranslation", "corporateTranslation", "attestation"],
    locations: ["difc", "businessBay", "dubai"]
  },
  vitalRecords: {
    related: ["birthCertificate", "marriageCertificate", "divorceCertificate", "deathCertificate"],
    crossSilo: ["attestation", "goldenVisa", "immigration"],
    locations: ["dubai", "abuDhabi"]
  },
  immigration: {
    related: ["pcc", "bankStatement", "drivingLicense"],
    crossSilo: ["goldenVisa", "vitalRecords", "degree"],
    locations: ["dubai", "abuDhabi", "sharjah"]
  },
  academic: {
    related: ["degree", "transcripts"],
    crossSilo: ["goldenVisa", "immigration", "attestation"],
    locations: ["dubai", "abuDhabi"]
  },
  services: {
    related: ["legalTranslation", "goldenVisa", "attestation", "corporateTranslation"],
    crossSilo: ["birthCertificate", "marriageCertificate", "degree", "poa"]
  },
  locations: {
    related: ["dubai", "abuDhabi", "sharjah"],
    crossSilo: ["legalTranslation", "goldenVisa", "attestation"]
  },
  industries: {
    related: ["healthcareIndustry", "realEstateIndustry", "legalIndustry", "ecommerceIndustry"],
    crossSilo: ["legalTranslation", "corporateTranslation", "contracts"]
  },
  resources: {
    related: ["pricingGuide", "attestationGuide", "documentChecklist", "faq", "caseStudies"],
    crossSilo: ["goldenVisa", "attestation", "legalTranslation"]
  },
  specialized: {
    related: ["medical", "technical", "financial", "hospitality", "digital"],
    crossSilo: ["corporateTranslation", "legalTranslation", "healthcareIndustry"]
  },
  dubai: {
    related: ["palmJumeirah", "difc", "jlt", "businessBay", "marina"],
    family: ["abuDhabi", "sharjah"],
    crossSilo: ["legalTranslation", "goldenVisa", "attestation"]
  },
  downtown: {
    related: ["businessBay", "difc", "dubai"],
    family: ["palmJumeirah", "jlt", "marina"],
    crossSilo: ["goldenVisa", "realEstateIndustry", "legalTranslation"]
  },

  // ========================================
  // HUB PAGES
  // ========================================
  servicesHub: {
    related: ["legalTranslation", "goldenVisa", "attestation", "corporateTranslation"],
    crossSilo: ["birthCertificate", "marriageCertificate", "degree", "pcc", "poa", "contracts"]
  },
  locationsHub: {
    related: ["dubai", "abuDhabi", "sharjah", "palmJumeirah", "difc", "jlt"],
    crossSilo: ["legalTranslation", "goldenVisa", "attestation", "birthCertificate", "marriageCertificate"]
  },
  personalDocuments: {
    related: ["birthCertificate", "marriageCertificate", "deathCertificate", "degree", "pcc"],
    crossSilo: ["legalTranslation", "attestation", "goldenVisa", "dubai", "abuDhabi"]
  },

  // ========================================
  // E-E-A-T TRUST PAGES
  // ========================================
  about: {
    related: ["translator", "credentials", "reviews", "caseStudies"],
    crossSilo: ["legalTranslation", "goldenVisa", "attestation"]
  },
  translator: {
    related: ["credentials", "reviews", "legalTranslation"],
    family: ["credentials", "reviews", "caseStudies"],
    crossSilo: ["legalTranslation", "attestation", "goldenVisa"]
  },
  credentials: {
    related: ["translator", "reviews", "attestation", "mofaAttestation"],
    family: ["translator", "reviews", "caseStudies"],
    crossSilo: ["legalTranslation", "goldenVisa"]
  },
  reviews: {
    related: ["translator", "credentials", "caseStudies", "goldenVisa"],
    family: ["translator", "credentials", "caseStudies"],
    crossSilo: ["legalTranslation", "birthCertificate", "marriageCertificate"]
  },
  caseStudies: {
    related: ["reviews", "credentials", "translator", "goldenVisa"],
    family: ["translator", "credentials", "reviews"],
    crossSilo: ["legalTranslation", "immigration", "dhaDataflow", "attestation"]
  },
  sharjahTenancy: {
    related: ["lease", "sharjah", "attestation", "mofaAttestation"],
    family: ["sharjah"],
    prerequisites: ["lease"],
    nextSteps: ["mofaAttestation", "embassyAttestation"],
    crossSilo: ["legalTranslation", "realEstateIndustry"],
    locations: ["sharjah", "dubai"]
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate an HTML link from a service key
 */
export const makeLink = (key: string, useFullText = false): string => {
  const link = serviceLinks[key];
  if (!link) return '';
  const text = useFullText ? link.full : link.text;
  return `<a href="${link.url}">${text}</a>`;
};

/**
 * Get a ServiceLink by key
 */
export const getLink = (key: string): ServiceLink | undefined => {
  return serviceLinks[key];
};

/**
 * Get related services for a page
 */
export const getRelatedServices = (key: string, limit = 4): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships) return [];
  
  return relationships.related
    .slice(0, limit)
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get all family documents (same category)
 */
export const getFamilyDocuments = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.family) return [];
  
  return relationships.family
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get prerequisite documents
 */
export const getPrerequisites = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.prerequisites) return [];
  
  return relationships.prerequisites
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get next steps/follow-up services
 */
export const getNextSteps = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.nextSteps) return [];
  
  return relationships.nextSteps
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get cross-silo links
 */
export const getCrossLinks = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.crossSilo) return [];
  
  return relationships.crossSilo
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get location-specific pages
 */
export const getLocationPages = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.locations) return [];

  return relationships.locations
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get resource/guide links for a page
 */
export const getResourceLinks = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.resources) return [];

  return relationships.resources
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get E-E-A-T trust signal links
 */
export const getTrustLinks = (key: string): ServiceLink[] => {
  const relationships = pageRelationships[key];
  if (!relationships?.trust) return [];

  return relationships.trust
    .map(k => serviceLinks[k])
    .filter(Boolean);
};

/**
 * Get all links for a page (comprehensive)
 */
export const getAllLinksForPage = (key: string): {
  related: ServiceLink[];
  family: ServiceLink[];
  prerequisites: ServiceLink[];
  nextSteps: ServiceLink[];
  crossSilo: ServiceLink[];
  locations: ServiceLink[];
  resources: ServiceLink[];
  trust: ServiceLink[];
} => {
  return {
    related: getRelatedServices(key),
    family: getFamilyDocuments(key),
    prerequisites: getPrerequisites(key),
    nextSteps: getNextSteps(key),
    crossSilo: getCrossLinks(key),
    locations: getLocationPages(key),
    resources: getResourceLinks(key),
    trust: getTrustLinks(key)
  };
};

// ============================================
// FOOTER EXPORTS (Backwards Compatibility)
// ============================================

export const footerServices = [
  { url: serviceLinks.legalTranslation.url, text: "Legal Translation" },
  { url: serviceLinks.goldenVisa.url, text: "Golden Visa Translation" },
  { url: serviceLinks.attestation.url, text: "Attestation & MOFAIC" },
  { url: serviceLinks.corporateTranslation.url, text: "Corporate Translation" },
  { url: serviceLinks.certificateTranslation.url, text: "Certificate Translation" }
];

export const relatedServices = {
  personal: [
    serviceLinks.birthCertificate,
    serviceLinks.marriageCertificate,
    serviceLinks.divorceCertificate,
    serviceLinks.deathCertificate,
    serviceLinks.degree,
    serviceLinks.transcripts,
    serviceLinks.pcc,
    serviceLinks.drivingLicense,
    serviceLinks.bankStatement
  ],
  legal: [
    serviceLinks.legalTranslation,
    serviceLinks.poa,
    serviceLinks.moa,
    serviceLinks.nda
  ],
  corporate: [
    serviceLinks.corporateTranslation,
    serviceLinks.moa,
    serviceLinks.poa,
    serviceLinks.nda
  ],
  immigration: [
    serviceLinks.goldenVisa,
    serviceLinks.pcc,
    serviceLinks.birthCertificate,
    serviceLinks.marriageCertificate,
    serviceLinks.degree
  ]
};
