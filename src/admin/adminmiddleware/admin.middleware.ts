import { Request, Response, NextFunction, json } from "express";
import { errFun } from "../../utils/res.req.status.js";
import jwt from "jsonwebtoken";

class AdminMiddleware {
  async AdminCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const { adminName, adminContact, adminPassword } = req.body;


      console.log(adminName);
      console.log(adminContact);
      console.log(adminPassword);


      
      

      const adminObj = {
        adminName,
        adminContact,
        adminPassword,
      };

      if (!adminObj.adminName) {
        res.status(401).json(errFun(401, "isimni kiriting", true));
        console.log('name');
        
        return;
      }

      if (!adminObj.adminContact) {
        res.status(401).json(errFun(401, "raqamingizni kiriting", true));
        console.log('contact');
        
        return;
      }
      if(!adminObj.adminPassword){
         res.status(401).json(errFun(401, "parol kiriting", true));
         console.log('password');
         
        return;
      }

      const admin_key = process.env.ADMIN_PASSWORD;

      if (adminObj.adminPassword != admin_key) {
        res.status(401).json(errFun(401, "siz admin emas siz", true));
        return;
      }

      next();
    } catch (error: any) {
      res.status(500).json(errFun(500, error.message, true));
      console.log(error.message);
      return;
    }
  }
  async AdminGetFactoryMiddle(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenAdmin = req.headers.authorization || ""

      if(!tokenAdmin){
        res.status(401).json(errFun(401,'token mavjud emas', true));
        return
      }

      const tokenKey = process.env.ADMIN_TOKEN_KEY;

      const decodedTokenAdmin = jwt.verify(tokenAdmin, `${tokenKey}`);

      


      
      



      if ((decodedTokenAdmin as any).adminPassword == process.env.ADMIN_PASSWORD) {
         next();
      } else{
        res.status(401).json(errFun(401,'token blan muammo',true))
      }
     
    } catch (error: any) {
      res.status(500).json(errFun(500, error.message, true));
      return;
       
    }
  }
}

export const AdminMiddle = new AdminMiddleware();
