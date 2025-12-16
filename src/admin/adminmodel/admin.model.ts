
import mongoose from "mongoose";
import { adminschema, IadminSchema } from "../adminschema/admin.schema.js";

export const adminModel = mongoose.model<adminschema>('admins', IadminSchema)