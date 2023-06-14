import { StringUtils } from '../app/Hooks';

describe('Hooks test suite', () => {
	describe('StringUtils tests', () => {
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

		/* ERROR COVERAGE */
		/* ERROR COVERAGE */
		/* ERROR COVERAGE */
		it('Should throw error on invalid argument - function', () => {
			function expectError() {
				const actual = sut.toUpperCase('');
			}
			expect(expectError).toThrow();
			expect(expectError).toThrowError('Invalid argument!');
		});

		it('Should throw error on invalid argument - arrow function', () => {
			expect(() => {
				sut.toUpperCase('');
			}).toThrowError('Invalid argument!');
		});

		it('Should throw error on invalid argument - try catch block', (done) => {
			try {
				sut.toUpperCase('');
				done('GetStringInfo should throw error for invalid arg!');
			} catch (error) {
				expect(error).toBeInstanceOf(Error);
				expect(error).toHaveProperty('message', 'Invalid argument!');
				done();
			}
		});
	});
});
