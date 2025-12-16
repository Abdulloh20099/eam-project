"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requirement_Middleware = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const requirement_model_js_1 = require("../model/requirement.model.js");
class RequirementMiddleware {
    async RequirementCheck(req, res, next) {
        try {
            const { name, email, contact, message } = req.body;
            console.log(name, 'name');
            console.log(email, 'email');
            console.log(contact, 'contact');
            console.log(message, 'message');
            if (!name) {
                res.status(400).json((0, res_req_status_js_1.errFun)(400, 'ismigizni kiriting', true));
                return;
            }
            if (!email) {
                res.status(400).json((0, res_req_status_js_1.errFun)(400, 'email kiriting', true));
                return;
            }
            if (!contact) {
                res.status(400).json((0, res_req_status_js_1.errFun)(400, 'telefon raqamingizni kiriting', true));
                return;
            }
            if (!message) {
                res.status(400).json((0, res_req_status_js_1.errFun)(400, 'xabaringizni kiriting', true));
                return;
            }
            next();
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
    async RequirementCheckDelete(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'id kiriting', true));
                return;
            }
            const findRequirement = await requirement_model_js_1.RequiremementModel.findOne({ _id: id });
            if (!findRequirement) {
                res.status(404).json((0, res_req_status_js_1.errFun)(404, 'xabar topilmadi', true));
                return;
            }
            next();
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
}
exports.Requirement_Middleware = new RequirementMiddleware();
