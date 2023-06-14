export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extraInfo: Object;
};

type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {
	if (!arg) {
		callBack('Invalid argument!');
		return;
	}
	callBack(`called function with ${arg}`);
	return arg.toUpperCase();
}
