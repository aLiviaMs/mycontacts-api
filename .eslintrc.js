module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: 'airbnb-base',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: [2, 'tab'],
		'class-methods-use-this': 'off',
		'no-tabs': 0,
	},
};
