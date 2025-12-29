/**
 * Micro-Cues JavaScript
 * Handles scroll indicator, reading progress, and reveal animations
 * 
 * Features:
 * - Scroll indicator auto-hide after scroll or timeout
 * - Click-to-scroll functionality
 * - Reading progress bar for long pages
 * - IntersectionObserver for reveal animations
 * 
 * All animations respect prefers-reduced-motion
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // 1. SCROLL INDICATOR
  // ============================================
  
  function initScrollIndicator() {
    const indicator = document.querySelector('.hero-scroll-indicator');
    if (!indicator) return;

    let hasScrolled = false;
    let hideTimeout = null;

    // Hide after scroll
    function hideOnScroll() {
      if (hasScrolled) return;
      
      if (window.scrollY > 50) {
        hasScrolled = true;
        indicator.classList.add('is-hidden');
        
        // Clean up will-change after animation
        setTimeout(() => {
          indicator.classList.add('animation-complete');
        }, 500);
        
        // Remove scroll listener once hidden
        window.removeEventListener('scroll', scrollHandler);
      }
    }

    // Throttled scroll handler
    let ticking = false;
    function scrollHandler() {
      if (!ticking) {
        requestAnimationFrame(() => {
          hideOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    // Auto-hide after timeout (5 seconds) if user hasn't scrolled
    function startAutoHideTimer() {
      hideTimeout = setTimeout(() => {
        if (!hasScrolled && window.scrollY < 50) {
          indicator.classList.add('is-hidden');
          hasScrolled = true;
        }
      }, 5000);
    }

    // Click to scroll to next section
    function handleClick(e) {
      e.preventDefault();
      
      // Find the next section after hero
      const hero = indicator.closest('.section--hero, .hero-section, section');
      const nextSection = hero ? hero.nextElementSibling : null;
      
      if (nextSection) {
        // Smooth scroll to next section
        const headerHeight = document.querySelector('.site-header, #header')?.offsetHeight || 70;
        const targetPosition = nextSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      } else {
        // Fallback: scroll down by viewport height
        window.scrollTo({
          top: window.innerHeight * 0.85,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }

      // Hide indicator after click
      indicator.classList.add('is-hidden');
      hasScrolled = true;
    }

    // Keyboard accessibility
    function handleKeydown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e);
      }
    }

    // Initialize
    window.addEventListener('scroll', scrollHandler, { passive: true });
    indicator.addEventListener('click', handleClick);
    indicator.addEventListener('keydown', handleKeydown);
    
    // Make focusable
    if (!indicator.hasAttribute('tabindex')) {
      indicator.setAttribute('tabindex', '0');
      indicator.setAttribute('role', 'button');
      indicator.setAttribute('aria-label', 'Scroll to content');
    }

    // Start auto-hide timer
    if (!prefersReducedMotion) {
      startAutoHideTimer();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    });
  }

  // ============================================
  // 2. READING PROGRESS BAR
  // ============================================
  
  function initReadingProgress() {
    // Don't show on homepage or short pages
    if (document.body.classList.contains('homepage') || 
        document.body.classList.contains('is-homepage') ||
        document.body.classList.contains('short-page')) {
      return;
    }

    // Check if page is long enough (more than 2x viewport)
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    
    if (pageHeight < viewportHeight * 2) {
      document.body.classList.add('short-page');
      return;
    }

    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'reading-progress';
      progressBar.setAttribute('role', 'progressbar');
      progressBar.setAttribute('aria-label', 'Reading progress');
      progressBar.setAttribute('aria-valuemin', '0');
      progressBar.setAttribute('aria-valuemax', '100');
      document.body.prepend(progressBar);
    }

    // Update progress on scroll
    let ticking = false;
    
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progress));
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial update
    updateProgress();
  }

  // ============================================
  // 3. REVEAL ON SCROLL (IntersectionObserver)
  // ============================================
  
  function initRevealOnScroll() {
    // Skip if reduced motion preferred
    if (prefersReducedMotion) {
      // Make all elements visible immediately
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before fully in view
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Stop observing once revealed
          observer.unobserve(entry.target);
          
          // Clean up will-change after animation
          setTimeout(() => {
            entry.target.classList.add('animation-complete');
          }, 700);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // 4. SECTION DIVIDER ANIMATION PAUSE
  // Pause divider animation when not in viewport
  // ============================================
  
  function initDividerOptimization() {
    if (prefersReducedMotion) return;

    const dividers = document.querySelectorAll('.section-divider');
    if (dividers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    }, { threshold: 0 });

    dividers.forEach(divider => {
      // Start paused
      divider.style.animationPlayState = 'paused';
      observer.observe(divider);
    });
  }

  // ============================================
  // 5. WHATSAPP BUTTON - Stop animation on interaction
  // ============================================
  
  function initWhatsAppButton() {
    const waButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    waButtons.forEach(btn => {
      // Stop breathing animation after first interaction
      btn.addEventListener('mouseenter', () => {
        btn.style.animation = 'none';
      }, { once: true });
      
      btn.addEventListener('focus', () => {
        btn.style.animation = 'none';
      }, { once: true });
    });
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  
  function init() {
    // Wait for DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    initScrollIndicator();
    initReadingProgress();
    initRevealOnScroll();
    initDividerOptimization();
    initWhatsAppButton();
    
    console.log('[Micro-Cues] Initialized', {
      reducedMotion: prefersReducedMotion,
      scrollIndicator: !!document.querySelector('.hero-scroll-indicator'),
      readingProgress: !!document.querySelector('.reading-progress')
    });
  }

  // Start
  init();

})();
