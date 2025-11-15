import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';

const reactFileTargets = ['**/*.{jsx,tsx}'];

export default defineConfig([
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/.wrangler/**'],
  },
  {
    name: 'react-hooks/react-components',
    files: reactFileTargets,
    ...reactHooks.configs.flat['recommended-latest'],
  },
  eslintConfigPrettier,
]);
