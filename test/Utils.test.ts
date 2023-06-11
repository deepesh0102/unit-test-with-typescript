import { toUpperCase } from '../src/utils';

describe('Utils test suite', () => {

	it('should return uppercase of valid string', () => {
		// arrange
		const sut = toUpperCase;
		const expected = 'ABC';

		// act
		const actual = sut(expected);

		// assert
		expect(actual).toBe(expected);
	}); 
});
