require("./patch");

module.exports = {
  extends: ["./profile/node"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "unicorn/prefer-module": "off",
  },
};
