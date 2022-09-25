module.exports = {
	'*.json': ['prettier --write'],
	'*.md': ['prettier --write --prose-wrap always'],
	'*.{css,scss}': ['prettier --write'],
	'*.ts': ['prettier --write', 'eslint --fix', 'vitest run related'],
	'*.svelte': ['prettier --write', 'eslint --fix', 'vitest run related'],
};
