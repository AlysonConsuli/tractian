import { CompanyInsertData } from "../interfaces/createData.js";
import {
  conflictError,
  notFoundError,
  unprocessableEntityError,
} from "../middlewares/errorHandlingMiddleware.js";
import { companiesRepository } from "../repositories/companiesRepository.js";

const getCompanies = async () => {
  const companies = await companiesRepository.findMany();
  return companies;
};

const registerCompany = async (company: CompanyInsertData) => {
  const { name } = company;
  await __validateNameOrFail(name);
  await companiesRepository.insert(company);
};

const updateCompany = async (company: CompanyInsertData, companyId: string) => {
  const { name } = company;
  const selectedCompany = await __validateIdOrFail(companyId);
  if (name !== selectedCompany.name) {
    await __validateNameOrFail(name);
  }
  await companiesRepository.update(companyId, company);
};

const deleteCompany = async (companyId: string) => {
  await __validateIdOrFail(companyId);
  await companiesRepository.deleteById(companyId);
};

const __validateNameOrFail = async (name: string) => {
  const company = await companiesRepository.findByName(name);
  if (company) throw conflictError("Company name already exists!");
};

const __validateIdOrFail = async (id: string) => {
  if (id.length !== 24)
    throw unprocessableEntityError("Company id must be exactly 24 char!");
  const company = await companiesRepository.findById(id);
  if (!company) throw notFoundError("Company not found!");
  return company;
};

export const companiesService = {
  getCompanies,
  registerCompany,
  updateCompany,
  deleteCompany,
};
