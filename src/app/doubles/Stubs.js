"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateComplexity = void 0;
function calculateComplexity(stringInfo) {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}
exports.calculateComplexity = calculateComplexity;
