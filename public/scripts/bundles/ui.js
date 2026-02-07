/* === navigation-v2.js === */
(function(){
/**
 * Navigation JavaScript for OnlineTranslation.ae
 * Handles mobile menu, sidebar, and navigation interactions
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log('[OT] navigation-v2.js initialized');

  // ========================================
  // Mobile Sidebar Elements
  // ========================================
  
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const menuSidebar = document.getElementById('menu-sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');

  /**
   * Open the mobile sidebar
   */
  function openSidebar() {
    if (menuSidebar) menuSidebar.classList.add('is-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    console.log('[OT] Sidebar opened');
  }

  /**
   * Close the mobile sidebar
   */
  function closeSidebar() {
    if (menuSidebar) menuSidebar.classList.remove('is-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    console.log('[OT] Sidebar closed');
  }

  // Connect desktop header mobile menu button to sidebar
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      openSidebar();
    });
  }

  // Connect mobile header sidebar toggle button
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      openSidebar();
    });
  }

  // Close sidebar when clicking the close button
  if (sidebarClose) {
    sidebarClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  // Close sidebar when clicking the overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // ========================================
  // Desktop Navigation Dropdowns
  // ========================================
  
  const desktopNav = document.getElementById('desktopNav');
  
  if (desktopNav) {
    const dropdownItems = desktopNav.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown-menu');
      
      if (!dropdown) return;
      
      // Open dropdown on mouse enter
      item.addEventListener('mouseenter', function() {
        this.classList.add('is-open');
        
        // Close other dropdowns
        dropdownItems.forEach(otherItem => {
          if (otherItem !== this) {
            otherItem.classList.remove('is-open');
          }
        });
      });
      
      // Close dropdown on mouse leave
      item.addEventListener('mouseleave', function() {
        this.classList.remove('is-open');
      });
      
      // Handle keyboard navigation
      if (link) {
        link.addEventListener('keydown', function(e) {
          // Open dropdown on Enter or Space
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.classList.toggle('is-open');
          }
          
          // Close dropdown on Escape
          if (e.key === 'Escape') {
            item.classList.remove('is-open');
            link.focus();
          }
        });
      }
    });
    
    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!desktopNav.contains(e.target)) {
        dropdownItems.forEach(item => {
          item.classList.remove('is-open');
        });
      }
    });
  }

  // ========================================
  // Active Navigation Highlighting
  // ========================================
  
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .sidebar-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Exact match
    if (href === currentPath) {
      link.classList.add('active');
    }
    
    // Partial match for section pages
    if (href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });

  // ========================================
  // Mega Menu Handling (if exists)
  // ========================================
  
  const megaDropdowns = document.querySelectorAll('.nav-item.mega-dropdown');
  
  megaDropdowns.forEach(item => {
    const megaMenu = item.querySelector('.dropdown-menu');
    
    if (!megaMenu) return;
    
    // Add mega menu specific class for styling
    megaMenu.classList.add('mega-menu');
    
    // Prevent closing when clicking inside mega menu
    megaMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // ========================================
  // Mobile Navigation Gestures
  // ========================================
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  /**
   * Handle swipe gestures to close sidebar
   */
  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    // Swipe left to close (at least 50px)
    if (swipeDistance < -50 && menuSidebar && menuSidebar.classList.contains('is-open')) {
      closeSidebar();
    }
  }
  
  if (menuSidebar) {
    menuSidebar.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    menuSidebar.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  // ========================================
  // Keyboard Navigation
  // ========================================
  
  document.addEventListener('keydown', function(e) {
    // Close sidebar on Escape key
    if (e.key === 'Escape') {
      closeSidebar();
      
      // Also close any open dropdowns
      const openDropdowns = document.querySelectorAll('.nav-item.is-open');
      openDropdowns.forEach(item => {
        item.classList.remove('is-open');
      });
    }
  });

  // ========================================
  // Sticky Header Behavior - 2025 Best Practices
  // Uses requestAnimationFrame for smooth GPU-accelerated transitions
  // ========================================

  const header = document.getElementById('header');
  const announcementBar = document.querySelector('.header-announcement');
  let lastScrollTop = 0;
  const scrollThreshold = 100;
  let ticking = false;
  let isScrolled = false;
  let isHidden = false;

  /**
   * Update header state based on scroll position
   * Called via requestAnimationFrame for optimal performance
   */
  function updateHeaderState(currentScroll) {
    if (!header) return;

    const shouldBeScrolled = currentScroll > 50;
    const shouldBeHidden = currentScroll > scrollThreshold && currentScroll > lastScrollTop;

    // Only update if state changed - prevents unnecessary repaints
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;

      // Add transitioning class for will-change management
      header.classList.add('transitioning');

      if (isScrolled) {
        header.classList.add('scrolled');
        announcementBar?.classList.add('hidden');
      } else {
        header.classList.remove('scrolled');
        announcementBar?.classList.remove('hidden');
      }

      // Remove transitioning class after animation completes
      setTimeout(() => {
        header.classList.remove('transitioning');
      }, 400);
    }

    // Hide/show header on scroll direction (only after threshold)
    if (currentScroll > scrollThreshold) {
      if (shouldBeHidden !== isHidden) {
        isHidden = shouldBeHidden;
        if (isHidden) {
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
        }
      }
    } else if (isHidden) {
      isHidden = false;
      header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    ticking = false;
  }

  /**
   * Scroll event handler - throttled via requestAnimationFrame
   */
  function onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeaderState(currentScroll);
      });
      ticking = true;
    }
  }

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial state check on page load
    const initialScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (initialScroll > 50) {
      header.classList.add('scrolled');
      announcementBar?.classList.add('hidden');
      isScrolled = true;
    }
  }

  // ========================================
  // Mobile Footer Bar Active State
  // ========================================
  
  const footerItems = document.querySelectorAll('.footer-item');
  
  footerItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      footerItems.forEach(i => i.classList.remove('active-nav'));
      
      // Add active class to clicked item (if it's a button)
      if (this.tagName === 'BUTTON') {
        this.classList.add('active-nav');
      }
    });
  });

  // ========================================
  // Breadcrumb Navigation (if exists)
  // ========================================
  
  const breadcrumbs = document.querySelector('.breadcrumbs');
  
  if (breadcrumbs) {
    // Add structured data for breadcrumbs
    const breadcrumbItems = breadcrumbs.querySelectorAll('a');
    
    if (breadcrumbItems.length > 0) {
      console.log('[OT] Breadcrumb navigation detected with ' + breadcrumbItems.length + ' items');
    }
  }

  // ========================================
  // Navigation Analytics (placeholder)
  // ========================================
  
  /**
   * Track navigation clicks (integrate with analytics.js)
   */
  function trackNavClick(label, destination) {
    console.log('[OT] Navigation click:', label, '→', destination);
    
    // This can be integrated with Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'navigation_click', {
        'event_category': 'Navigation',
        'event_label': label,
        'destination': destination
      });
    }
  }
  
  // Track main navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const label = this.textContent.trim();
      const destination = this.getAttribute('href');
      trackNavClick(label, destination);
    });
  });

  console.log('[OT] navigation-v2.js fully loaded and ready');
});

})();

/* === subsection-menu.js === */
(function(){
/**
 * Modern Subsection Menu Component
 * Creates a sticky sidebar menu for service pages showing related pages
 * Automatically highlights current page and provides smooth scroll
 */

class SubsectionMenu {
    constructor(options = {}) {
        this.containerId = options.containerId || 'subsection-menu';
        this.menuData = options.menuData || [];
        this.currentPath = window.location.pathname;
        this.isCollapsed = window.innerWidth < 1024;
        this.init();
    }

    init() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.render(container);
        this.bindEvents();
        this.setActiveItem();
    }

    render(container) {
        const html = `
            <div class="subsection-wrapper ${this.isCollapsed ? 'collapsed' : ''}">
                <button class="subsection-toggle" aria-label="Toggle subsection menu">
                    <i class="fas fa-layer-group"></i>
                    <span>In This Section</span>
                    <i class="fas fa-chevron-down toggle-icon"></i>
                </button>
                <nav class="subsection-nav" aria-label="Section navigation">
                    <div class="subsection-header">
                        <h4>${this.menuData.title || 'In This Section'}</h4>
                    </div>
                    <ul class="subsection-list">
                        ${this.renderItems(this.menuData.items || [])}
                    </ul>
                </nav>
            </div>
        `;
        container.innerHTML = html;
    }

    renderItems(items, level = 0) {
        return items.map(item => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive = this.isCurrentPath(item.url);
            const isParentOfActive = hasChildren && this.hasActivechild(item.children);
            
            return `
                <li class="subsection-item ${hasChildren ? 'has-children' : ''} ${isActive ? 'active' : ''} ${isParentOfActive ? 'parent-active' : ''}" data-level="${level}">
                    <a href="${item.url}" class="subsection-link">
                        ${item.icon ? `<i class="${item.icon}"></i>` : ''}
                        <span>${item.label}</span>
                        ${hasChildren ? '<i class="fas fa-chevron-right expand-icon"></i>' : ''}
                    </a>
                    ${hasChildren ? `
                        <ul class="subsection-children ${isParentOfActive ? 'expanded' : ''}">
                            ${this.renderItems(item.children, level + 1)}
                        </ul>
                    ` : ''}
                </li>
            `;
        }).join('');
    }

    isCurrentPath(url) {
        const cleanCurrent = this.currentPath.replace(/\/$/, '').replace(/\/index\.html$/, '');
        const cleanUrl = url.replace(/\/$/, '').replace(/\/index\.html$/, '');
        return cleanCurrent === cleanUrl || cleanCurrent.endsWith(cleanUrl);
    }

    hasActivechild(children) {
        return children.some(child => 
            this.isCurrentPath(child.url) || 
            (child.children && this.hasActivechild(child.children))
        );
    }

    setActiveItem() {
        const activeItem = document.querySelector('.subsection-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    }

    bindEvents() {
        const toggle = document.querySelector('.subsection-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleMenu());
        }

        document.querySelectorAll('.subsection-item.has-children > .subsection-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth < 1024) {
                    e.preventDefault();
                    const item = link.parentElement;
                    const children = item.querySelector('.subsection-children');
                    if (children) {
                        children.classList.toggle('expanded');
                        item.classList.toggle('expanded');
                    }
                }
            });
        });

        window.addEventListener('resize', () => {
            this.isCollapsed = window.innerWidth < 1024;
            const wrapper = document.querySelector('.subsection-wrapper');
            if (wrapper) {
                wrapper.classList.toggle('collapsed', this.isCollapsed);
            }
        });
    }

    toggleMenu() {
        const wrapper = document.querySelector('.subsection-wrapper');
        if (wrapper) {
            wrapper.classList.toggle('collapsed');
        }
    }
}

// Menu configurations for different sections
const menuConfigs = {
    personal: {
        title: 'Personal Documents',
        items: [
            { 
                label: 'Vital Records', 
                icon: 'fas fa-file-alt',
                url: '/personal/vital-records/',
                children: [
                    { label: 'Birth Certificate', url: '/personal/vital-records/birth/', icon: 'fas fa-baby' },
                    { label: 'Marriage Certificate', url: '/personal/vital-records/marriage/', icon: 'fas fa-ring' },
                    { label: 'Death Certificate', url: '/personal/vital-records/death/', icon: 'fas fa-heart-broken' },
                    { label: 'Divorce Certificate', url: '/personal/vital-records/divorce/', icon: 'fas fa-file-contract' }
                ]
            },
            {
                label: 'Academic Documents',
                icon: 'fas fa-graduation-cap',
                url: '/personal/academic/',
                children: [
                    { label: 'University Degree', url: '/personal/academic/degree/', icon: 'fas fa-scroll' },
                    { label: 'Academic Transcripts', url: '/personal/academic/transcripts/', icon: 'fas fa-list-alt' }
                ]
            },
            { 
                label: 'Immigration Documents', 
                icon: 'fas fa-passport',
                url: '/personal/immigration/',
                children: [
                    { label: 'Police Clearance (PCC)', url: '/personal/immigration/pcc/', icon: 'fas fa-shield-alt' },
                    { label: 'Bank Statement', url: '/personal/immigration/bank/', icon: 'fas fa-university' },
                    { label: 'Driving License', url: '/personal/immigration/license/', icon: 'fas fa-id-card' }
                ]
            }
        ]
    },
    legal: {
        title: 'Legal Documents',
        items: [
            { 
                label: 'Contracts', 
                icon: 'fas fa-file-signature',
                url: '/legal/contracts/',
                children: [
                    { label: 'NDA Translation', url: '/legal/contracts/nda/', icon: 'fas fa-user-secret' },
                    { label: 'Lease Agreement', url: '/legal/contracts/lease/', icon: 'fas fa-home' },
                    { label: 'Sale & Purchase (SPA)', url: '/legal/contracts/spa/', icon: 'fas fa-handshake' },
                    { label: 'MOU Translation', url: '/legal/contracts/mou/', icon: 'fas fa-file-contract' }
                ]
            },
            { 
                label: 'Corporate Documents', 
                icon: 'fas fa-building',
                url: '/legal/corporate/',
                children: [
                    { label: 'Power of Attorney', url: '/legal/corporate/poa/', icon: 'fas fa-gavel' },
                    { label: 'Memorandum of Association', url: '/legal/corporate/moa/', icon: 'fas fa-landmark' },
                    { label: 'Board Resolution', url: '/legal/corporate/resolution/', icon: 'fas fa-users' }
                ]
            },
            { 
                label: 'Litigation Documents', 
                icon: 'fas fa-balance-scale',
                url: '/legal/litigation/',
                children: [
                    { label: 'Court Verdicts', url: '/legal/litigation/verdict/', icon: 'fas fa-gavel' },
                    { label: 'Arbitration Documents', url: '/legal/litigation/arbitration/', icon: 'fas fa-balance-scale-left' }
                ]
            }
        ]
    },
    services: {
        title: 'Our Services',
        items: [
            { label: 'Legal Translation', url: '/services/legal-translation/', icon: 'fas fa-gavel' },
            { label: 'Certificate Translation', url: '/services/certificate-translation/', icon: 'fas fa-certificate' },
            { label: 'Corporate Translation', url: '/services/corporate-translation/', icon: 'fas fa-building' },
            { label: 'Golden Visa Translation', url: '/services/golden-visa-translation/', icon: 'fas fa-passport' },
            { label: 'Attestation Services', url: '/services/attestation/', icon: 'fas fa-stamp' }
        ]
    },
    locations: {
        title: 'Locations',
        items: [
            { 
                label: 'Dubai', 
                icon: 'fas fa-city',
                url: '/locations/dubai/',
                children: [
                    { label: 'Palm Jumeirah', url: '/locations/dubai/palm-jumeirah/', icon: 'fas fa-umbrella-beach' },
                    { label: 'JLT & DMCC', url: '/locations/dubai/jlt/', icon: 'fas fa-building' },
                    { label: 'DIFC', url: '/locations/dubai/difc/', icon: 'fas fa-landmark' },
                    { label: 'Business Bay', url: '/locations/dubai/business-bay/', icon: 'fas fa-briefcase' }
                ]
            },
            { label: 'Abu Dhabi', url: '/locations/abu-dhabi/', icon: 'fas fa-mosque' },
            { label: 'Sharjah', url: '/locations/sharjah/', icon: 'fas fa-university' }
        ]
    },
    resources: {
        title: 'Resources',
        items: [
            { label: 'FAQ', url: '/resources/faq/', icon: 'fas fa-question-circle' },
            { label: 'Pricing Guide', url: '/resources/pricing-guide/', icon: 'fas fa-tags' },
            { label: 'Document Checklist', url: '/resources/document-checklist/', icon: 'fas fa-list-check' },
            { label: 'Attestation Guide', url: '/resources/attestation-guide/', icon: 'fas fa-stamp' },
            { label: 'Golden Visa Checklist', url: '/resources/golden-visa-checklist/', icon: 'fas fa-passport' }
        ]
    }
};

// Auto-initialize based on current path
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    let menuType = null;
    
    if (path.includes('/personal/')) menuType = 'personal';
    else if (path.includes('/legal/')) menuType = 'legal';
    else if (path.includes('/services/')) menuType = 'services';
    else if (path.includes('/locations/')) menuType = 'locations';
    else if (path.includes('/resources/')) menuType = 'resources';
    
    if (menuType && menuConfigs[menuType]) {
        new SubsectionMenu({
            containerId: 'subsection-menu',
            menuData: menuConfigs[menuType]
        });
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SubsectionMenu, menuConfigs };
}

})();

/* === micro-cues.js === */
(function(){
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

})();