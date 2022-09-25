import { describe, expect, it } from 'vitest';

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
	it('should pass', () => {
		expect(true).toBe(true);
	});
});
