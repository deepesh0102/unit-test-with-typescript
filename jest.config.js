"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseDir = '<rootDir>/src/app/doubles';
var baseTestDir = '<rootDir>/src/test/doubles';
var config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ["".concat(baseDir, "/**/*.ts")],
    testMatch: ["".concat(baseTestDir, "/**/*.ts")],
    roots: ['<rootDir>/src/', '<rootDir>/src/test/'],
};
exports.default = config;
