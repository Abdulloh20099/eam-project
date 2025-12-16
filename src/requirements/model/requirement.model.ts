import mongoose from "mongoose";
import { IRequirementSchema } from "../schema/requirement.schema.js";
import { RequirementShema } from "../schema/requirement.schema.js";

export const RequiremementModel = mongoose.model<RequirementShema>('requirements',  IRequirementSchema);