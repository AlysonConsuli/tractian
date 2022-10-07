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

const updateCompany = async (req: Request, res: Response) => {
  const companyId: string = req.params.companyId;
  const company: CompanyInsertData = req.body;
  await companiesService.updateCompany(company, companyId);
  res.sendStatus(201);
};

export const companiesControler = {
  getCompanies,
  registerCompany,
  updateCompany,
};
