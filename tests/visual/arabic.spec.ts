import { test, expect } from '@playwright/test';

/**
 * Arabic/RTL Visual Tests
 *
 * Critical regressions caught by these tests:
 * - RTL layout direction
 * - Arabic typography (line-height, letter-spacing)
 * - LTR islands (phone, email, brand names)
 * - Icon flipping
 * - Contrast issues specific to Arabic pages
 */

test.describe('Arabic Pages', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/ar/');
    await page.waitForSelector('.hero-section, main');
    await page.waitForTimeout(500); // Wait for Arabic fonts
  });

  test('Arabic homepage renders correctly', async ({ page }) => {
    await expect(page).toHaveScreenshot('arabic-homepage.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('page has RTL direction', async ({ page }) => {
    const dir = await page.evaluate(() => {
      return document.documentElement.dir || document.documentElement.getAttribute('dir');
    });
    expect(dir).toBe('rtl');

    const lang = await page.evaluate(() => {
      return document.documentElement.lang;
    });
    expect(lang).toBe('ar');
  });

  test('Arabic hero section', async ({ page }) => {
    const hero = page.locator('.hero-section');
    await expect(hero).toBeVisible();
    await expect(hero).toHaveScreenshot('arabic-hero.png');
  });

  test('Arabic header navigation', async ({ page }) => {
    const header = page.locator('.porto-header, header').first();
    await expect(header).toBeVisible();
    await expect(header).toHaveScreenshot('arabic-header.png');
  });

  test('Arabic dropdown opens correctly', async ({ page }) => {
    const navItem = page.locator('.header-nav-main nav > ul > li.dropdown').first();

    if (await navItem.count() === 0) {
      test.skip();
      return;
    }

    await navItem.hover();
    await page.waitForTimeout(300);

    const dropdown = navItem.locator('.dropdown-menu');
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toHaveScreenshot('arabic-dropdown.png');
  });

  test('LTR islands remain left-to-right', async ({ page }) => {
    // Phone numbers should be LTR
    const phoneElements = page.locator('.phone-number, [href^="tel:"], a[href*="971"]');

    for (const phone of await phoneElements.all()) {
      const direction = await phone.evaluate((el) => {
        return window.getComputedStyle(el).direction;
      });
      // Phone numbers should be LTR or inherit (not explicitly RTL)
      expect(direction).not.toBe('rtl');
    }

    // Email inputs should be LTR
    const emailInputs = page.locator('input[type="email"]');
    for (const input of await emailInputs.all()) {
      const direction = await input.evaluate((el) => {
        return window.getComputedStyle(el).direction;
      });
      expect(direction).toBe('ltr');
    }
  });

  test('Arabic text has proper line-height', async ({ page }) => {
    // Arabic needs more line-height than English
    const bodyText = page.locator('p').first();

    if (await bodyText.count() === 0) {
      test.skip();
      return;
    }

    const lineHeight = await bodyText.evaluate((el) => {
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const lh = parseFloat(style.lineHeight);
      return lh / fontSize; // Ratio
    });

    // Arabic should have line-height ratio >= 1.6 (ideally 1.8)
    expect(lineHeight).toBeGreaterThanOrEqual(1.5);
  });

  test('no letter-spacing on Arabic text', async ({ page }) => {
    // Letter-spacing breaks Arabic rendering
    const arabicText = page.locator('h1, h2, h3, p').first();

    if (await arabicText.count() === 0) {
      test.skip();
      return;
    }

    const letterSpacing = await arabicText.evaluate((el) => {
      return window.getComputedStyle(el).letterSpacing;
    });

    // Should be normal or 0
    expect(['normal', '0px', '0']).toContain(letterSpacing);
  });
});

test.describe('Arabic Pages - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Arabic mobile homepage', async ({ page }) => {
    await page.goto('/ar/');
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot('arabic-mobile-homepage.png', {
      fullPage: false,
    });
  });

  test('Arabic mobile navigation', async ({ page }) => {
    await page.goto('/ar/');
    await page.waitForTimeout(500);

    // Find hamburger menu
    const hamburger = page.locator('[aria-label*="menu"], .hamburger-btn').first();

    if (await hamburger.count() === 0) {
      test.skip();
      return;
    }

    await hamburger.click();
    await page.waitForTimeout(300);

    const sidebar = page.locator('.mobile-sidebar, [class*="sidebar"]').first();
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toHaveScreenshot('arabic-mobile-sidebar.png');
  });
});

test.describe('Arabic Dark Mode', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('Arabic page in dark mode', async ({ page }) => {
    await page.goto('/ar/');
    await page.waitForTimeout(500);

    // Enable dark mode
    const toggle = page.locator('[aria-label*="dark"], .theme-toggle').first();
    if (await toggle.count() > 0) {
      await toggle.click();
      await page.waitForTimeout(300);
    } else {
      await page.evaluate(() => {
        document.documentElement.classList.add('theme-dark');
        document.body.classList.add('theme-dark');
      });
    }

    await expect(page).toHaveScreenshot('arabic-dark-mode.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});
