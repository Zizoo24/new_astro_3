/**
 * Schema.org Utilities
 * Type-safe structured data generation for SEO
 * 
 * Based on schema-dts types but simplified for practical use.
 * These helpers generate valid JSON-LD for Google Rich Results.
 */

import { siteConfig } from '../config/site';

// Base types
type SchemaType = 
  | 'Organization'
  | 'LocalBusiness'
  | 'WebSite'
  | 'WebPage'
  | 'Service'
  | 'Article'
  | 'FAQPage'
  | 'BreadcrumbList'
  | 'HowTo'
  | 'Product'
  | 'Review'
  | 'AggregateRating';

interface BaseSchema {
  '@context': 'https://schema.org';
  '@type': SchemaType;
  '@id'?: string;
}

// Organization Schema
export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization' | 'LocalBusiness';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressCountry: string;
  };
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHours?: string;
  priceRange?: string;
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    ratingCount: number;
  };
}

// Service Schema
export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  description: string;
  provider: { '@id': string } | OrganizationSchema;
  areaServed?: Array<{ '@type': string; name: string }>;
  serviceType?: string | string[];
  offers?: {
    '@type': 'Offer';
    price: number;
    priceCurrency: string;
    priceValidUntil?: string;
    availability?: string;
    url?: string;
  };
}

// FAQ Schema
export interface FAQSchema extends BaseSchema {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

// Breadcrumb Schema
export interface BreadcrumbSchema extends BaseSchema {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

// HowTo Schema
export interface HowToSchema extends BaseSchema {
  '@type': 'HowTo';
  name: string;
  description?: string;
  step: Array<{
    '@type': 'HowToStep';
    position: number;
    name: string;
    text: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    '@type': 'MonetaryAmount';
    currency: string;
    value: string | number;
  };
}

// Article Schema
export interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
    url?: string;
  };
  publisher: { '@id': string } | OrganizationSchema;
  mainEntityOfPage?: string;
}

/**
 * Generate Organization schema (singleton for site)
 */
export function generateOrganizationSchema(siteUrl: string): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.business.legalName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo/brand/emblem-256.png`,
    description: 'MOJ-certified legal translation services in Dubai',
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.locality,
      addressCountry: siteConfig.business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHours: siteConfig.business.openingHours,
    priceRange: siteConfig.business.priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5.0,
      ratingCount: 15,
    },
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(options: {
  name: string;
  description: string;
  siteUrl: string;
  pageUrl: string;
  serviceType?: string;
  price?: number;
}): ServiceSchema {
  const { name, description, siteUrl, pageUrl, serviceType = 'Legal Translation', price = 150 } = options;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({ '@type': area.type, name: area.name })),
    serviceType: [serviceType, 'Legal Translation'],
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'AED',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
  };
}

/**
 * Generate FAQ schema from Q&A array
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQSchema | null {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
  siteUrl: string,
  currentPath: string
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url 
        ? (item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`)
        : `${siteUrl}${currentPath}`,
    })),
  };
}

/**
 * Generate HowTo schema from steps
 */
export function generateHowToSchema(options: {
  name: string;
  description?: string;
  steps: Array<{ title: string; text: string }>;
  totalTime?: string;
  estimatedCost?: number;
}): HowToSchema | null {
  const { name, description, steps, totalTime = 'PT24H', estimatedCost = 150 } = options;
  
  if (!steps || steps.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
    totalTime,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'AED',
      value: estimatedCost,
    },
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(options: {
  headline: string;
  description: string;
  siteUrl: string;
  pageUrl: string;
  image?: string;
  datePublished: Date;
  dateModified?: Date;
  authorName?: string;
}): ArticleSchema {
  const { 
    headline, 
    description, 
    siteUrl, 
    pageUrl, 
    image,
    datePublished, 
    dateModified,
    authorName = siteConfig.name 
  } = options;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified?.toISOString(),
    author: {
      '@type': 'Organization',
      name: authorName,
      url: siteUrl,
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    mainEntityOfPage: pageUrl,
  };
}

/**
 * Serialize schema to JSON-LD string
 * Removes undefined values for cleaner output
 */
export function serializeSchema(schema: Record<string, unknown>): string {
  return JSON.stringify(schema, (_, value) => {
    if (value === undefined) return undefined;
    return value;
  });
}

/**
 * Combine multiple schemas into a graph
 * Use this when you need to include multiple related schemas on one page
 */
export function createSchemaGraph(...schemas: Array<Record<string, unknown> | null>): string {
  const validSchemas = schemas.filter(Boolean) as Record<string, unknown>[];
  
  if (validSchemas.length === 0) return '';
  if (validSchemas.length === 1) return serializeSchema(validSchemas[0]);
  
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': validSchemas.map(schema => {
      // Remove @context from individual schemas when in graph
      const schemaWithoutContext = { ...schema };
      delete schemaWithoutContext['@context'];
      return schemaWithoutContext;
    }),
  });
}
