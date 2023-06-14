"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseWithCallBack = void 0;
function toUpperCaseWithCallBack(arg, callBack) {
    if (!arg) {
        callBack('Invalid argument!');
        return;
    }
    callBack("called function with ".concat(arg));
    return arg.toUpperCase();
}
exports.toUpperCaseWithCallBack = toUpperCaseWithCallBack;
