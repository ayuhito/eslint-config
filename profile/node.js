const buildRules = require('./build');

const node = {
	root: true,
	ignorePatterns: [
		'*.min.*',
		'*.d.ts',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'out',
		'coverage',
		'public',
		'temp',
		'package-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		// ignore for in lint-staged
		'*.css',
		'*.png',
		'*.ico',
		'*.toml',
		'*.patch',
		'*.txt',
		'*.crt',
		'*.key',
		'Dockerfile',
		// force include
		'!.github',
		'!.vitepress',
		'!.vscode',
		// force exclude
		'.vitepress/cache',
	],
	env: {
		node: true,
		es2023: true,
	},
	overrides: [
		{
			files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
			plugins: ['promise', 'unicorn', 'simple-import-sort', 'import'],
			extends: [
				'eslint:recommended',
				'airbnb-base',
				'plugin:promise/recommended',
				'plugin:unicorn/recommended',
				'prettier',
			],
			rules: {
				// Just shared rules
			},
		},
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				allowAutomaticSingleRunInference: true,
				warnOnUnsupportedTypeScriptVersion: false,
				project: './tsconfig.json',
			},
			plugins: [
				'@typescript-eslint',
				'promise',
				'unicorn',
				'simple-import-sort',
				'import',
			],
			extends: [
				'airbnb-base',
				'plugin:@typescript-eslint/recommended',
				// "plugin:@typescript-eslint/recommended-requiring-type-checking",
				'airbnb-typescript/base',
				'plugin:promise/recommended',
				'plugin:unicorn/recommended',
				'prettier',
			],
			rules: {
				// Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-use-before-define': [
					'error',
					{ functions: false, classes: true, variables: true, typedefs: true },
				],
			},
		},
		{
			// Remove unicorn rules and add Vitest rules
			files: ['**/*.test.ts?(x)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				allowAutomaticSingleRunInference: true,
				warnOnUnsupportedTypeScriptVersion: false,
				project: './tsconfig.json',
			},
			plugins: [
				'@typescript-eslint',
				'promise',
				'vitest',
				'simple-import-sort',
				'import',
			],
			extends: [
				'airbnb-base',
				'plugin:@typescript-eslint/recommended',
				// "plugin:@typescript-eslint/recommended-requiring-type-checking",
				'airbnb-typescript/base',
				'plugin:promise/recommended',
				'prettier',
			],
			rules: {
				// Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-use-before-define': [
					'error',
					{ functions: false, classes: true, variables: true, typedefs: true },
				],
			},
		},
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
		},
	],
};

module.exports = buildRules(node);
