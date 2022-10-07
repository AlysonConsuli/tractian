import { CompanyInsertData } from "../interfaces/createData.js";
import {
  conflictError,
  unprocessableEntityError,
} from "../middlewares/errorHandlingMiddleware.js";
import { companiesRepository } from "../repositories/companiesRepository.js";

const getCompanies = async () => {
  const companies = await companiesRepository.getCompanies();
  return companies;
};

const registerCompany = async (company: CompanyInsertData) => {
  const { name } = company;
  await __validateNameOrFail(name);
  await companiesRepository.insert(name);
};

const updateCompany = async (company: CompanyInsertData, companyId: string) => {
  const { name } = company;
  await __validateIdOrFail(companyId);
  await __validateNameOrFail(name);
  await companiesRepository.update(companyId, company);
};

const __validateNameOrFail = async (name: string) => {
  const company = await companiesRepository.getCompany(name);
  if (company) throw conflictError("Company name already exists!");
};

const __validateIdOrFail = async (id: string) => {
  if (id.length !== 24)
    throw unprocessableEntityError("Company id must be exactly 24 char!");
  const company = await companiesRepository.findById(id);
  if (!company) throw conflictError("Company not found!");
};

export const companiesService = {
  getCompanies,
  registerCompany,
  updateCompany,
};
