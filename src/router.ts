import { Router } from "express";
import userRouter from "./routes/user.router";
import vectorRouter from "./routes/vector.router";
import regionRouter from "./routes/region.router";
const router = Router();

router.use("/users", userRouter);
router.use("/region", regionRouter);
router.use("/vector", vectorRouter);

export default router;
