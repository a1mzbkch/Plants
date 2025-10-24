import { Router } from "express";
import plantsController from "./plants.controller";

const router = Router();

router.get("/plants", plantsController.getPlants);
router.get("/plants/:id", plantsController.getPlantsById);
router.post("/plants", plantsController.postPlants);
router.delete("/plants/:id", plantsController.deletePlants);
router.put("/plants/:id", plantsController.putPlants);
router.patch("/plants/:id", plantsController.patchPlants);

export default router;
