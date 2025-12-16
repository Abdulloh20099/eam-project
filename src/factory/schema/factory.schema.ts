import { Schema, Types } from "mongoose";

export interface FactorySchema{
    subname:String,
    location:String,
    appointment:String,
    stirid:Number
}



export const IFactorySchema = new Schema<FactorySchema>( {
    subname:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    appointment:{
        type:String,
        required:true
    },
    stirid:{
        type:String,
        required:true,
        maxLength:11,
        minLength:9,
        unique:true
    }
})