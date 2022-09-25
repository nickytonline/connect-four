module.exports = {
	'*.json': ['prettier --write'],
	'*.md': ['prettier --write --prose-wrap always'],
	'*.{css,scss}': ['prettier --write'],
	'*.{ts}': ['prettier --write', 'eslint --fix', 'vitest --changed'],
	'*.svelte': ['prettier --write', 'eslint --fix', 'vitest --changed'],
};
