import { Request, Response } from "express";
import { errFun, resFun } from "../../utils/res.req.status.js";
import { adminModel } from "../adminmodel/admin.model.js";
import jwt from "jsonwebtoken";

class AdminController {
  async adminControllerSignUp(req: Request, res: Response) {
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
      
      
      
      const findAdmin = await adminModel.findOne({
        adminPassword: adminPassword,
      });

      if (findAdmin) {
        res.status(401).json(errFun(401, "admin mavjud", true));
        console.log('vnfdkjn');
        
        return;
      }
      const tokenAdmin = {
        adminPassword,
      };

      await adminModel.create(adminObj);

      res.status(201).send(resFun(201,'admin xush kelibsiz', adminObj, false));
      return;
    } catch (error: any) {
      res.status(500).json(errFun(500, error.message, true));
      console.log(error.message);
      return;
    }
  }
  async adminControllerSignIn(req: Request, res: Response) {
    try {
      const { adminContact, adminPassword } = req.body;

      console.log(adminContact,adminPassword);

     


      const findAdmin = await adminModel.findOne({adminContact:adminContact});
      const findAdminPassword = await adminModel.findOne({adminPassword:adminPassword})


      if(!findAdmin){
        res.status(401).json(errFun(401,'admin kontakt notogri', true))
        console.log('fmskld');
        return
      }

      if(!findAdminPassword){
        res.status(401).json(errFun(401,'admin parol notogri', true))
        console.log('akcasmdlka');
        return
      }

      res.status(201).send(resFun(201,'admin xush kelibsiz',findAdmin,false))
      return
    } catch (error: any) {
      console.log(error.message);
      res.status(500).json(errFun(500, error.message, true));
      return;
    }
  }
}

export const admin_contorller = new AdminController();
