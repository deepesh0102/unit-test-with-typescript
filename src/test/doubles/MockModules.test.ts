jest.mock('../../app/doubles/MockModules', () => ({
	...jest.requireActual('../../app/doubles/MockModules'),
	calculateStringComplexity: () => {
		return 10;
	},
}));

jest.mock('uuid', () => ({
	v4: () => '123',
}));

import { calculateStringComplexity, toLowerCaseWithId, toUpperCase } from '../../app/doubles/MockModules';

describe('Mock Modules test suit', () => {
	test('Calculate Complexity', () => {
		const result = calculateStringComplexity({} as any);
		console.log(result);
	});

	test('Keep Other Functions', () => {
		const result = toUpperCase('abc');
		console.log(result);
		expect(result).toBe('ABC');
	});

	test('string with id', () => {
		const result = toLowerCaseWithId('ABC');
		expect(result).toBe('abc123');
	});
});
