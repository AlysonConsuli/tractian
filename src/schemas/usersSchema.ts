import Joi from "joi";
import { UserInsertData } from "../interfaces/createData.js";

export const userSchema = Joi.object<UserInsertData>({
  name: Joi.string().required(),
  password: Joi.string().min(4).required(),
  isAdmin: Joi.boolean(),
  companyId: Joi.string().hex().length(24).required(),
});
