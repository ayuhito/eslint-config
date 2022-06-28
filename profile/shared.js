module.exports = {
  "no-restricted-syntax": [
    // Remove for..of restriction from Airbnb because its extremely useful - https://github.com/airbnb/javascript/issues/1271
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
    },
    {
      selector: "LabeledStatement",
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
    },
    {
      selector: "WithStatement",
      message:
        "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
    },
  ],
  // Use loggers
  "no-console": "warn",
  // Useful but too restrictive on props
  "no-param-reassign": ["error", { props: false }],
  // We might want to import from devDeps if we're bundling them with rollup
  "import/no-extraneous-dependencies": "off",
  // Common abbreviations are known and readable
  "unicorn/prevent-abbreviations": "off",
  // Default forces export from even if value is used elsewhere
  "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true }],
  // Force ESM
  "unicorn/prefer-module": "error",
  // Auto sort imports
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
};
