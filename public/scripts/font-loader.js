/**
 * Font Loading Helper - Ensures Font Awesome is ready before button initialization
 * Prevents buttons from appearing broken on first load
 * 
 * @author OnlineTranslation.ae Development Team
 * @date January 2026
 */
(function() {
  'use strict';

  /**
   * Check if Font Awesome fonts are loaded
   * Uses Font Loading API with fallback
   */
  function areFontsReady() {
    // Check if document.fonts API is supported
    if (!document.fonts) {
      console.log('[FontLoader] Font Loading API not supported, assuming ready');
      return Promise.resolve(true);
    }

    // Wait for all fonts to load, with 3-second timeout
    return Promise.race([
      document.fonts.ready,
      new Promise(resolve => {
        console.log('[FontLoader] Setting 3s font loading timeout...');
        setTimeout(() => {
          console.warn('[FontLoader] Font loading timeout reached');
          resolve(true);
        }, 3000);
      })
    ]);
  }

  /**
   * Initialize once fonts are ready
   */
  function initializeFontSystem() {
    areFontsReady()
      .then(() => {
        // Add class to body indicating fonts are ready
        document.body.classList.add('fonts-ready');
        
        // Dispatch custom event for component initialization
        const event = new CustomEvent('fontsready', { 
          detail: { 
            timestamp: Date.now(),
            fontsLoaded: document.fonts ? document.fonts.size : 'unknown'
          } 
        });
        document.dispatchEvent(event);
        
        console.log('[FontLoader] ✓ Font Awesome ready - buttons can initialize');
      })
      .catch(err => {
        console.error('[FontLoader] Font loading error:', err);
        // Proceed anyway - better to have working buttons than broken page
        document.body.classList.add('fonts-ready');
        document.dispatchEvent(new CustomEvent('fontsready'));
      });
  }

  // Start initialization
  console.log('[FontLoader] Initializing font loading system...');
  initializeFontSystem();

})();
