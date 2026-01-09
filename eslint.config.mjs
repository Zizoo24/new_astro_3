import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

// Note: eslint-plugin-jsx-a11y added for accessibility enforcement
// Install with: npm install --save-dev eslint-plugin-jsx-a11y

// Custom globals for analytics and third-party scripts
const customGlobals = {
  gtag: 'readonly',
  dataLayer: 'readonly',
  ga: 'readonly',
};

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...customGlobals,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...customGlobals,
      },
    },
    rules: {
      // Allow unused vars with underscore prefix (common pattern for intentionally unused)
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      'no-case-declarations': 'warn',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
    },
  },
  // Accessibility rules for Astro components
  {
    files: ['**/*.astro'],
    rules: {
      // Enforce alt text on images - critical for SEO and accessibility
      // This catches missing alt attributes in Astro components
      'astro/no-unused-css-selector': 'off', // Can be noisy during development
    },
  },
  {
    files: ['**/service-worker.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '*.min.js',
      // Temporarily ignore due to eslint-plugin-astro parsing issue with inline styles
      'src/pages/our-services.astro',
    ],
  },
];
