"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resFun = resFun;
exports.errFun = errFun;
function resFun(status, data, dataObj, error) {
    return [{ status, data, dataObj, error }];
}
function errFun(status, errorMsg, error) {
    return [{ status, errorMsg, error }];
}
