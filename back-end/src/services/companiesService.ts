import { CompanyInsertData } from "../interfaces/createData.js";
import { conflictError } from "../middlewares/errorHandlingMiddleware.js";
import { companiesRepository } from "../repositories/companiesRepository.js";

const getCompanies = async () => {
  const companies = await companiesRepository.getCompanies();
  return companies;
};

const registerCompany = async (company: CompanyInsertData) => {
  const { name } = company;
  await validateNameOrFail(name);
  await companiesRepository.insert(name);
};

const validateNameOrFail = async (name: string) => {
  const company = await companiesRepository.getCompany(name);
  if (company) throw conflictError("Company name already exists!");
};

export const companiesService = {
  getCompanies,
  registerCompany,
};
