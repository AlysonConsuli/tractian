import { Router } from "express";

import authRouter from "./authRouter.js";
import companyRouter from "./companiesRouter.js";
import healthRouter from "./healthRouter.js";
import userRouter from "./usersRouter.js";

const router = Router();
router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/company", companyRouter);
router.use("/user", userRouter);

export default router;
