"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stubs_1 = require("../../app/doubles/Stubs");
describe.skip('Stubs test suite', function () {
    it('Calculate Complexity', function () {
        var someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someInfo',
            },
        };
        var actual = (0, Stubs_1.calculateComplexity)(someInfo);
        expect(actual).toBe(10);
    });
});
