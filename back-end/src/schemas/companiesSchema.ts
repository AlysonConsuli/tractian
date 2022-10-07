import Joi from "joi";
import { CompanyInsertData } from "../interfaces/createData.js";

export const companySchema = Joi.object<CompanyInsertData>({
  name: Joi.string().required(),
});
