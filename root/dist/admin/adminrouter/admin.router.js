"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const admin_middleware_js_1 = require("../adminmiddleware/admin.middleware.js");
const admin_controller_js_1 = require("../admincontroller/admin.controller.js");
const factory_controller_js_1 = require("../../factory/controller/factory.controller.js");
const requirement_controller_js_1 = require("../../requirements/controller/requirement.controller.js");
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.get("/adminrequests", requirement_controller_js_1.Requirement_Controller.RequirementGet);
exports.adminRouter.get("/admingetfactory", 
/*AdminMiddle.AdminGetFactoryMiddle,*/
factory_controller_js_1.fatorycontroller.factoryGet);
exports.adminRouter.post("/admin", admin_middleware_js_1.AdminMiddle.AdminCheck, admin_controller_js_1.admin_contorller.adminControllerSignUp);
exports.adminRouter.put("/adminsignin", admin_controller_js_1.admin_contorller.adminControllerSignIn);
exports.adminRouter.delete("/adminrequestsdelete/:id", requirement_controller_js_1.Requirement_Controller.RequirementDelete);
