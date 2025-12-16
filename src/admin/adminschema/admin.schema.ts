import { Schema, Types } from "mongoose";

export interface adminschema{
    adminName:String,
    adminContact:Number,
    adminPassword:String
}

export const IadminSchema = new Schema<adminschema> ({
    adminName:{
        type:String,
        required:true
    },
    adminContact:{
        type:Number,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
})