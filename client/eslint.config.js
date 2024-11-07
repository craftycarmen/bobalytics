import globals from 'globals';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['src/content/*.jsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
];
