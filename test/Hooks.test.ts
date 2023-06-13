import { StringUtils } from '../src/Hooks';

describe('Hooks test suite', () => {
	describe.only('StringUtils tests', () => {
		let sut: StringUtils;

		beforeEach(() => {
			sut = new StringUtils();
			console.log('Setup');
		});

		afterEach(() => {
			// clearing mocks
			console.log('Teardown');
		});

		it('Should return correct upperCase', () => {
			const actual = sut.toUpperCase('abc');

			expect(actual).toBe('ABC');
			console.log('Actual test');
		});
	});
});
