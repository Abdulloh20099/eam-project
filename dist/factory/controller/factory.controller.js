"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorycontroller = void 0;
const factory_model_js_1 = require("../models/factory.model.js");
const res_req_status_js_1 = require("../../utils/res.req.status.js");
class FactoryController {
    async factoryCount(req, res) {
        try {
            const factorycount = await factory_model_js_1.FactoryModel.countDocuments();
            res.status(201).send({ status: 201, count: factorycount, error: false });
            return;
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            return;
        }
    }
    async factoryGet(req, res) {
        try {
            const getFactory = await factory_model_js_1.FactoryModel.find().lean();
            console.log(getFactory);
            res.status(201).send(getFactory);
            return;
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error);
            return;
        }
    }
    async factoryGetOne(req, res) {
        try {
            const { stirid } = req.params;
            console.log(stirid);
            const factoryObj = await factory_model_js_1.FactoryModel.findOne({ stirid }).lean();
            if (!factoryObj) {
                res.status(404).send((0, res_req_status_js_1.errFun)(404, 'stirid topilmadi', true));
                return;
            }
            res.status(201).send((0, res_req_status_js_1.resFun)(201, `${stirid}`, factoryObj, false));
            return;
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error, true));
            console.log(error);
            return;
        }
    }
    async factoryCreat(req, res) {
        try {
            const { subname, location, appointment, stirid } = req.body;
            console.log(subname, 'subname');
            console.log(location, 'location');
            console.log(appointment, 'appointment');
            console.log(stirid, 'stirid');
            const createFactoryObj = {
                subname,
                location,
                appointment,
                stirid,
            };
            const stiridUnique = await factory_model_js_1.FactoryModel.findOne({ stirid });
            console.log(stiridUnique, 'vfd');
            if (stiridUnique?.stirid == createFactoryObj.stirid) {
                res.status(403).json((0, res_req_status_js_1.errFun)(403, 'bunaqa zavod mavjud', true));
                console.log(stiridUnique?.stirid, 'dsfds');
                return;
            }
            const factoryObj = await factory_model_js_1.FactoryModel.create(createFactoryObj);
            await factoryObj.save();
            res.status(201).send((0, res_req_status_js_1.resFun)(201, `${createFactoryObj.stirid}`, createFactoryObj, false));
            return;
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error.message);
            return;
        }
    }
    async factoryCheak(res, req) { }
    async factoryDelete(req, res) {
        try {
            const { stirid } = req.params;
            const findFactory = await factory_model_js_1.FactoryModel.find({ stirid }).lean();
            await factory_model_js_1.FactoryModel.deleteOne({ stirid });
            res.status(201).send((0, res_req_status_js_1.resFun)(201, `${stirid}`, findFactory, false));
            return;
        }
        catch (error) {
            res.status(500).json((0, res_req_status_js_1.errFun)(500, error.message, true));
            console.log(error.message);
            return;
        }
    }
}
exports.fatorycontroller = new FactoryController();
