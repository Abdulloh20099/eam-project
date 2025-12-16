"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IadminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IadminSchema = new mongoose_1.Schema({
    adminName: {
        type: String,
        required: true
    },
    adminContact: {
        type: Number,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    }
});
