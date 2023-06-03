module.exports = [
	{
		files: ['*.json', '*.json5', '*.jsonc'],
		parser: 'jsonc-eslint-parser',
		extends: ['plugin:jsonc/recommended-with-json', 'plugin:jsonc/prettier'],
		rules: {},
	},
	{
		files: ['*.yml', '*.yaml'],
		parser: 'yaml-eslint-parser',
		extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
		rules: {},
	},
	{
		files: ['*.toml'],
		parser: 'toml-eslint-parser',
		extends: ['plugin:toml/standard'],
		rules: {},
	},
];
