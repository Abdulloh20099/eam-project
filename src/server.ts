import express  from "express";
import "./utils/db.connectin.js";
import "dotenv/config";
import cors from "cors";
import { factoryRouter } from "./factory/router/factory.router.js";
import { adminRouter } from "./admin/adminrouter/admin.router.js";
import { requirementRouter } from "./requirements/router/requirement.router.js";

async function server(): Promise<void> {
  try {
    const app = express();
    app.use(express.json());
    app.use(cors());

    

    //Routers

    app.use('/api',factoryRouter);
    app.use('/api',adminRouter);
    app.use('/api',requirementRouter)

    const ServerPORT = Number(process.env.PORT);

    
    app.listen(ServerPORT, '0.0.0.0', () => {
      console.log(`running ${ServerPORT}...`);
    });
  } catch (error) {
    console.log({ status: 500, errorMsg: error });
    return;
  }
}

server();
