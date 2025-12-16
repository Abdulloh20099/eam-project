"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryRouter = void 0;
const express_1 = require("express");
const factory_middleware_js_1 = require("../middleware/factory.middleware.js");
const factory_controller_js_1 = require("../controller/factory.controller.js");
exports.factoryRouter = (0, express_1.Router)();
// factoryRouter.get("/factoryGet",fatorycontroller.factoryGet)
exports.factoryRouter.get("/factorygetOne/:stirid", factory_middleware_js_1.FactoryMiddleareFun.FactorytoFind, factory_controller_js_1.fatorycontroller.factoryGetOne);
exports.factoryRouter.get("/factorycount", factory_controller_js_1.fatorycontroller.factoryCount);
exports.factoryRouter.post("/factory", /* FactoryMiddleareFun.FactoryMiddle,*/ factory_controller_js_1.fatorycontroller.factoryCreat);
exports.factoryRouter.delete("/factory/:stirid", factory_middleware_js_1.FactoryMiddleareFun.FactorytoDelete, factory_controller_js_1.fatorycontroller.factoryDelete);
