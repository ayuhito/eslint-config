const buildRules = require("./build");

const next = {
  root: true,
  ignorePatterns: [
    "*.d.ts",
    ".eslintrc.js",
    ".eslintrc.cjs",
    "vitest.config.ts",
  ],
  env: {
    browser: true, // Enables browser globals like window and document
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.cjs", "*.mjs"],
      plugins: ["promise", "unicorn", "simple-import-sort", "import"],
      extends: [
        "eslint:recommended",
        "airbnb-base",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "prettier",
      ],
      rules: {
        // Just shared rules
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        allowAutomaticSingleRunInference: true,
        warnOnUnsupportedTypeScriptVersion: false,
        project: "./tsconfig.json",
      },
      plugins: [
        "@typescript-eslint",
        "promise",
        "unicorn",
        "simple-import-sort",
        "import",
      ],
      extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript/base",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "prettier",
      ],
      rules: {
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: true, variables: true, typedefs: true },
        ],
      },
    },
    {
      files: ["*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        allowAutomaticSingleRunInference: true,
        warnOnUnsupportedTypeScriptVersion: false,
        project: "./tsconfig.json",
      },
      plugins: [
        "@typescript-eslint",
        "promise",
        "simple-import-sort",
        "import",
      ],
      extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:promise/recommended",
        "plugin:@next/next/recommended",
        "plugin:@next/next/core-web-vitals",
        "prettier",
      ],
      rules: {
        // Allow most functions to rely on type inference.
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: true, variables: true, typedefs: true },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      // Remove unicorn rules and add Vitest rules
      files: ["*.test.ts", "*.test.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        allowAutomaticSingleRunInference: true,
        warnOnUnsupportedTypeScriptVersion: false,
        project: "./tsconfig.json",
      },
      plugins: [
        "@typescript-eslint",
        "promise",
        "vitest",
        "simple-import-sort",
        "import",
      ],
      extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript/base",
        "plugin:promise/recommended",
        "prettier",
      ],
      rules: {
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: true, variables: true, typedefs: true },
        ],
      },
    },
    {
      files: ["*.json"],
      extends: ["plugin:json/recommended-with-comments"],
      rules: {},
    },
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended"], // ESLint Parser/Plugin for MDX
      rules: {},
    },
  ],
};

module.exports = buildRules(next);
