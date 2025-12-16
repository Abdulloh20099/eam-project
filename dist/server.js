"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./utils/db.connectin.js");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const factory_router_js_1 = require("./factory/router/factory.router.js");
const admin_router_js_1 = require("./admin/adminrouter/admin.router.js");
const requirement_router_js_1 = require("./requirements/router/requirement.router.js");
async function server() {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        //Routers
        app.use('/api', factory_router_js_1.factoryRouter);
        app.use('/api', admin_router_js_1.adminRouter);
        app.use('/api', requirement_router_js_1.requirementRouter);
        const ServerPORT = Number(process.env.PORT);
        app.listen(ServerPORT, '0.0.0.0', () => {
            console.log(`running ${ServerPORT}...`);
        });
    }
    catch (error) {
        console.log({ status: 500, errorMsg: error });
        return;
    }
}
server();
