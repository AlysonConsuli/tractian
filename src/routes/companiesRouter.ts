import { Router } from "express";
import { companiesControler } from "../controllers/companiesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/validateToken.js";
import { companySchema } from "../schemas/companiesSchema.js";

const companyRouter = Router();

companyRouter
  .all("/*", validateToken)
  .get("/", companiesControler.getCompanies)
  .post("/", validateSchema(companySchema), companiesControler.registerCompany)
  .put(
    "/:companyId",
    validateSchema(companySchema),
    companiesControler.updateCompany,
  )
  .delete("/:companyId", companiesControler.deleteCompany);

export default companyRouter;
