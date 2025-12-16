"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requirement_Controller = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const requirement_model_js_1 = require("../model/requirement.model.js");
class RequirementsController {
    async RequirementGet(req, res) {
        try {
            const requirementGet = await requirement_model_js_1.RequiremementModel.find();
            res.status(201).send({ status: 201, RequirementObj: requirementGet, error: false });
            return;
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
    async RequirementCreat(req, res) {
        try {
            const { name, email, contact, message } = req.body;
            console.log(name, 'name');
            console.log(email, 'email');
            console.log(contact, 'contac');
            console.log(message, 'message');
            const requirementObj = {
                name,
                email,
                contact,
                message
            };
            const createRequirement = await requirement_model_js_1.RequiremementModel.create(requirementObj);
            res.status(201).send((0, res_req_status_js_1.resFun)(201, "sizning xabaringiz saqlandi!", requirementObj, false));
            return;
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
    async RequirementDelete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                console.log(id);
                res.status(404).json((0, res_req_status_js_1.errFun)(404, 'xabar topilmadi', true));
                return;
            }
            console.log(id);
            const deleteRequirement = await requirement_model_js_1.RequiremementModel.deleteOne({ _id: id });
            res.status(200).send({ deleteRequirement });
            return;
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
}
exports.Requirement_Controller = new RequirementsController();
