import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Visual Regression Testing
 *
 * Purpose: Catch CSS regressions before they hit production
 * Focus areas:
 *   - Hero section (overlay, overlap cards, title)
 *   - Navigation dropdowns (glassmorphism, hover states)
 *   - Dark mode consistency
 *   - Arabic/RTL layout
 *
 * Run: npm run test:visual
 * Update baselines: npm run test:visual:update
 */

export default defineConfig({
  testDir: './tests/visual',

  // Snapshot settings for visual comparison
  snapshotDir: './tests/visual/__screenshots__',
  snapshotPathTemplate: '{snapshotDir}/{testFilePath}/{arg}-{projectName}{ext}',

  // Run tests in parallel
  fullyParallel: true,

  // Fail CI if test.only is left in code
  forbidOnly: !!process.env.CI,

  // Retry failed tests (helps with flaky visual tests)
  retries: process.env.CI ? 2 : 0,

  // Limit parallel workers on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],

  // Shared settings for all projects
  use: {
    // Base URL for the dev server
    baseURL: 'http://localhost:5000',

    // Capture screenshots on failure
    screenshot: 'only-on-failure',

    // Capture trace on first retry
    trace: 'on-first-retry',

    // Wait for fonts to load before screenshots
    actionTimeout: 10000,
  },

  // Configure projects for different viewports
  // Using Firefox since Chromium download is blocked in some environments
  projects: [
    // Desktop - Primary testing viewport
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 800 },
      },
    },

    // Tablet - Catches responsive breakpoint issues
    {
      name: 'tablet',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 768, height: 1024 },
      },
    },

    // Mobile - Critical for sticky mobile bar, hamburger menu
    {
      name: 'mobile',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 390, height: 844 },
      },
    },
  ],

  // Visual comparison settings
  expect: {
    toHaveScreenshot: {
      // Allow 0.2% pixel difference (handles anti-aliasing)
      maxDiffPixelRatio: 0.002,

      // Animation must be stable before screenshot
      animations: 'disabled',

      // Wait for fonts
      timeout: 10000,
    },
    toMatchSnapshot: {
      // Threshold for image comparison
      threshold: 0.2,
    },
  },

  // Start dev server before tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
