import {Request,Response, NextFunction } from "express";
import { errFun } from "../../utils/res.req.status.js";
import { RequiremementModel } from "../model/requirement.model.js";

class RequirementMiddleware{
    async RequirementCheck(req:Request,res:Response,next:NextFunction){
        try {
            const{name, email, contact, message}=req.body;

            console.log(name,'name');
            console.log(email,'email');
            console.log(contact,'contact');
            console.log(message,'message');


            if(!name){
                res.status(400).json(errFun(400,'ismigizni kiriting',true))
                return
            }
            if(!email){
                res.status(400).json(errFun(400,'email kiriting',true))
                return
            }
              if(!contact){
                res.status(400).json(errFun(400,'telefon raqamingizni kiriting',true))
                return
            }
              if(!message){
                res.status(400).json(errFun(400,'xabaringizni kiriting',true))
                return
            }
            next()
        } catch (error:any) {
            console.log(error.message);
            res.status(500).json(errFun(500,error.message,true))
            return          
        }
    }

    async RequirementCheckDelete (req:Request,res:Response,next:NextFunction){
        try {
            const {id}=req.params;

            if(!id){
                res.status(401).json(errFun(401,'id kiriting',true))
                return
            }

            const findRequirement = await RequiremementModel.findOne({_id:id})

            if(!findRequirement){
                res.status(404).json(errFun(404,'xabar topilmadi',true)) 
                return
        }

        next()
        } catch (error:any) {
            console.log(error.message);
            res.status(500).json(errFun(500,error.message,true))
            return
        }
    }
}

export const Requirement_Middleware = new RequirementMiddleware()