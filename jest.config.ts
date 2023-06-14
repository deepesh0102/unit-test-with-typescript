import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: [`${baseDir}/**/*.ts`],
	testMatch: [`${baseTestDir}/**/*.ts`],
	roots: ['<rootDir>/src/', '<rootDir>/src/test/'],
};

export default config;
