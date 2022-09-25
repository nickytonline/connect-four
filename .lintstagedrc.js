module.exports = {
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write --prose-wrap always"],
  "*.{css,scss}": ["prettier --write"],
  "*.{ts,tsx}": [
    "prettier --write",
    "eslint --fix",
    "vitest --changed",
  ]
};
