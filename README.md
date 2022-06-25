# eslint-config

Personal ESLint Configs

Profiles:

- node

```js
// .eslintrc.js
require("@lotusdevshack/eslint-config/patch");

module.exports = {
  extends: ["@lotusdevshack/eslint-config/profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
};
```
