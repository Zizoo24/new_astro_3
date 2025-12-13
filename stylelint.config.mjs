export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
  ignoreFiles: [
    'dist/**',
    'node_modules/**',
    '.astro/**',
    '**/*.min.css',
  ],
};
