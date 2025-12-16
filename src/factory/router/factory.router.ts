import { Router } from "express";
import { FactoryMiddleareFun } from "../middleware/factory.middleware.js";
import { fatorycontroller } from "../controller/factory.controller.js";


export const factoryRouter = Router()


// factoryRouter.get("/factoryGet",fatorycontroller.factoryGet)
factoryRouter.get("/factorygetOne/:stirid",FactoryMiddleareFun.FactorytoFind,fatorycontroller.factoryGetOne)
factoryRouter.get("/factorycount",fatorycontroller.factoryCount)
factoryRouter.post("/factory",/* FactoryMiddleareFun.FactoryMiddle,*/ fatorycontroller.factoryCreat);
factoryRouter.delete("/factory/:stirid",FactoryMiddleareFun.FactorytoDelete,fatorycontroller.factoryDelete)