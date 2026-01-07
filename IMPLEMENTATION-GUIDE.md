# Implementation Guide - Font Awesome Button Fix
## Quick Reference for GitHub Web Editing

---

## ✅ COMPLETED
- [x] Created `/public/scripts/font-loader.js`
- [x] Created documentation `FONT-AWESOME-BUTTON-FIX.md`

---

## 📝 TODO - 3 Files to Edit

### 1️⃣ src/layouts/BaseLayout.astro

**Edit #1 - Add Font Preloads (Line ~115)**

Find:
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

Add AFTER it:
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

**Edit #2 - Load font-loader.js Early (Line ~390)**

Find:
```html
  <!-- Scripts - All deferred -->
  <script is:inline src="/scripts/os-detect.js"></script>
```

Change to:
```html
  <!-- Font loader - Must load BEFORE button initialization -->
  <script src="/scripts/font-loader.js"></script>

  <!-- Scripts - All deferred -->
  <script is:inline src="/scripts/os-detect.js"></script>
```

---

### 2️⃣ src/components/Header-porto.astro

**Edit - Wrap Initialization in Font Check (Line ~560 onwards)**

Find the ENTIRE script block:
```javascript
<script is:inline>
  // Porto Header Desktop Navigation
  // Mobile menu handled by MobileShell via #sidebarToggle (this file now uses #portoMobileToggle)
  document.addEventListener('DOMContentLoaded', () => {
```

Replace the opening with:
```javascript
<script is:inline>
  // Porto Header Desktop Navigation
  // WAIT for fonts to load before initializing
  function initializeHeader() {
    console.log('[Header] Initializing header buttons...');
```

Then find the closing of the script (at the very end):
```javascript
    });
  });
</script>
```

Replace with:
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

### 3️⃣ src/components/MobileShell.astro

**Edit - Wrap Initialization in Font Check (at the very end)**

Find the ENTIRE script block opening:
```javascript
<script is:inline>
document.addEventListener('DOMContentLoaded', function() {
```

Replace with:
```javascript
<script is:inline>
function initializeMobileShell() {
  console.log('[MobileShell] Initializing mobile navigation...');
```

Then find the closing:
```javascript
  });
});
</script>
```

Replace with:
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

## 🧪 Testing

After pushing changes to GitHub:

1. Open DevTools Console
2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)
3. Look for these console messages:
   ```
   [FontLoader] Initializing font loading system...
   [FontLoader] ✓ Font Awesome ready - buttons can initialize
   [Header] DOM + Fonts ready, initializing...
   [Header] Initializing header buttons...
   [MobileShell] DOM + Fonts ready, initializing...
   [MobileShell] Initializing mobile navigation...
   ```

4. Test all buttons immediately on first load:
   - Desktop: Sidebar toggle, search toggle, theme toggle
   - Mobile: Menu toggle, search toggle, theme toggle

---

## 🎯 Root Cause

The CSS loads synchronously, but the actual **font files** (.woff2) load asynchronously.

**Before:**
```
DOMContentLoaded → Initialize buttons → Icons still loading ❌
```

**After:**
```
Preload fonts → DOMContentLoaded → Wait for fonts → Initialize ✅
```

---

## Commit Message

```
fix: Resolve button initialization race condition with Font Awesome fonts

- Add font preloading for FA solid/brands/regular variants
- Create font-loader.js to track font loading status
- Update Header-porto.astro to wait for fonts before init
- Update MobileShell.astro to wait for fonts before init
- Prevents buttons appearing broken on first/second load

Fixes #[issue-number]
```
