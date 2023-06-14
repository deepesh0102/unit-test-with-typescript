"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCaseWithId = exports.toUpperCase = exports.calculateStringComplexity = void 0;
var uuid_1 = require("uuid");
function calculateStringComplexity(stringInfo) {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}
exports.calculateStringComplexity = calculateStringComplexity;
function toUpperCase(arg) {
    return arg.toUpperCase();
}
exports.toUpperCase = toUpperCase;
function toLowerCaseWithId(arg) {
    return arg.toLowerCase() + (0, uuid_1.v4)();
}
exports.toLowerCaseWithId = toLowerCaseWithId;
