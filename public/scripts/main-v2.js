/**
 * Main JavaScript for OnlineTranslation.ae
 * Handles core UI interactions (theme toggle is now inline in Header.astro)
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log('[OT] main-v2.js initialized');

  const body = document.body;

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (!href || href === '#') {
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // Form Enhancement (if forms exist)
  // ========================================
  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Add loading state on submit
    form.addEventListener('submit', function() {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn && !submitBtn.disabled) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }
    });
  });

  // ========================================
  // Image Lazy Loading Fallback
  // ========================================
  
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    console.log('[OT] Native lazy loading supported for ' + images.length + ' images');
  } else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }

  // ========================================
  // External Link Handling
  // ========================================
  
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    // Ensure external links have proper security attributes
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ========================================
  // Print Styles Trigger
  // ========================================
  
  window.addEventListener('beforeprint', function() {
    console.log('[OT] Preparing page for printing');
    // Force light theme for printing
    body.classList.add('printing');
  });

  window.addEventListener('afterprint', function() {
    console.log('[OT] Print completed');
    body.classList.remove('printing');
  });

  // ========================================
  // Accessibility: Focus Visible
  // ========================================
  
  // Add focus-visible class for keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      body.classList.add('user-is-tabbing');
    }
  });

  document.addEventListener('mousedown', function() {
    body.classList.remove('user-is-tabbing');
  });

  console.log('[OT] main-v2.js fully loaded and ready');
});
