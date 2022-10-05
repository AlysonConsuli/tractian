import { Router } from "express";

import authRouter from "./authRouter.js";
import healthRouter from "./healthRouter.js";

const router = Router();
router.use(healthRouter);
router.use(authRouter);

export default router;
