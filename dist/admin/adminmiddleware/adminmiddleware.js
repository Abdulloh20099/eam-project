"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMiddle = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AdminMiddleware {
    async AdminCheck(req, res, next) {
        try {
            const { adminName, adminContact, adminPassword } = req.body;
            const adminObj = {
                adminName,
                adminContact,
                adminPassword,
            };
            if (!adminObj.adminName) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "isimni kiriting", true));
                return;
            }
            if (!adminObj.adminContact) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "raqamingizni kiriting", true));
                return;
            }
            if (!adminObj.adminPassword) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "parol kiriting", true));
                return;
            }
            const admin_key = process.env.ADMIN_PASSWORD;
            if (adminObj.adminPassword != admin_key) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "siz admin emas siz", true));
                return;
            }
            next();
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error.message);
            return;
        }
    }
    async AdminGetFactoryMiddle(req, res, next) {
        try {
            const tokenAdmin = req.headers.authorization || "";
            if (!tokenAdmin) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'token mavjud emas', true));
                return;
            }
            const tokenKey = process.env.ADMIN_TOKEN_KEY;
            const decodedTokenAdmin = jsonwebtoken_1.default.verify(tokenAdmin, `${tokenKey}`);
            if (decodedTokenAdmin.adminPassword == process.env.ADMIN_PASSWORD) {
                next();
            }
            else {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'token blan muammo', true));
            }
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
}
exports.AdminMiddle = new AdminMiddleware();
