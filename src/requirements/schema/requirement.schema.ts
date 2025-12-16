import { Schema } from "mongoose";

export interface RequirementShema {
  name:String;
  email:String
  contact: Number;
  message: String;
}

export const IRequirementSchema = new Schema<RequirementShema>({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  contact: {
    type: Number,
    required: true,
  },
    message: {
    type: String,
    required: true,
  },
})
