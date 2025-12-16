"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_contorller = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const admin_model_js_1 = require("../adminmodel/admin.model.js");
class AdminController {
    async adminControllerSignUp(req, res) {
        try {
            const { adminName, adminContact, adminPassword } = req.body;
            const adminObj = {
                adminName,
                adminContact,
                adminPassword,
            };
            console.log(adminName);
            console.log(adminContact);
            console.log(adminPassword);
            const findAdmin = await admin_model_js_1.adminModel.findOne({
                adminPassword: adminPassword,
            });
            if (findAdmin) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, "admin mavjud", true));
                console.log('vnfdkjn');
                return;
            }
            const tokenAdmin = {
                adminPassword,
            };
            await admin_model_js_1.adminModel.create(adminObj);
            res.status(201).send((0, res_req_status_js_1.resFun)(201, 'admin xush kelibsiz', adminObj, false));
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
            const { adminContact, adminPassword } = req.body;
            console.log(adminContact, adminPassword);
            const findAdmin = await admin_model_js_1.adminModel.findOne({ adminContact: adminContact });
            const findAdminPassword = await admin_model_js_1.adminModel.findOne({ adminPassword: adminPassword });
            if (!findAdmin) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'admin kontakt notogri', true));
                console.log('fmskld');
                return;
            }
            if (!findAdminPassword) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'admin parol notogri', true));
                console.log('akcasmdlka');
                return;
            }
            res.status(201).send((0, res_req_status_js_1.resFun)(201, 'admin xush kelibsiz', findAdmin, false));
            return;
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
}
exports.admin_contorller = new AdminController();
