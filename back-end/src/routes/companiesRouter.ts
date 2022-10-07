import { Router } from "express";
import { companiesControler } from "../controllers/companiesController.js";
import { validateToken } from "../middlewares/validateToken.js";

const companyRouter = Router();

companyRouter
  .all("/*", validateToken)
  .get("/", companiesControler.getCompanies);

export default companyRouter;
