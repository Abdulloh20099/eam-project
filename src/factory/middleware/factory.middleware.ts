import { NextFunction, Request, Response } from "express";
import { errFun } from "../../utils/res.req.status.js";
import { FactoryModel } from "../models/factory.model.js";


class FactoryMiddleware{
    async FactoryMiddle(req:Request,res:Response,next:NextFunction){
        try {
            const{subname,location,appointment,stirid}= req.body;

            const factoryObj={
                subname,
                location,
                appointment,
                stirid
            };

            if(!factoryObj.subname){
                res.status(404).send(errFun(404,'zavodni nomini kiriting', true))
                return
            };

            if(!factoryObj.location){
                res.status(404).send(errFun(404,'zavodni locatsiyasini kiriting', true))
                return
            };
             if(!factoryObj.appointment){
                res.status(404).send(errFun(404,'zavodni majburiyatini kiriting', true))
                return
            };

             if(!factoryObj.stirid){
                res.status(404).send(errFun(404,'zavodni stiridsini  kiriting', true))
                return
            };
            
           next()

        } catch (error: any) {
            console.log(error);
            res.status(500).json(errFun(500,error,true));
            return
        }
    }
    async FactorytoFind (req:Request,res:Response,next: NextFunction){
        try {
            const {stirid} = req.params;

            console.log(stirid);
            




            if(!stirid){
                res.status(401).send(errFun(401,"stididni kiriting",true));
                return
            }

            const stiridFactory = await FactoryModel.findOne({stirid});

            if(!stiridFactory){
                res.status(404).send(errFun(404,'stirid topilmadi',true));
                return
            }

            next()
        } catch (error:any) {
            res.status(500).json(errFun(500,error,true));
            console.log(error);
            
            return
        }
    }
    async FactorytoDelete (req:Request,res:Response,next:NextFunction){
        try {
            const {stirid}=req.body;

            if(!stirid){
                res.status(401).json(errFun(401,'stiridni kiriting',true));
                return
            };

            const findFactorytoDelete = await FactoryModel.findOne({stirid}).lean();

            if(!findFactorytoDelete){
                res.status(404).json(errFun(404,'bunaka zavod mavjud emas',true));
                return
            };
            next()
        } catch (error:any) {
            res.status(500).json(errFun(500,error.message,true));
            console.log(error.message);
            return;
            
        }
    }
}

export const FactoryMiddleareFun = new FactoryMiddleware()

