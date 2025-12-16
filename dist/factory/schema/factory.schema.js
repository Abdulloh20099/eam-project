"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFactorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.IFactorySchema = new mongoose_1.Schema({
    subname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    appointment: {
        type: String,
        required: true
    },
    stirid: {
        type: String,
        required: true,
        maxLength: 11,
        minLength: 9,
        unique: true
    }
});
