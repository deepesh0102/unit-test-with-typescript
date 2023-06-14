"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('../../app/doubles/MockModules', function () { return (__assign(__assign({}, jest.requireActual('../../app/doubles/MockModules')), { calculateStringComplexity: function () {
        return 10;
    } })); });
jest.mock('uuid', function () { return ({
    v4: function () { return '123'; },
}); });
var MockModules_1 = require("../../app/doubles/MockModules");
describe('Mock Modules test suit', function () {
    test('Calculate Complexity', function () {
        var result = (0, MockModules_1.calculateStringComplexity)({});
        console.log(result);
    });
    test('Keep Other Functions', function () {
        var result = (0, MockModules_1.toUpperCase)('abc');
        console.log(result);
        expect(result).toBe('ABC');
    });
    test('string with id', function () {
        var result = (0, MockModules_1.toLowerCaseWithId)('ABC');
        expect(result).toBe('abc123');
    });
});
