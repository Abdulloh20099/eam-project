import { Router } from "express";
import { AdminMiddle } from "../adminmiddleware/admin.middleware.js";
import { admin_contorller } from "../admincontroller/admin.controller.js";
import { factoryRouter } from "../../factory/router/factory.router.js";
import { fatorycontroller } from "../../factory/controller/factory.controller.js";
import { json } from "express";
import { Requirement_Middleware } from "../../requirements/middleware/requirement.middleware.js";
import { Requirement_Controller } from "../../requirements/controller/requirement.controller.js";


export const adminRouter = Router();


adminRouter.get("/adminrequests",Requirement_Controller.RequirementGet)
adminRouter.get(
  "/admingetfactory",
  /*AdminMiddle.AdminGetFactoryMiddle,*/
  fatorycontroller.factoryGet
);
adminRouter.post(
  "/admin",
  AdminMiddle.AdminCheck,
  admin_contorller.adminControllerSignUp
);
adminRouter.put("/adminsignin",admin_contorller.adminControllerSignIn)
adminRouter.delete("/adminrequestsdelete/:id",Requirement_Controller.RequirementDelete)