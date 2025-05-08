import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/*.d.ts",
      "packages/backend/dist/**",
      "packages/frontend/.next/**",
      "packages/*/dist/**",
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  {
    files: ["packages/**/src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
    },
  },

  {
    files: ["packages/frontend/src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@next/next/no-html-link-for-pages": [
        "error",
        "packages/frontend/src/app",
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      next: {
        rootDir: "packages/frontend/",
      },
    },
  },

  {
    files: ["packages/backend/src/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
);
