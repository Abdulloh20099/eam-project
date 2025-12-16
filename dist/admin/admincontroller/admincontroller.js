"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_contorller = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const adminmodel_js_1 = require("../adminmodel/adminmodel.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AdminController {
    async adminControllerSignUp(req, res) {
        try {
            const { adminName, adminContact, adminPassword } = req.body;
            const adminObj = {
                adminName,
                adminContact,
                adminPassword,
            };
            const findAdmin = await adminmodel_js_1.adminModel.findOne({
                adminPassword: adminPassword,
            });
            if (findAdmin) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "admin mavjud", true));
                return;
            }
            const tokenAdmin = {
                adminPassword,
            };
            const tokenKey = process.env.ADMIN_TOKEN_KEY;
            const token = jsonwebtoken_1.default.sign(tokenAdmin, `${tokenKey}`);
            console.log(token);
            await adminmodel_js_1.adminModel.create(adminObj);
            res.status(201).send((0, res_req_status_js_1.resFun)(201, token, adminObj, false));
            return;
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error.message);
            return;
        }
    }
    async adminControllerSignIn(req, res) {
        try {
            const { adminName, adminContact, adminPassword } = req.body;
            const secret_admin_password = process.env.ADMIN_PASSWORD;
            const findAdmin = await adminmodel_js_1.adminModel.findOne(adminName);
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
}
exports.admin_contorller = new AdminController();
