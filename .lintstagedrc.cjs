module.exports = {
	'*.json': ['prettier --write'],
	'*.md': ['prettier --write --prose-wrap always'],
	'*.{css,scss}': ['prettier --write'],
	'*.{ts,svelte}': [
		'prettier --write',
		'eslint --fix',
		'vitest run related --passWithNoTests',
	],
};
