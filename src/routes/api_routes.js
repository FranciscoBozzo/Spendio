import { Router } from "express";
import * as apiCtrl from "./api_controller.js";

const router = Router();

router.get("/api/races", apiCtrl.getRaces);

router.get("/api/races/:id", apiCtrl.getRace);

router.post("/api/races", apiCtrl.createRace);

router.delete("/api/races/:id", apiCtrl.deleteRace);

router.put("/api/races/:id", apiCtrl.updateRace);

export default router;
