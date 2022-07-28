const buildRules = require("./build");

const node = {
  root: true,
  ignorePatterns: [
    "*.d.ts",
    ".eslintrc.js",
    ".eslintrc.cjs",
    "vitest.config.ts",
  ],
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
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
      files: ["**/*.ts?(x)"],
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
      // Remove unicorn rules and add Vitest rules
      files: ["**/*.test.ts?(x)"],
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
  ],
};

module.exports = buildRules(node);
