"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requirementRouter = void 0;
const express_1 = require("express");
const requirement_controller_js_1 = require("../controller/requirement.controller.js");
const requirement_middleware_js_1 = require("../middleware/requirement.middleware.js");
exports.requirementRouter = (0, express_1.Router)();
//requirementRouter.get("/requestsGet",Requirement_Controller.RequirementGet)
exports.requirementRouter.post("/requests", requirement_middleware_js_1.Requirement_Middleware.RequirementCheck, requirement_controller_js_1.Requirement_Controller.RequirementCreat);
