import { Router } from "express";

import { authController } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/validateToken.js";
import { signinSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter
  .post("/sign-in", validateSchema(signinSchema), authController.signin)
  .post("/validate-token", validateToken, (req, res) => res.sendStatus(200));

export default authRouter;
