import { OtherStringUtils } from '../../app/doubles/Spies';
describe.skip('Spies test suite', () => {
	describe('Tracking callbacks tests with spies', () => {
		let sut: OtherStringUtils;

		beforeEach(() => {
			sut = new OtherStringUtils();
		});

		test('Use a spy to track calls', () => {
			const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
			sut.toUpperCase('asa');
			expect(toUpperCaseSpy).toBeCalledWith('asa');
		});

		test('Use a spy to track calls to other module', () => {
			const consoleLogSpy = jest.spyOn(console, 'log');
			sut.logString('abc');
			expect(consoleLogSpy).toBeCalledWith('abc');
		});

		test('Use a spy to replace the implementation of a method', () => {
			jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
				console.log('calling mocked implementation!!!');
			});
			sut.callExternalService();
		});

		test('Should test call External Service function', () => {
			const consoleLogSpy = jest.spyOn(console, 'log');
			sut.callExternalService();
			expect(consoleLogSpy).toBeCalled();
		});
	});
});
