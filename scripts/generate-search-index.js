/**
 * Dynamic Search Index Generator
 *
 * Generates search-index.js from content collections at build time.
 * Replaces the static manually-maintained search index.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'src', 'content');
const outputPath = path.join(rootDir, 'public', 'scripts', 'search-index.js');

// Simple frontmatter parser (avoids adding gray-matter dependency)
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentValue = '';
  let inMultiline = false;

  for (const line of lines) {
    // Handle simple key: value pairs
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch && !inMultiline) {
      if (currentKey) {
        frontmatter[currentKey] = stripQuotes(currentValue.trim());
      }
      currentKey = keyMatch[1];
      currentValue = keyMatch[2];

      // Check for multiline string start
      if (currentValue === '|' || currentValue === '>') {
        inMultiline = true;
        currentValue = '';
      }
    } else if (inMultiline && line.startsWith('  ')) {
      currentValue += line.trim() + ' ';
    } else if (inMultiline && !line.startsWith('  ') && line.trim()) {
      // End of multiline
      frontmatter[currentKey] = stripQuotes(currentValue.trim());
      inMultiline = false;

      const newKeyMatch = line.match(/^(\w+):\s*(.*)$/);
      if (newKeyMatch) {
        currentKey = newKeyMatch[1];
        currentValue = newKeyMatch[2];
      }
    }
  }

  if (currentKey) {
    frontmatter[currentKey] = stripQuotes(currentValue.trim());
  }

  return frontmatter;
}

// Remove surrounding quotes from a value
function stripQuotes(value) {
  if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

// Read all markdown files from a collection
function readCollection(collectionName) {
  const collectionPath = path.join(contentDir, collectionName);
  if (!fs.existsSync(collectionPath)) return [];

  const entries = [];
  const files = fs.readdirSync(collectionPath).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(collectionPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    const slug = file.replace('.md', '');

    entries.push({ slug, ...frontmatter });
  }

  return entries;
}

// Generate keywords from title and description
function generateKeywords(title, description = '') {
  const text = `${title} ${description}`.toLowerCase();
  // Extract meaningful words (3+ chars, no common words)
  const stopWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'with', 'they', 'been', 'have', 'this', 'will', 'your', 'from', 'that', 'what', 'their', 'which', 'about', 'into', 'more', 'other', 'than', 'then', 'these', 'some', 'them', 'only', 'come', 'over', 'such', 'also', 'back', 'after', 'most', 'just'];
  const words = text.match(/\b[a-z]{3,}\b/g) || [];
  return words.filter(w => !stopWords.includes(w)).slice(0, 15).join(' ');
}

// Category mappings for nicer display
const categoryLabels = {
  blog: 'Blog',
  services: 'Services',
  industries: 'Industries',
  locations: 'Locations',
  specialized: 'Specialized',
};

// Build the search index
function buildSearchIndex() {
  const searchIndex = [];

  // Blog posts
  const blogPosts = readCollection('blog');
  for (const post of blogPosts) {
    if (post.draft === 'true') continue;
    searchIndex.push({
      title: post.title || 'Untitled',
      url: `/blog/${post.slug}/`,
      category: 'Blog',
      keywords: generateKeywords(post.title, post.description),
    });
  }

  // Services
  const services = readCollection('services');
  for (const service of services) {
    searchIndex.push({
      title: service.title || 'Untitled',
      url: `/services/${service.slug}/`,
      category: 'Services',
      keywords: generateKeywords(service.title, service.description || service.metaDescription),
    });
  }

  // Industries
  const industries = readCollection('industries');
  for (const industry of industries) {
    searchIndex.push({
      title: industry.title || 'Untitled',
      url: `/industries/${industry.slug}/`,
      category: 'Industries',
      keywords: generateKeywords(industry.title, industry.description || industry.metaDescription),
    });
  }

  // Locations
  const locations = readCollection('locations');
  for (const location of locations) {
    searchIndex.push({
      title: location.title || 'Untitled',
      url: `/locations/${location.slug}/`,
      category: 'Locations',
      keywords: generateKeywords(location.title, location.description || location.metaDescription),
    });
  }

  // Specialized
  const specialized = readCollection('specialized');
  for (const spec of specialized) {
    searchIndex.push({
      title: spec.title || 'Untitled',
      url: `/specialized/${spec.slug}/`,
      category: 'Specialized',
      keywords: generateKeywords(spec.title, spec.description || spec.metaDescription),
    });
  }

  // Static pages (not in collections but important for search)
  const staticPages = [
    { title: 'Legal Translation Dubai', url: '/legal-translation-dubai/', category: 'Legal', keywords: 'legal translation dubai moj certified court documents contracts corporate official' },
    { title: 'Personal Documents Hub', url: '/personal-documents/', category: 'Personal Documents', keywords: 'personal documents certificates vital records immigration academic expat' },
    { title: 'Vital Records', url: '/personal/vital-records/', category: 'Personal Documents', keywords: 'vital records birth marriage death divorce certificates civil status' },
    { title: 'Birth Certificate Translation', url: '/personal/vital-records/birth/', category: 'Personal Documents', keywords: 'birth certificate translation gdrfa sponsor child golden visa icp mofa newborn' },
    { title: 'Marriage Certificate Translation', url: '/personal/vital-records/marriage/', category: 'Personal Documents', keywords: 'marriage certificate translation spouse visa gdrfa sponsorship wedding' },
    { title: 'Divorce Certificate Translation', url: '/personal/vital-records/divorce/', category: 'Personal Documents', keywords: 'divorce certificate decree translation court family law separation' },
    { title: 'Death Certificate Translation', url: '/personal/vital-records/death/', category: 'Personal Documents', keywords: 'death certificate translation estate inheritance probate succession' },
    { title: 'Immigration Documents', url: '/personal/immigration/', category: 'Personal Documents', keywords: 'immigration documents visa residence permit sponsorship gdrfa icp' },
    { title: 'Police Clearance Certificate (PCC)', url: '/personal/immigration/pcc/', category: 'Personal Documents', keywords: 'police clearance pcc good conduct certificate fbi acro translation visa background' },
    { title: 'Bank Statement Translation', url: '/personal/immigration/bank/', category: 'Personal Documents', keywords: 'bank statement translation golden visa 6 months financial proof income' },
    { title: 'Driving License Translation', url: '/personal/immigration/license/', category: 'Personal Documents', keywords: 'driving license translation rta conversion dubai uae exchange' },
    { title: 'Academic Documents', url: '/personal/academic/', category: 'Personal Documents', keywords: 'academic documents degree diploma transcript equivalency education' },
    { title: 'University Degree Translation', url: '/personal/academic/degree/', category: 'Personal Documents', keywords: 'degree diploma university translation attestation equivalency golden visa bachelor master' },
    { title: 'Transcript Translation', url: '/personal/academic/transcripts/', category: 'Personal Documents', keywords: 'transcript academic record grades university college translation gpa' },
    { title: 'Contract Translation', url: '/legal/contracts/', category: 'Legal', keywords: 'contracts agreements legal binding nda employment lease commercial' },
    { title: 'NDA Translation', url: '/legal/contracts/nda/', category: 'Legal', keywords: 'nda non disclosure agreement translation confidentiality ip intellectual property' },
    { title: 'Corporate Documents', url: '/legal/corporate/', category: 'Legal', keywords: 'corporate documents company formation moa poa trade license resolution' },
    { title: 'MOA Translation', url: '/legal/corporate/moa/', category: 'Legal', keywords: 'moa memorandum association translation company formation freezone mainland' },
    { title: 'Power of Attorney Translation', url: '/legal/corporate/poa/', category: 'Legal', keywords: 'power of attorney poa translation general special dld property representative' },
    { title: 'Court Documents', url: '/legal/litigation/', category: 'Legal', keywords: 'litigation court documents legal proceedings claims judgments dubai courts' },
    { title: 'Attestation Services', url: '/services/attestation/', category: 'Attestation', keywords: 'attestation mofa ministry foreign affairs legalization apostille embassy' },
    { title: 'Golden Visa Translation', url: '/services/golden-visa-translation/', category: 'Services', keywords: 'golden visa uae residence permit investor entrepreneur specialist talent documents package' },
    { title: 'Certificate Translation', url: '/services/certificate-translation/', category: 'Services', keywords: 'certificate birth marriage death degree diploma academic educational' },
    { title: 'Corporate Translation', url: '/services/corporate-translation/', category: 'Services', keywords: 'corporate business company trade license memorandum articles association' },
    { title: 'Legal Translation Services', url: '/services/legal-translation/', category: 'Legal', keywords: 'legal translation moj certified court documents contracts agreements powers of attorney' },
    { title: 'Resources Hub', url: '/resources/', category: 'Resources', keywords: 'resources guides checklists help information' },
    { title: 'Pricing Guide', url: '/resources/pricing-guide/', category: 'Resources', keywords: 'pricing price cost rates fees quote estimate' },
    { title: 'FAQ', url: '/resources/faq/', category: 'Resources', keywords: 'faq questions answers help support common' },
    { title: 'Golden Visa Checklist 2025', url: '/resources/golden-visa-checklist/', category: 'Resources', keywords: 'golden visa checklist 2025 investor entrepreneur specialist documents required' },
    { title: 'Attestation Guide 2025', url: '/resources/attestation-guide/', category: 'Resources', keywords: 'attestation guide mofa hague apostille legalization chain process' },
    { title: 'Document Checklist', url: '/resources/document-checklist/', category: 'Resources', keywords: 'documents checklist requirements prepare list' },
    { title: 'Contact Us', url: '/contact/', category: 'Contact', keywords: 'contact whatsapp email phone call quote request' },
    { title: 'About Us', url: '/about/', category: 'About', keywords: 'about company team moj certified translators licensed' },
    { title: 'Privacy Policy', url: '/privacy/', category: 'Legal', keywords: 'privacy policy data protection gdpr personal information' },
    { title: 'Terms of Service', url: '/terms/', category: 'Legal', keywords: 'terms service conditions agreement legal' },
    { title: 'All Locations', url: '/locations/', category: 'Locations', keywords: 'locations dubai abu dhabi sharjah uae emirates service areas' },
    { title: 'Dubai', url: '/locations/dubai/', category: 'Locations', keywords: 'dubai translation services all areas legal certified moj' },
    { title: 'Palm Jumeirah', url: '/locations/dubai/palm-jumeirah/', category: 'Locations', keywords: 'palm jumeirah dubai translation service hnw high net worth luxury' },
    { title: 'JLT - Jumeirah Lake Towers', url: '/locations/dubai/jlt/', category: 'Locations', keywords: 'jlt jumeirah lake towers free zone dmcc translation business' },
    { title: 'DIFC', url: '/locations/dubai/difc/', category: 'Locations', keywords: 'difc dubai international financial centre legal translation courts' },
    { title: 'Downtown Dubai', url: '/locations/dubai/downtown/', category: 'Locations', keywords: 'downtown dubai burj khalifa mall translation central' },
    { title: 'Dubai Marina', url: '/locations/dubai/marina/', category: 'Locations', keywords: 'dubai marina jbr translation waterfront residential' },
    { title: 'Abu Dhabi', url: '/locations/abu-dhabi/', category: 'Locations', keywords: 'abu dhabi capital uae translation adgm government' },
    { title: 'Sharjah', url: '/locations/sharjah/', category: 'Locations', keywords: 'sharjah emirate translation services saif zone' },
  ];

  // Add static pages, avoiding duplicates
  const existingUrls = new Set(searchIndex.map(item => item.url));
  for (const page of staticPages) {
    if (!existingUrls.has(page.url)) {
      searchIndex.push(page);
    }
  }

  return searchIndex;
}

// Generate the output JavaScript file
function generateOutput(searchIndex) {
  const searchFunctions = `
function performSearch(query) {
    if (!query || query.length < 2) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 1);

    const results = searchIndex.map(item => {
        let score = 0;

        searchTerms.forEach(term => {
            const titleLower = item.title.toLowerCase();
            const categoryLower = item.category.toLowerCase();

            if (titleLower === term) score += 20;
            else if (titleLower.includes(term)) score += 10;

            if (categoryLower.includes(term)) score += 5;
            if (item.keywords.includes(term)) score += 3;
        });

        return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    return results;
}

function displaySearchResults(results, container) {
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found. Try different keywords or browse our quick links above.</p>';
        return;
    }

    const html = results.map(item => \`
        <a href="\${item.url}" class="search-result-item">
            <span class="result-category">\${item.category}</span>
            <span class="result-title">\${item.title}</span>
        </a>
    \`).join('');

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    let resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer && searchInput) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        searchInput.parentNode.after(resultsContainer);
    }

    function doSearch() {
        const query = searchInput ? searchInput.value : '';
        const results = performSearch(query);
        displaySearchResults(results, resultsContainer);
    }

    if (searchInput) {
        searchInput.addEventListener('input', doSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSearch();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            doSearch();
        });
    }
});
`;

  const output = `// Auto-generated search index - DO NOT EDIT MANUALLY
// Generated at: ${new Date().toISOString()}
// Run 'npm run search:generate' to regenerate

const searchIndex = ${JSON.stringify(searchIndex, null, 4)};
${searchFunctions}`;

  return output;
}

// Main execution
console.log('Generating search index from content collections...');

const searchIndex = buildSearchIndex();
const output = generateOutput(searchIndex);

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, output);

console.log(`Search index generated with ${searchIndex.length} entries`);
console.log(`Output: ${outputPath}`);
