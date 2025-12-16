"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const factory_schema_js_1 = require("../schema/factory.schema.js");
exports.FactoryModel = mongoose_1.default.model("factories", factory_schema_js_1.IFactorySchema);
