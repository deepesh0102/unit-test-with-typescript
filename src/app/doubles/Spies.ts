/*******************************************************************/
/*  Spies is not directly inject inti test suit*/
/*  original functionality is preserved with Spies*/
/*  Spies usually track method calls*/
/*  Spies usually with class*/
/*******************************************************************/

export class OtherStringUtils {
	public callExternalService() {
		console.log('Calling external service!!!');
	}

	public toUpperCase(arg: string) {
		return arg.toUpperCase();
	}

	public logString(arg: string) {
		console.log(arg);
	}
}
