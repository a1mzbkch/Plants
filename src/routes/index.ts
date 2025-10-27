import { Router } from "express";
import plantsRoute from "../modules/plants/plants.router";
import cors from "cors";

const globalRouter = Router();

const corsConfig = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5172",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://plants-front-psi.vercel.app/"
  ],
};

globalRouter.use(cors(corsConfig));
globalRouter.use("/products", plantsRoute);

export default globalRouter;
