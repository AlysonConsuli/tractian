import Joi from "joi";
import { UnitInsertData } from "../interfaces/createData.js";

export const unitSchema = Joi.object<UnitInsertData>({
  name: Joi.string().required(),
  companyId: Joi.string().length(24).required(),
});
