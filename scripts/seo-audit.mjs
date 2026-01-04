import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function auditPages() {
  const pagesDir = 'src/pages';
  const files = await glob(`${pagesDir}/**/*.astro`);
  
  const results = {
    longTitles: [],
    thinContent: [],
    allPages: []
  };
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relativePath = file.replace(pagesDir, '');
    
    // Extract title from various patterns
    let title = '';
    
    // Pattern 1: title="..." attribute
    const titleAttrMatch = content.match(/title=["']([^"']+)["']/);
    if (titleAttrMatch) {
      title = titleAttrMatch[1];
    }
    
    // Pattern 2: title={pageTitle} with const pageTitle = "..."
    if (!title || title.includes('{')) {
      const pageTitleMatch = content.match(/(?:const|let)\s+pageTitle\s*=\s*["'`]([^"'`]+)["'`]/);
      if (pageTitleMatch) {
        title = pageTitleMatch[1];
      }
    }
    
    // Pattern 3: title={`${variable} | OnlineTranslation.ae`}
    const templateMatch = content.match(/title=\{`\$\{(\w+)\}[^`]*`\}/);
    if (templateMatch) {
      const varName = templateMatch[1];
      const varMatch = content.match(new RegExp(`(?:const|let)\\s+${varName}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`));
      if (varMatch) {
        title = varMatch[1] + ' | OnlineTranslation.ae';
      }
    }
    
    // Count words in page content (excluding frontmatter and tags)
    const contentOnly = content
      .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
      .replace(/<script[\s\S]*?<\/script>/gi, '') // Remove scripts
      .replace(/<style[\s\S]*?<\/style>/gi, '') // Remove styles
      .replace(/<[^>]+>/g, ' ') // Remove HTML tags
      .replace(/\{[^}]+\}/g, ' ') // Remove template expressions
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    const wordCount = contentOnly.split(/\s+/).filter(w => w.length > 2).length;
    
    const pageData = {
      file: relativePath,
      title: title || '(no title found)',
      titleLength: title.length,
      wordCount
    };
    
    results.allPages.push(pageData);
    
    // Flag issues
    if (title && title.length > 60) {
      results.longTitles.push(pageData);
    }
    
    // Flag thin content (exclude utility pages)
    const isUtilityPage = /\/(404|offline|thank-you|privacy|terms|contact)/.test(relativePath);
    if (!isUtilityPage && wordCount < 2000 && wordCount > 50) {
      results.thinContent.push(pageData);
    }
  }
  
  // Sort results
  results.longTitles.sort((a, b) => b.titleLength - a.titleLength);
  results.thinContent.sort((a, b) => a.wordCount - b.wordCount);
  
  // Output results
  console.log('\n=== TITLE TAG AUDIT ===');
  console.log(`Found ${results.longTitles.length} titles over 60 characters:\n`);
  for (const p of results.longTitles) {
    console.log(`[${p.titleLength} chars] ${p.file}`);
    console.log(`  Current: "${p.title}"`);
    console.log('');
  }
  
  console.log('\n=== CONTENT DEPTH AUDIT ===');
  console.log(`Found ${results.thinContent.length} pages under 2,000 words:\n`);
  for (const p of results.thinContent.slice(0, 30)) {
    console.log(`[${p.wordCount} words] ${p.file}`);
  }
  
  // Write full report
  fs.writeFileSync('seo-audit-report.json', JSON.stringify(results, null, 2));
  console.log('\n\nFull report saved to seo-audit-report.json');
}

auditPages().catch(console.error);
