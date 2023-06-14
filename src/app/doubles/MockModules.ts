import { v4 } from 'uuid';

export type stringInfoDetails = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extraInfo: Object;
};

export function calculateStringComplexity(stringInfo: stringInfoDetails) {
	return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCase(arg: string) {
	return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
	return arg.toLowerCase() + v4();
}
