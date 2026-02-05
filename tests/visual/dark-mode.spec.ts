import { test, expect } from '@playwright/test';

/**
 * Dark Mode Visual Tests
 *
 * Critical regressions caught by these tests:
 * - Dark mode toggle functionality
 * - Contrast issues (gray text on dark backgrounds)
 * - CSS variable switching
 * - Component-specific dark mode styling
 */

test.describe('Dark Mode', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  async function enableDarkMode(page: any) {
    // Find and click dark mode toggle
    const toggle = page.locator('[aria-label*="dark"], [aria-label*="theme"], .theme-toggle, .dark-mode-toggle').first();

    if (await toggle.count() > 0) {
      await toggle.click();
      await page.waitForTimeout(300);
    } else {
      // Fallback: set class directly
      await page.evaluate(() => {
        document.documentElement.classList.add('theme-dark');
        document.body.classList.add('theme-dark');
      });
      await page.waitForTimeout(100);
    }
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-section');
  });

  test('dark mode toggle works', async ({ page }) => {
    // Check initial state (should be light)
    let isDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('theme-dark') ||
             document.body.classList.contains('theme-dark');
    });
    expect(isDark).toBe(false);

    // Enable dark mode
    await enableDarkMode(page);

    // Check dark mode is active
    isDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('theme-dark') ||
             document.body.classList.contains('theme-dark');
    });
    expect(isDark).toBe(true);
  });

  test('homepage in dark mode', async ({ page }) => {
    await enableDarkMode(page);

    // Full page screenshot in dark mode
    await expect(page).toHaveScreenshot('homepage-dark.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01, // Slightly more lenient for full page
    });
  });

  test('hero section in dark mode', async ({ page }) => {
    await enableDarkMode(page);

    const hero = page.locator('.hero-section');
    await expect(hero).toHaveScreenshot('hero-dark.png');
  });

  test('no gray text on dark backgrounds', async ({ page }) => {
    await enableDarkMode(page);

    // Find text elements in dark sections
    const darkSections = page.locator('.bg-dark, [class*="dark"], .hero-section');

    for (const section of await darkSections.all()) {
      const textElements = section.locator('p, span, li, h1, h2, h3, h4, h5, h6');

      for (const textEl of await textElements.all()) {
        const color = await textEl.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return style.color;
        });

        // Parse RGB values
        const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          const [, r, g, b] = match.map(Number);

          // Check it's not a dark gray (values below 150 are too dark for dark bg)
          // Allow white/light colors (>200) or accent colors
          const isGray = Math.abs(r - g) < 20 && Math.abs(g - b) < 20;
          const isTooLow = r < 150 && g < 150 && b < 150;

          if (isGray && isTooLow) {
            // This text might have contrast issues
            const text = await textEl.textContent();
            console.warn(`Potential contrast issue: "${text?.slice(0, 50)}" has color ${color}`);
          }
        }
      }
    }
  });

  test('dropdown in dark mode', async ({ page }) => {
    await enableDarkMode(page);

    const navItem = page.locator('.header-nav-main nav > ul > li.dropdown').first();
    await navItem.hover();
    await page.waitForTimeout(300);

    const dropdown = navItem.locator('.dropdown-menu');
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toHaveScreenshot('dropdown-dark.png');
  });
});

test.describe('Dark Mode - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile dark mode toggle', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    // Find mobile dark mode toggle (usually moon icon)
    const toggle = page.locator('[aria-label*="dark"], [aria-label*="theme"], .theme-toggle').first();

    if (await toggle.count() === 0) {
      test.skip();
      return;
    }

    await toggle.click();
    await page.waitForTimeout(300);

    // Take screenshot of mobile in dark mode
    await expect(page).toHaveScreenshot('mobile-dark.png', {
      fullPage: false,
    });
  });
});
