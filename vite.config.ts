import { defineConfig } from 'vite-plus';

export default defineConfig({
  lint: {
    ignorePatterns: ['.astro/**', 'dist/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    printWidth: 100,
    semi: true,
    singleQuote: true,
  },
  test: {
    include: ['tests/**/*.test.ts'],
  },
});
