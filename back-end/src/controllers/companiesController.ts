import { Request, Response } from "express";
import { CompanyInsertData } from "../interfaces/createData.js";
import { companiesService } from "../services/companiesService.js";

const getCompanies = async (req: Request, res: Response) => {
  const companies = await companiesService.getCompanies();
  res.send({ companies });
};

const registerCompany = async (req: Request, res: Response) => {
  const company: CompanyInsertData = req.body;
  await companiesService.registerCompany(company);
  res.sendStatus(201);
};

export const companiesControler = {
  getCompanies,
  registerCompany,
};
