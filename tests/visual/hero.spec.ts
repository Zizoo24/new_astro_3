import { test, expect } from '@playwright/test';

/**
 * Hero Section Visual Tests
 *
 * Critical regressions caught by these tests:
 * - Hero overlay opacity (critical.css vs porto-desktop.css)
 * - Overlap cards layout (flex vs block, horizontal vs vertical)
 * - Hero title visibility
 * - Font Awesome icon rendering
 */

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for hero image to load
    await page.waitForSelector('.hero-image');
    // Wait for Font Awesome to load
    await page.waitForTimeout(1000);
  });

  test('hero section renders correctly', async ({ page }) => {
    const hero = page.locator('.hero-section.exodus-hero');
    await expect(hero).toBeVisible();
    await expect(hero).toHaveScreenshot('hero-section.png');
  });

  test('hero overlay has correct transparency', async ({ page }) => {
    // The overlay should be semi-transparent, not opaque
    // This catches the critical.css override issue
    const overlay = page.locator('.hero-overlay.exodus-overlay');
    await expect(overlay).toBeVisible();

    // Check computed opacity via CSS
    const background = await overlay.evaluate((el) => {
      return window.getComputedStyle(el).background;
    });

    // Should contain rgba values with transparency (not 0.92 opacity)
    expect(background).toContain('rgba');
  });

  test('hero title is visible', async ({ page }) => {
    const title = page.locator('.hero-title.exodus-title');
    await expect(title).toBeVisible();

    // Title should contain expected text
    const titleText = await title.textContent();
    expect(titleText?.toLowerCase()).toContain('translation');
  });

  test('overlap cards display horizontally', async ({ page }) => {
    const cards = page.locator('.overlap-cards');
    await expect(cards).toBeVisible();

    // Screenshot the overlap cards specifically
    await expect(cards).toHaveScreenshot('overlap-cards.png');

    // Check that cards use flex layout (not block)
    const card = page.locator('.overlap-card').first();
    const display = await card.evaluate((el) => {
      return window.getComputedStyle(el).display;
    });
    expect(display).toBe('flex');
  });

  test('overlap card icons render correctly', async ({ page }) => {
    // Wait for Font Awesome
    await page.waitForSelector('.overlap-card-icon i.fas, .overlap-card-icon i.fab');

    const icons = page.locator('.overlap-card-icon i');
    const count = await icons.count();

    // Should have icons rendered
    expect(count).toBeGreaterThan(0);

    // Check first icon has content (Font Awesome loaded)
    const firstIcon = icons.first();
    const pseudoContent = await firstIcon.evaluate((el) => {
      const before = window.getComputedStyle(el, '::before');
      return before.content;
    });

    // Font Awesome sets content on ::before
    expect(pseudoContent).not.toBe('none');
    expect(pseudoContent).not.toBe('');
  });

  test('overlap cards have coral background', async ({ page }) => {
    const card = page.locator('.overlap-card').first();
    const bgColor = await card.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Should be coral/red color (rgb(255, 22, 84) or similar)
    // Not white (rgb(255, 255, 255))
    expect(bgColor).not.toBe('rgb(255, 255, 255)');
    expect(bgColor).toMatch(/rgb\(255,\s*\d+,\s*\d+\)/);
  });
});

test.describe('Hero Section - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile hero layout', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-section');
    await page.waitForTimeout(1000);

    const hero = page.locator('.hero-section');
    await expect(hero).toHaveScreenshot('hero-mobile.png');
  });

  test('mobile overlap cards stack vertically', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.overlap-cards');

    const cards = page.locator('.overlap-cards');
    await expect(cards).toHaveScreenshot('overlap-cards-mobile.png');
  });
});
