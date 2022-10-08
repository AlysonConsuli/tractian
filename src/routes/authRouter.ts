import { Router } from "express";

import { authController } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { signinSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post(
  "/sign-in",
  validateSchema(signinSchema),
  authController.signin,
);

export default authRouter;
