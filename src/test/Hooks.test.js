"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hooks_1 = require("../app/Hooks");
describe('Hooks test suite', function () {
    describe('StringUtils tests', function () {
        var sut;
        beforeEach(function () {
            sut = new Hooks_1.StringUtils();
            console.log('Setup');
        });
        afterEach(function () {
            // clearing mocks
            console.log('Teardown');
        });
        it('Should return correct upperCase', function () {
            var actual = sut.toUpperCase('abc');
            expect(actual).toBe('ABC');
            console.log('Actual test');
        });
        /* ERROR COVERAGE */
        /* ERROR COVERAGE */
        /* ERROR COVERAGE */
        it('Should throw error on invalid argument - function', function () {
            function expectError() {
                var actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');
        });
        it('Should throw error on invalid argument - arrow function', function () {
            expect(function () {
                sut.toUpperCase('');
            }).toThrowError('Invalid argument!');
        });
        it('Should throw error on invalid argument - try catch block', function (done) {
            try {
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!');
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
                done();
            }
        });
    });
});
