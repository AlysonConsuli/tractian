import { Router } from "express";

import authRouter from "./authRouter.js";
import companyRouter from "./companiesRouter.js";
import healthRouter from "./healthRouter.js";

const router = Router();
router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/company", companyRouter);

export default router;
