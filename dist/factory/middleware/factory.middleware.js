"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryMiddleareFun = void 0;
const res_req_status_js_1 = require("../../utils/res.req.status.js");
const factory_model_js_1 = require("../models/factory.model.js");
class FactoryMiddleware {
    async FactoryMiddle(req, res, next) {
        try {
            const { subname, location, appointment, stirid } = req.body;
            const factoryObj = {
                subname,
                location,
                appointment,
                stirid
            };
            if (!factoryObj.subname) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'zavodni nomini kiriting', true));
                return;
            }
            ;
            if (!factoryObj.location) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'zavodni locatsiyasini kiriting', true));
                return;
            }
            ;
            if (!factoryObj.appointment) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'zavodni majburiyatini kiriting', true));
                return;
            }
            ;
            if (!factoryObj.stirid) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'zavodni stiridsini  kiriting', true));
                return;
            }
            ;
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error, true));
            return;
        }
    }
    async FactorytoFind(req, res, next) {
        try {
            const { stirid } = req.params;
            console.log(stirid);
            if (!stirid) {
                res.status(401).send((0, res_req_status_js_1.errFun)(401, "stididni kiriting", true));
                return;
            }
            const stiridFactory = await factory_model_js_1.FactoryModel.findOne({ stirid });
            if (!stiridFactory) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'stirid topilmadi', true));
                return;
            }
            next();
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error, true));
            console.log(error);
            return;
        }
    }
    async FactorytoDelete(req, res, next) {
        try {
            const { stirid } = req.body;
            if (!stirid) {
                res.status(401).json((0, res_req_status_js_1.errFun)(401, 'stiridni kiriting', true));
                return;
            }
            ;
            const findFactorytoDelete = await factory_model_js_1.FactoryModel.findOne({ stirid }).lean();
            if (!findFactorytoDelete) {
                res.status(404).json((0, res_req_status_js_1.errFun)(404, 'bunaka zavod mavjud emas', true));
                return;
            }
            ;
            next();
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error.message);
            return;
        }
    }
}
exports.FactoryMiddleareFun = new FactoryMiddleware();
