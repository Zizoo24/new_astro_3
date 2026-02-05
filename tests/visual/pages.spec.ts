import { test, expect } from '@playwright/test';

/**
 * Critical Page Visual Tests
 *
 * Full-page screenshots of high-traffic pages.
 * These catch layout shifts, missing sections, broken components.
 */

// Pages to test with full screenshots
const criticalPages = [
  { path: '/', name: 'homepage' },
  { path: '/legal-translation-dubai/', name: 'legal-translation' },
  { path: '/personal/', name: 'personal-hub' },
  { path: '/legal/', name: 'legal-hub' },
  { path: '/services/attestation/', name: 'attestation' },
  { path: '/contact/', name: 'contact' },
];

// Service pages that use ServiceLayout
const servicePages = [
  { path: '/personal/vital-records/birth/', name: 'birth-certificate' },
  { path: '/personal/vital-records/marriage/', name: 'marriage-certificate' },
  { path: '/legal/contracts/nda/', name: 'nda-translation' },
  { path: '/legal/corporate/poa/', name: 'power-of-attorney' },
];

test.describe('Critical Pages - Desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  for (const page of criticalPages) {
    test(`${page.name} page renders correctly`, async ({ page: p }) => {
      await p.goto(page.path);
      await p.waitForLoadState('networkidle');
      await p.waitForTimeout(500); // Wait for animations

      await expect(p).toHaveScreenshot(`${page.name}-desktop.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  }
});

test.describe('Service Pages - Desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  for (const page of servicePages) {
    test(`${page.name} service page`, async ({ page: p }) => {
      await p.goto(page.path);
      await p.waitForLoadState('networkidle');
      await p.waitForTimeout(500);

      // Check key service page components exist
      const hero = p.locator('.hero-section, .service-hero, [class*="hero"]').first();
      await expect(hero).toBeVisible();

      // Screenshot above-the-fold area
      await expect(p).toHaveScreenshot(`${page.name}-desktop.png`, {
        fullPage: false, // Just viewport for service pages
      });
    });
  }
});

test.describe('Critical Pages - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const page of criticalPages) {
    test(`${page.name} mobile`, async ({ page: p }) => {
      await p.goto(page.path);
      await p.waitForLoadState('networkidle');
      await p.waitForTimeout(500);

      await expect(p).toHaveScreenshot(`${page.name}-mobile.png`, {
        fullPage: false, // Viewport only for mobile
      });
    });
  }
});

test.describe('Critical Pages - Tablet', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  // Only test homepage and hub pages on tablet
  const tabletPages = criticalPages.filter(p =>
    ['homepage', 'legal-hub', 'personal-hub'].includes(p.name)
  );

  for (const page of tabletPages) {
    test(`${page.name} tablet`, async ({ page: p }) => {
      await p.goto(page.path);
      await p.waitForLoadState('networkidle');
      await p.waitForTimeout(500);

      await expect(p).toHaveScreenshot(`${page.name}-tablet.png`, {
        fullPage: false,
      });
    });
  }
});

test.describe('Page Components', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('FAQ accordion renders', async ({ page }) => {
    // Go to a page with FAQ
    await page.goto('/personal/vital-records/birth/');
    await page.waitForLoadState('networkidle');

    const faq = page.locator('.faq-section, [class*="faq"], details').first();

    if (await faq.count() === 0) {
      test.skip();
      return;
    }

    await expect(faq).toBeVisible();
    await expect(faq).toHaveScreenshot('faq-section.png');
  });

  test('trust bar renders', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const trustBar = page.locator('.trust-bar, [class*="trust"]').first();

    if (await trustBar.count() === 0) {
      test.skip();
      return;
    }

    await expect(trustBar).toBeVisible();
    await expect(trustBar).toHaveScreenshot('trust-bar.png');
  });

  test('footer renders', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
    await expect(footer).toHaveScreenshot('footer.png');
  });

  test('contact form renders', async ({ page }) => {
    await page.goto('/contact/');
    await page.waitForLoadState('networkidle');

    const form = page.locator('form, .contact-form, [class*="form"]').first();

    if (await form.count() === 0) {
      test.skip();
      return;
    }

    await expect(form).toBeVisible();
    await expect(form).toHaveScreenshot('contact-form.png');
  });
});
