# Font Awesome Button Loading Fix

## The Problem
- Font Awesome CSS loads synchronously
- Font Awesome **webfonts** load asynchronously
- `DOMContentLoaded` fires before fonts render
- Buttons appear broken on first/second load

## The Solution
Wait for Font Awesome fonts to load before initializing buttons.

---

## FILE 1: BaseLayout.astro - Add Font Preloading

**Location:** `src/layouts/BaseLayout.astro`

**Find this section (around line 110):**
```html
<!-- Preload critical font (Montserrat ExtraBold 800 for hero headings) -->
<link 
  rel="preload" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
  href="https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459W1hyyTh89Y.woff2"
>
```

**Add AFTER it:**
```html
<!-- Preload Font Awesome fonts - CRITICAL for button icons -->
<link 
  rel="preload" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-solid-900.woff2"
>
<link 
  rel="preload" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-brands-400.woff2"
>
<link 
  rel="preload" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-regular-400.woff2"
>
```

---

## FILE 2: Create Font Loading Helper Script

**New File:** `public/scripts/font-loader.js`

```javascript
/**
 * Font Loading Helper - Ensures Font Awesome is ready before button initialization
 * Prevents buttons from appearing broken on first load
 */
(function() {
  'use strict';

  // Check if Font Awesome fonts are loaded
  function areFontsReady() {
    // Check if document.fonts API is supported
    if (!document.fonts) {
      return Promise.resolve(true); // Fallback: assume ready
    }

    // Wait for all fonts, with timeout
    return Promise.race([
      document.fonts.ready,
      new Promise(resolve => setTimeout(() => resolve(true), 3000)) // 3s timeout
    ]);
  }

  // Initialize buttons once fonts are ready
  areFontsReady().then(() => {
    // Add class to body indicating fonts are ready
    document.body.classList.add('fonts-ready');
    
    // Dispatch custom event for button initialization
    const event = new CustomEvent('fontsready', { 
      detail: { timestamp: Date.now() } 
    });
    document.dispatchEvent(event);
    
    console.log('[FontLoader] Font Awesome ready');
  }).catch(err => {
    console.warn('[FontLoader] Font loading warning:', err);
    // Proceed anyway after timeout
    document.body.classList.add('fonts-ready');
    document.dispatchEvent(new CustomEvent('fontsready'));
  });
})();
```

---

## FILE 3: Header-porto.astro - Wait for Fonts

**Location:** `src/components/Header-porto.astro`

**Find the script section (around line 560):**
```javascript
<script is:inline>
  // Porto Header Desktop Navigation
  document.addEventListener('DOMContentLoaded', () => {
```

**REPLACE WITH:**
```javascript
<script is:inline>
  // Porto Header Desktop Navigation
  // WAIT for fonts to load before initializing
  function initializeHeader() {
    console.log('[Header] Initializing header buttons...');
```

**Then at the VERY END of the script (after all the functions), REPLACE:**
```javascript
    });
  });
</script>
```

**WITH:**
```javascript
    });
  } // End initializeHeader function

  // Wait for BOTH DOM and fonts to be ready
  let domReady = false;
  let fontsReady = false;

  function tryInitialize() {
    if (domReady && fontsReady) {
      console.log('[Header] DOM + Fonts ready, initializing...');
      initializeHeader();
    }
  }

  // Listen for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      domReady = true;
      tryInitialize();
    });
  } else {
    domReady = true;
    tryInitialize();
  }

  // Listen for fonts ready
  document.addEventListener('fontsready', () => {
    fontsReady = true;
    tryInitialize();
  });

  // Fallback: if no fontsready event after 2s, initialize anyway
  setTimeout(() => {
    if (!fontsReady) {
      console.warn('[Header] Fonts timeout, initializing anyway...');
      fontsReady = true;
      tryInitialize();
    }
  }, 2000);
</script>
```

---

## FILE 4: MobileShell.astro - Wait for Fonts

**Location:** `src/components/MobileShell.astro`

**Find the script (near the end):**
```javascript
<script is:inline>
document.addEventListener('DOMContentLoaded', function() {
```

**REPLACE WITH:**
```javascript
<script is:inline>
function initializeMobileShell() {
  console.log('[MobileShell] Initializing mobile navigation...');
```

**Then at the VERY END of the script, REPLACE:**
```javascript
  });
});
</script>
```

**WITH:**
```javascript
  });
} // End initializeMobileShell

// Wait for BOTH DOM and fonts
let domReady = false;
let fontsReady = false;

function tryInitialize() {
  if (domReady && fontsReady) {
    console.log('[MobileShell] DOM + Fonts ready, initializing...');
    initializeMobileShell();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    domReady = true;
    tryInitialize();
  });
} else {
  domReady = true;
  tryInitialize();
}

document.addEventListener('fontsready', function() {
  fontsReady = true;
  tryInitialize();
});

// Fallback timeout
setTimeout(function() {
  if (!fontsReady) {
    console.warn('[MobileShell] Fonts timeout, initializing anyway...');
    fontsReady = true;
    tryInitialize();
  }
}, 2000);
</script>
```

---

## FILE 5: Update BaseLayout.astro - Load Font Helper Early

**Location:** `src/layouts/BaseLayout.astro`

**Find the scripts section near the bottom (around line 385):**
```html
  <!-- Scripts - All deferred -->
  <script is:inline src="/scripts/os-detect.js"></script>
```

**ADD BEFORE IT:**
```html
  <!-- Font loader - Must load BEFORE button initialization -->
  <script src="/scripts/font-loader.js"></script>
  
  <!-- Scripts - All deferred -->
```

---

## Implementation Order

1. ✅ Add font preloads to BaseLayout.astro (step 1)
2. ✅ Create `/public/scripts/font-loader.js` (step 2)
3. ✅ Update Header-porto.astro script (step 3)
4. ✅ Update MobileShell.astro script (step 4)
5. ✅ Add font-loader.js to BaseLayout.astro (step 5)

---

## Testing

After implementing:
1. Clear browser cache (hard refresh: Cmd+Shift+R)
2. Load page in incognito
3. Check console for: `[FontLoader] Font Awesome ready`
4. Check console for: `[Header] DOM + Fonts ready, initializing...`
5. Verify all buttons work immediately on first load

---

## Why This Works

**Before:**
```
Page load → DOMContentLoaded → Initialize buttons → FA fonts still loading ❌
```

**After:**
```
Page load → Preload FA fonts → DOMContentLoaded → Wait for fonts → Initialize ✅
```

The buttons now initialize only after Font Awesome fonts are confirmed loaded!
