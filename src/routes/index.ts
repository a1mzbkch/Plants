import { Router } from "express";
import plantsRoute from "../modules/plants/plants.router";
import cors from "cors";

const globalRouter = Router();

const corsConfig = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
};

globalRouter.use(cors(corsConfig));
globalRouter.use("/products", plantsRoute);

export default globalRouter;
