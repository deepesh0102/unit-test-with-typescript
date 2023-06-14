"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spies_1 = require("../../app/doubles/Spies");
describe.skip('Spies test suite', function () {
    describe('Tracking callbacks tests with spies', function () {
        var sut;
        beforeEach(function () {
            sut = new Spies_1.OtherStringUtils();
        });
        test('Use a spy to track calls', function () {
            var toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('asa');
            expect(toUpperCaseSpy).toBeCalledWith('asa');
        });
        test('Use a spy to track calls to other module', function () {
            var consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toBeCalledWith('abc');
        });
        test('Use a spy to replace the implementation of a method', function () {
            jest.spyOn(sut, 'callExternalService').mockImplementation(function () {
                console.log('calling mocked implementation!!!');
            });
            sut.callExternalService();
        });
        test('Should test call External Service function', function () {
            var consoleLogSpy = jest.spyOn(console, 'log');
            sut.callExternalService();
            expect(consoleLogSpy).toBeCalled();
        });
    });
});
