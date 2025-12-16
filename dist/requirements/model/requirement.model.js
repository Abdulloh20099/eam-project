"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiremementModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const requirement_schema_js_1 = require("../schema/requirement.schema.js");
exports.RequiremementModel = mongoose_1.default.model('requirements', requirement_schema_js_1.IRequirementSchema);
