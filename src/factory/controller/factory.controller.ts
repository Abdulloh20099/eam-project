import { Request, Response } from "express";
import  {FactoryModel}  from "../models/factory.model.js";
import { resFun, errFun } from "../../utils/res.req.status.js";

class FactoryController {
  async factoryCount(req:Request,res:Response){
    try {
      const factorycount = await FactoryModel.countDocuments();
      res.status(201).send({status:201,count:factorycount,error:false})
      return
    } catch (error:any) {
      console.log(error.message);
      res.status(500).json(errFun(500,error.message,true));
      return
    }
  } 
  async factoryGet(req:Request,res:Response) {
    try {
      const getFactory = await FactoryModel.find().lean()

      console.log(getFactory);

      res.status(201).send(getFactory);
      return
    } catch (error:any) {
      res.status(500).json(errFun(500,error.message,true));
      console.log(error);
      
      return
    }
  }
  async factoryGetOne(req:Request,res:Response){
    try {
      const{stirid}= req.params;

      console.log(stirid);
      

     const factoryObj = await FactoryModel.findOne( {stirid} ).lean();

      if(!factoryObj){
                res.status(404).send(errFun(404,'stirid topilmadi',true));
                return;
      }

      
      res.status(201).send(resFun(201,`${stirid}`, factoryObj, false ));
      return

    } catch (error:any) {
      res.status(500).json(errFun(500,error,true));
      console.log(error);
      
      return
    }
  }

  async factoryCreat(req: Request, res: Response) {
    try {
      const { subname, location, appointment, stirid } = req.body;

      console.log(subname,'subname');
      console.log(location,'location');
      console.log(appointment,'appointment');
      console.log(stirid,'stirid');
      
      
      

      const createFactoryObj = {
        subname,
        location,
        appointment,
        stirid,
      };

      const stiridUnique = await FactoryModel.findOne({stirid});

      console.log(stiridUnique, 'vfd');
      

        if(stiridUnique?.stirid == createFactoryObj.stirid){
          res.status(403).json(errFun(403,'bunaqa zavod mavjud',true));
          console.log(stiridUnique?.stirid,'dsfds');

          return
        }


      const factoryObj = await FactoryModel.create(createFactoryObj);
      await factoryObj.save();

      res.status(201).send(resFun(201,`${createFactoryObj.stirid}`,createFactoryObj,false));
      return;
    } catch (error:any) {
        res.status(500).json(errFun(500,error.message,true));
        console.log(error.message);
        
        return;
    }
  }
  async factoryCheak(res: Response, req: Request) {}
  async factoryDelete(req:Request,res:Response) {
    try {
      const {stirid}=req.params;

      const findFactory = await FactoryModel.find({stirid}).lean();


      await FactoryModel.deleteOne({stirid});

      res.status(201).send(resFun(201,`${stirid}`,findFactory,false));
      return
    } catch (error:any) {
      res.status(500).json(errFun(500,error.message,true));
      console.log(error.message);
      return;
      
    }
  }
}

export const fatorycontroller = new FactoryController();
