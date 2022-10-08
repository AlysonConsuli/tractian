import { Router } from "express";

import authRouter from "./authRouter.js";
import companyRouter from "./companiesRouter.js";
import healthRouter from "./healthRouter.js";
import unitRouter from "./unitsRouter.js";
import userRouter from "./usersRouter.js";
import assetRouter from "./assetsRouter.js";

const router = Router();
router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/company", companyRouter);
router.use("/user", userRouter);
router.use("/unit", unitRouter);
router.use("/asset", assetRouter);

export default router;
