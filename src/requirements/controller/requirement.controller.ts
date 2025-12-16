import { Request,Response } from "express";
import { errFun, resFun } from "../../utils/res.req.status.js";
import { RequiremementModel } from "../model/requirement.model.js";

class RequirementsController {
    async RequirementGet (req:Request,res:Response){
        try {
            const requirementGet = await RequiremementModel.find();
            

            res.status(201).send({status:201,RequirementObj:requirementGet,error:false})
            return
        } catch (error:any) {
            console.log(error.message);
            res.status(500).json(errFun(500,error.message,true))
            return
            
        }
    }
    async RequirementCreat(req:Request,res:Response) {
        try {
            const {name,email,contact,message}=req.body;

            console.log(name,'name');
            console.log(email,'email');
            console.log(contact,'contac');
            console.log(message,'message');       
           
            
            const requirementObj={
                name,
                email,
                contact,
                message
            }


            const createRequirement = await RequiremementModel.create(requirementObj);

            res.status(201).send(resFun(201,"sizning xabaringiz saqlandi!",requirementObj,false))
            return
        } catch (error:any) {
            console.log(error.message);
            res.status(500).json(errFun(500,error.message,true))
            return
            
        }
    }
    async RequirementDelete(req:Request,res:Response){
        try {
            const {id} = req.params;

             if(!id){
                 console.log(id);
                 res.status(404).json(errFun(404,'xabar topilmadi',true))
                 return
             }


            console.log(id);
            

           const deleteRequirement = await RequiremementModel.deleteOne({_id:id})

           res.status(200).send({deleteRequirement})
           return
        } catch (error:any) {
            console.log(error.message);
            res.status(500).json(errFun(500,error.message,true));
            return
        }
    }
}




export const Requirement_Controller = new RequirementsController()