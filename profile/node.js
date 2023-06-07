const buildRules = require('./build');
const base = require('./shared/base');
const overrides = require('./shared/overrides');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 * @remark This can be removed when flat configs are stable
 */
require('@rushstack/eslint-patch/modern-module-resolution');

const node = {
	...base,
	overrides: [
		{
			files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
			plugins: ['simple-import-sort', 'import'],
			extends: ['standard', 'plugin:unicorn/recommended', 'prettier'],
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
				tsconfigRootDir: __dirname,
				project: './tsconfig.json',
			},
			plugins: ['simple-import-sort', 'import'],
			extends: [
				'standard-with-typescript',
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
			env: {
				...base.env,
				'vitest-globals/env': true,
			},
			parserOptions: {
				sourceType: 'module',
				allowAutomaticSingleRunInference: true,
				warnOnUnsupportedTypeScriptVersion: false,
				tsconfigRootDir: __dirname,
				project: './tsconfig.json',
			},
			plugins: ['simple-import-sort', 'import', 'vitest'],
			extends: [
				'standard-with-typescript',
				'plugin:vitest-globals/recommended',
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
		...overrides,
	],
};

module.exports = buildRules(node);
