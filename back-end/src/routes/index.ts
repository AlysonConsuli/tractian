import { Router } from "express";

import authRouter from "./authRouter.js";
import companyRouter from "./companiesRouter.js";
import healthRouter from "./healthRouter.js";

const router = Router();
router.use(healthRouter);
router.use(authRouter);
router.use("/company", companyRouter);

export default router;
