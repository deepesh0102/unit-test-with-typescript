import { calculateComplexity } from '../../app/doubles/Stubs';
describe.skip('Stubs test suite', () => {
	it('Calculate Complexity', () => {
		const someInfo = {
			length: 5,
			extraInfo: {
				field1: 'someInfo',
				field2: 'someInfo',
			},
		};

		const actual = calculateComplexity(someInfo as any);
		expect(actual).toBe(10);
	});
});
