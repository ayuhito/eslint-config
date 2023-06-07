module.exports = [
	{
		files: ['*.json', '*.json5', '*.jsonc'],
		extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
		parser: 'jsonc-eslint-parser',
	},
	{
		files: ['*.yml', '*.yaml'],
		extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
		parser: 'yaml-eslint-parser',
	},
	{
		files: ['*.toml'],
		extends: ['plugin:toml/standard'],
		parser: 'toml-eslint-parser',
	},
];
