import { Router } from "express";
import { Requirement_Controller } from "../controller/requirement.controller.js";
import { Requirement_Middleware } from "../middleware/requirement.middleware.js";

export const requirementRouter = Router()

//requirementRouter.get("/requestsGet",Requirement_Controller.RequirementGet)
requirementRouter.post("/requests",Requirement_Middleware.RequirementCheck,Requirement_Controller.RequirementCreat)