import Joi from "joi";
import { UserInsertData } from "../interfaces/createData.js";

export const signinSchema = Joi.object<UserInsertData>({
  name: Joi.string().required(),
  password: Joi.string().min(4).required(),
});
