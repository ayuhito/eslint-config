# eslint-config

Personal ESLint Config for Node.js and TypeScript.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@ayuhito/eslint-config"],
  parserOptions: { tsconfigRootDir: __dirname },
};
```

You can remove ESM restrictions by using the following config:

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@ayuhito/eslint-config"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "unicorn/prefer-module": "off",
  },
};
```
