import { toUpperCaseWithCb } from '../../app/doubles/Fakes';

describe.skip('Fakes test suite', () => {
	it('ToUpperCase - calls callback for invalid argument', () => {
		const actual = toUpperCaseWithCb('', () => {});
		expect(actual).toBeUndefined();
	});

	it('ToUpperCase - calls callback for valid argument', () => {
		const actual = toUpperCaseWithCb('abc', () => {});
		expect(actual).toBe('ABC');
	});
});
