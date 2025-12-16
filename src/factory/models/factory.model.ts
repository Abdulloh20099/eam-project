import mongoose from "mongoose";
import { IFactorySchema } from "../schema/factory.schema.js";
import { FactorySchema } from "../schema/factory.schema.js";

export const FactoryModel = mongoose.model<FactorySchema>("factories", IFactorySchema);


