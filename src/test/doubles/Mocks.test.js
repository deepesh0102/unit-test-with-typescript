"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mocks_1 = require("../../app/doubles/Mocks");
/******************************************************************************/
/*  MOcks is used for How many time called function AND What arguments passed */
/******************************************************************************/
describe.skip('Mocks test suite', function () {
    describe('Tracking callbacks with Jest mocks', function () {
        var callBackMock = jest.fn();
        afterEach(function () {
            jest.clearAllMocks();
        });
        it('calls callback for invalid argument - track calls', function () {
            var actual = (0, Mocks_1.toUpperCaseWithCallBack)('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toBeCalledWith('Invalid argument!');
            expect(callBackMock).toBeCalledTimes(1);
        });
        it('calls callback for valid argument - track calls', function () {
            var actual = (0, Mocks_1.toUpperCaseWithCallBack)('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toBeCalledWith('called function with abc');
            expect(callBackMock).toBeCalledTimes(1);
        });
    });
    describe('Tracking callbacks', function () {
        var cbArgs = [];
        var timesCalled = 0;
        function callBackMock(arg) {
            cbArgs.push(arg);
            timesCalled++;
        }
        afterEach(function () {
            // clearing tracking fields:
            cbArgs = [];
            timesCalled = 0;
        });
        it('calls callback for invalid argument - track calls', function () {
            var actual = (0, Mocks_1.toUpperCaseWithCallBack)('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument!');
            expect(timesCalled).toBe(1);
        });
        it('calls callback for valid argument - track calls', function () {
            var actual = (0, Mocks_1.toUpperCaseWithCallBack)('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);
        });
    });
});
