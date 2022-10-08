import { Companies } from "@prisma/client";
import { CompanyInsertData } from "../interfaces/createData.js";
import { companiesRepository } from "../repositories/companiesRepository.js";
import {
  __validateIdOrFail,
  __validateNameOrFail,
} from "../utils/validateData.js";

const getCompanies = async () => {
  const companies = await companiesRepository.findMany();
  return companies;
};

const registerCompany = async (company: CompanyInsertData) => {
  const { name } = company;
  await __validateNameOrFail<Companies>(name, "companies", "Company");
  await companiesRepository.insert(company);
};

const updateCompany = async (company: CompanyInsertData, companyId: string) => {
  const { name } = company;
  const selectedCompany = await __validateIdOrFail<Companies>(
    companyId,
    "companies",
    "Company",
  );

  if (name !== selectedCompany.name) {
    await __validateNameOrFail<Companies>(name, "companies", "Company");
  }

  await companiesRepository.update(companyId, company);
};

const deleteCompany = async (companyId: string) => {
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");
  await companiesRepository.deleteById(companyId);
};

export const companiesService = {
  getCompanies,
  registerCompany,
  updateCompany,
  deleteCompany,
};
