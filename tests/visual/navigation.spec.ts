import { test, expect } from '@playwright/test';

/**
 * Navigation Visual Tests
 *
 * Critical regressions caught by these tests:
 * - Dropdown glassmorphism styling
 * - Dropdown hover states
 * - "+more" link hover effect
 * - Mobile hamburger menu
 * - Header icon spacing
 */

test.describe('Desktop Navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.porto-header');
  });

  test('header renders correctly', async ({ page }) => {
    const header = page.locator('.porto-header');
    await expect(header).toBeVisible();
    await expect(header).toHaveScreenshot('header-desktop.png');
  });

  test('dropdown opens on hover', async ({ page }) => {
    // Find a nav item with dropdown
    const navItem = page.locator('.header-nav-main nav > ul > li.dropdown').first();
    await expect(navItem).toBeVisible();

    // Hover to open dropdown
    await navItem.hover();
    await page.waitForTimeout(300); // Wait for animation

    // Dropdown should be visible
    const dropdown = navItem.locator('.dropdown-menu');
    await expect(dropdown).toBeVisible();

    // Screenshot the open dropdown
    await expect(dropdown).toHaveScreenshot('dropdown-open.png');
  });

  test('dropdown has glassmorphism styling', async ({ page }) => {
    const navItem = page.locator('.header-nav-main nav > ul > li.dropdown').first();
    await navItem.hover();
    await page.waitForTimeout(300);

    const dropdown = navItem.locator('.dropdown-menu');
    await expect(dropdown).toBeVisible();

    // Check for dark background (glassmorphism)
    const bgColor = await dropdown.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Should be dark navy, not white
    // Dark: rgba(7, 32, 53, ...) or similar
    // Not white: rgb(255, 255, 255)
    expect(bgColor).not.toBe('rgb(255, 255, 255)');
  });

  test('dropdown link hover state', async ({ page }) => {
    const navItem = page.locator('.header-nav-main nav > ul > li.dropdown').first();
    await navItem.hover();
    await page.waitForTimeout(300);

    const link = navItem.locator('.dropdown-menu li a').first();
    await expect(link).toBeVisible();

    // Screenshot before hover
    await expect(link).toHaveScreenshot('dropdown-link-normal.png');

    // Hover the link
    await link.hover();
    await page.waitForTimeout(100);

    // Screenshot after hover
    await expect(link).toHaveScreenshot('dropdown-link-hover.png');
  });

  test('+more link hover state', async ({ page }) => {
    // Find dropdown with truncated items (+more link)
    const moreLink = page.locator('.dropdown-more-link').first();

    // Skip if no +more links exist
    if (await moreLink.count() === 0) {
      test.skip();
      return;
    }

    // First, open the parent dropdown
    const parentDropdown = moreLink.locator('xpath=ancestor::ul[contains(@class, "dropdown-menu")]');
    const navItem = parentDropdown.locator('xpath=ancestor::li[contains(@class, "dropdown")]');
    await navItem.hover();
    await page.waitForTimeout(300);

    await expect(moreLink).toBeVisible();

    // Screenshot normal state
    await expect(moreLink).toHaveScreenshot('more-link-normal.png');

    // Hover
    await moreLink.hover();
    await page.waitForTimeout(100);

    // Screenshot hover state - should show coral highlight
    await expect(moreLink).toHaveScreenshot('more-link-hover.png');
  });

  test('header action icons have proper spacing', async ({ page }) => {
    const actions = page.locator('.header-column-actions');
    await expect(actions).toBeVisible();

    // Screenshot the action buttons area
    await expect(actions).toHaveScreenshot('header-actions.png');

    // Check gap between items
    const gap = await actions.evaluate((el) => {
      return window.getComputedStyle(el).gap;
    });

    // Should have reasonable gap (not 0)
    expect(gap).not.toBe('0px');
    expect(gap).not.toBe('normal');
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.mobile-shell, .porto-header');
  });

  test('mobile header renders correctly', async ({ page }) => {
    const header = page.locator('.mobile-shell header, .porto-header');
    await expect(header.first()).toBeVisible();
    await expect(header.first()).toHaveScreenshot('header-mobile.png');
  });

  test('hamburger menu opens sidebar', async ({ page }) => {
    // Find and click hamburger button
    const hamburger = page.locator('[aria-label*="menu"], .hamburger-btn, .mobile-menu-toggle').first();

    if (await hamburger.count() === 0) {
      test.skip();
      return;
    }

    await hamburger.click();
    await page.waitForTimeout(300);

    // Sidebar should be visible
    const sidebar = page.locator('.mobile-sidebar, .mobile-nav-panel, [class*="sidebar"]').first();
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toHaveScreenshot('mobile-sidebar.png');
  });

  test('mobile sticky bottom bar', async ({ page }) => {
    // Scroll down to trigger sticky bar
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    const bottomBar = page.locator('.mobile-action-bar, .sticky-mobile-bar, [class*="bottom-bar"]').first();

    if (await bottomBar.count() === 0) {
      test.skip();
      return;
    }

    await expect(bottomBar).toBeVisible();
    await expect(bottomBar).toHaveScreenshot('mobile-bottom-bar.png');
  });
});
