import { Router } from "express";
import { usersControler } from "../controllers/usersController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/validateToken.js";
import { userSchema } from "../schemas/usersSchema.js";

const userRouter = Router();

userRouter
  .all("/*", validateToken)
  .get("/", usersControler.getUsers)
  .post("/", validateSchema(userSchema), usersControler.registerUser)
  .put("/:userId", validateSchema(userSchema), usersControler.updateUser)
  .delete("/:userId", usersControler.deleteUser);

export default userRouter;
