"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
(async function () {
    try {
        await mongoose_1.default.connect("mongodb://localhost/eam-project");
        console.log('mongoose db is connected');
        return true;
    }
    catch (error) {
        console.log({ status: 500, errorMsg: error });
    }
})();
