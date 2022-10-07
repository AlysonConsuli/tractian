import Joi from "joi";
import { AuthInsertData } from "../interfaces/createData.js";

export const signinSchema = Joi.object<AuthInsertData>({
  name: Joi.string().required(),
  password: Joi.string().min(4).required(),
});
