"use strict";
/*******************************************************************/
/*  Spies is not directly inject inti test suit*/
/*  original functionality is preserved with Spies*/
/*  Spies usually track method calls*/
/*  Spies usually with class*/
/*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherStringUtils = void 0;
var OtherStringUtils = /** @class */ (function () {
    function OtherStringUtils() {
    }
    OtherStringUtils.prototype.callExternalService = function () {
        console.log('Calling external service!!!');
    };
    OtherStringUtils.prototype.toUpperCase = function (arg) {
        return arg.toUpperCase();
    };
    OtherStringUtils.prototype.logString = function (arg) {
        console.log(arg);
    };
    return OtherStringUtils;
}());
exports.OtherStringUtils = OtherStringUtils;
