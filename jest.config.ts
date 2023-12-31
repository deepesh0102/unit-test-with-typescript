import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/doubles';
const baseTestDir = '<rootDir>/src/test/doubles';

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
