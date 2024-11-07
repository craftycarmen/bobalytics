import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    env: {
      browser: true,
      es2020: true,
      node: true
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    extends: [
      "eslint: recommend",
      pluginJs.configs.recommended,
      pluginReact.configs.recommended,
      "plugin:react-hooks/recommended",
    ],
    plugins: ["react"],
    rules: {
      "react/prop-types": "off",
    },
    overrides: [
      {
        files: ["src/contet/*.jsx"],
        rules: {
          "react/prop-types": "off",
        },
      },
    ],
  },
];
