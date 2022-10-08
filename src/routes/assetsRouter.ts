import { Router } from "express";
import { assetsControler } from "../controllers/assetsController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/validateToken.js";
import { assetSchema } from "../schemas/assetsSchema.js";

const assetRouter = Router();

assetRouter
  .all("/*", validateToken)
  .get("/", assetsControler.getAssets)
  .post("/", validateSchema(assetSchema), assetsControler.registerAsset)
  .put("/:assetId", validateSchema(assetSchema), assetsControler.updateAsset)
  .delete("/:assetId", assetsControler.deleteAsset);

export default assetRouter;
