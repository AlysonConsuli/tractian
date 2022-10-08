import Joi from "joi";
import { Status } from "@prisma/client";
import { AssetInsertData } from "../interfaces/createData.js";

export const assetSchema = Joi.object<AssetInsertData>({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  model: Joi.string().required(),
  owner: Joi.string().required(),
  status: Joi.string()
    .required()
    .valid(...Object.values(Status)),
  healthLevel: Joi.number().min(0).max(1).required(),
  unitId: Joi.string().length(24).required(),
});
