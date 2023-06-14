import { toUpperCaseWithCallBack } from '../../app/doubles/Mocks';

describe('Mocks test suite', () => {
	describe.only('Tracking callbacks with Jest mocks', () => {
		const callBackMock = jest.fn();

		afterEach(() => {
			jest.clearAllMocks();
		});

		it('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCallBack('', callBackMock);
			expect(actual).toBeUndefined();
			expect(callBackMock).toBeCalledWith('Invalid argument!');
			expect(callBackMock).toBeCalledTimes(1);
		});

		it('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCallBack('abc', callBackMock);
			expect(actual).toBe('ABC');
			expect(callBackMock).toBeCalledWith('called function with abc');
			expect(callBackMock).toBeCalledTimes(1);
		});
	});

	describe('Tracking callbacks', () => {
		let cbArgs: any = [];
		let timesCalled = 0;

		function callBackMock(arg: string) {
			cbArgs.push(arg);
			timesCalled++;
		}

		afterEach(() => {
			// clearing tracking fields:
			cbArgs = [];
			timesCalled = 0;
		});

		it('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCallBack('', callBackMock);
			expect(actual).toBeUndefined();
			expect(cbArgs).toContain('Invalid argument!');
			expect(timesCalled).toBe(1);
		});

		it('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCallBack('abc', callBackMock);
			expect(actual).toBe('ABC');
			expect(cbArgs).toContain('called function with abc');
			expect(timesCalled).toBe(1);
		});
	});
});
