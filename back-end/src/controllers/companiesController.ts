import { Request, Response } from "express";
import { companiesService } from "../services/companiesService.js";

const getCompanies = async (req: Request, res: Response) => {
  const companies = await companiesService.getCompanies();
  res.send({ companies });
};

const registerOrUpdateCompany = (req: Request, res: Response) => {};

export const companiesControler = {
  getCompanies,
  registerOrUpdateCompany,
};
