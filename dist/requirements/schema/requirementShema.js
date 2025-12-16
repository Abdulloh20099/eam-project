"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRequirementSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IRequirementSchema = new mongoose_1.Schema({
    requests: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
});
