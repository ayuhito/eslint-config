# eslint-config

Personal ESLint Configs

Profiles:

- node

```js
// .eslintrc.cjs
require("@lotusdevshack/eslint-config/patch");

module.exports = {
  extends: ["@lotusdevshack/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
};
```

You can remove ESM restrictions by using the following config:

```js
// .eslintrc.cjs
require("@lotusdevshack/eslint-config/patch");

module.exports = {
  extends: ["@lotusdevshack/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "unicorn/prefer-module": "off",
  },
};
```
