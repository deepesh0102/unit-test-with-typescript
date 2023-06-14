"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fakes_1 = require("../../app/doubles/Fakes");
describe.skip('Fakes test suite', function () {
    it('ToUpperCase - calls callback for invalid argument', function () {
        var actual = (0, Fakes_1.toUpperCaseWithCb)('', function () { });
        expect(actual).toBeUndefined();
    });
    it('ToUpperCase - calls callback for valid argument', function () {
        var actual = (0, Fakes_1.toUpperCaseWithCb)('abc', function () { });
        expect(actual).toBe('ABC');
    });
});
