import { Router } from "express";
import { unitsControler } from "../controllers/unitsController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/validateToken.js";
import { unitSchema } from "../schemas/unitsSchema.js";

const unitRouter = Router();

unitRouter
  .all("/*", validateToken)
  .get("/", unitsControler.getUnits)
  .post("/", validateSchema(unitSchema), unitsControler.registerUnit)
  .put("/:unitId", validateSchema(unitSchema), unitsControler.updateUnit)
  .delete("/:unitId", unitsControler.deleteUnit);

export default unitRouter;
