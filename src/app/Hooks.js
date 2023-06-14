"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.prototype.toUpperCase = function (arg) {
        if (!arg) {
            throw new Error('Invalid argument!');
        }
        return arg.toUpperCase();
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
