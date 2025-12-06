export const serviceLinks = {
  legalTranslation: {
    url: "/services/legal-translation/",
    text: "legal translation",
    full: "legal translation services"
  },
  certificateTranslation: {
    url: "/services/certificate-translation/",
    text: "certificate translation",
    full: "certificate translation services"
  },
  corporateTranslation: {
    url: "/services/corporate-translation/",
    text: "corporate translation",
    full: "corporate translation services"
  },
  goldenVisa: {
    url: "/services/golden-visa-translation/",
    text: "Golden Visa translation",
    full: "Golden Visa document translation"
  },
  attestation: {
    url: "/services/attestation/",
    text: "attestation",
    full: "attestation and MOFAIC services"
  },
  birthCertificate: {
    url: "/personal/vital-records/birth/",
    text: "birth certificate translation",
    full: "birth certificate translation services"
  },
  marriageCertificate: {
    url: "/personal/vital-records/marriage/",
    text: "marriage certificate translation",
    full: "marriage certificate translation services"
  },
  divorceCertificate: {
    url: "/personal/vital-records/divorce/",
    text: "divorce certificate translation",
    full: "divorce certificate translation services"
  },
  deathCertificate: {
    url: "/personal/vital-records/death/",
    text: "death certificate translation",
    full: "death certificate translation services"
  },
  degree: {
    url: "/personal/education/degree/",
    text: "degree translation",
    full: "degree certificate translation"
  },
  transcripts: {
    url: "/personal/academic/transcripts/",
    text: "transcript translation",
    full: "academic transcript translation"
  },
  pcc: {
    url: "/personal/immigration/pcc/",
    text: "police clearance translation",
    full: "police clearance certificate (PCC) translation"
  },
  drivingLicense: {
    url: "/personal/immigration/license/",
    text: "driving license translation",
    full: "driving license translation services"
  },
  bankStatement: {
    url: "/personal/immigration/bank/",
    text: "bank statement translation",
    full: "bank statement translation services"
  },
  poa: {
    url: "/legal/corporate/poa/",
    text: "Power of Attorney translation",
    full: "Power of Attorney (POA) translation"
  },
  moa: {
    url: "/legal/corporate/moa/",
    text: "Memorandum of Association translation",
    full: "Memorandum of Association (MOA) translation"
  },
  nda: {
    url: "/legal/contracts/nda/",
    text: "NDA translation",
    full: "Non-Disclosure Agreement translation"
  },
  palmJumeirah: {
    url: "/locations/dubai/palm-jumeirah/",
    text: "Palm Jumeirah",
    full: "legal translation in Palm Jumeirah"
  },
  difc: {
    url: "/locations/dubai/difc/",
    text: "DIFC",
    full: "legal translation in DIFC"
  },
  jlt: {
    url: "/locations/dubai/jlt/",
    text: "JLT",
    full: "legal translation in JLT"
  },
  businessBay: {
    url: "/locations/dubai/business-bay/",
    text: "Business Bay",
    full: "legal translation in Business Bay"
  },
  abuDhabi: {
    url: "/locations/abu-dhabi/",
    text: "Abu Dhabi",
    full: "legal translation in Abu Dhabi"
  },
  sharjah: {
    url: "/locations/sharjah/",
    text: "Sharjah",
    full: "legal translation in Sharjah"
  }
};

export const makeLink = (key: keyof typeof serviceLinks, useFullText = false): string => {
  const link = serviceLinks[key];
  const text = useFullText ? link.full : link.text;
  return `<a href="${link.url}">${text}</a>`;
};

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
