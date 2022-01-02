import { Router } from "express";
import { createRegionHandler, deleteRegionHandler, getRegion } from "../controller/region.controller";
import { auth } from "../middleware/auth.middleware";

const router = Router();

router.get("/:id", getRegion);
router.post("/create", auth, createRegionHandler);
// router.post('/update/:id', auth, updateRegion);
router.delete('/:id',auth, deleteRegionHandler);

export default router;
