"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../app/utils");
describe('Utils test suite', function () {
    it('should return uppercase of valid string', function () {
        // arrange
        var sut = utils_1.toUpperCase;
        var expected = 'ABC';
        // act
        var actual = sut(expected);
        // assert
        expect(actual).toBe(expected);
    });
    describe('ToUpperCase examples', function () {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'My-String', expected: 'MY-STRING' },
            { input: 'def', expected: 'DEF' },
        ])('$input toUpperCase should be $expected', function (_a) {
            var input = _a.input, expected = _a.expected;
            var actual = (0, utils_1.toUpperCase)(input);
            expect(actual).toBe(expected);
        });
    });
    describe('getStringInfo for arg My-String should', function () {
        test('return right length', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('return right lower case', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.lowerCase).toBe('my-string');
        });
        test('return right upper case', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
        });
        test('return right characters', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
            expect(actual.characters).toContain('M');
            expect(actual.characters).toEqual(expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-']));
        });
        test('return defined extra info', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.extraInfo).toBeDefined();
        });
        test('return right extra info', function () {
            var actual = (0, utils_1.getStringInfo)('My-String');
            expect(actual.extraInfo).toEqual({});
        });
    });
});
