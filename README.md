# eslint-config

Personal ESLint Configs

Profiles:

- node

```js
// .eslintrc.cjs
require("@ayuhito/eslint-config/patch");

module.exports = {
  extends: ["@ayuhito/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
};
```

You can remove ESM restrictions by using the following config:

```js
// .eslintrc.cjs
require("@ayuhito/eslint-config/patch");

module.exports = {
  extends: ["@ayuhito/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "unicorn/prefer-module": "off",
  },
};
```
