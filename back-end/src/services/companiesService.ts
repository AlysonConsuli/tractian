import { Companies } from "@prisma/client";
import { CompanyInsertData } from "../interfaces/createData.js";
import { appRepository } from "../repositories/appRepository.js";
import {
  __validateIdOrFail,
  __validateNameOrFail,
} from "../utils/validateData.js";

const getCompanies = async () => {
  const companies = await appRepository.findMany<Companies>("companies");
  return companies;
};

const registerCompany = async (company: CompanyInsertData) => {
  const { name } = company;
  await __validateNameOrFail<Companies>(name, "companies", "Company");
  await appRepository.insert<CompanyInsertData>(company, "companies");
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

  await appRepository.update<CompanyInsertData>(
    companyId,
    company,
    "companies",
  );
};

const deleteCompany = async (companyId: string) => {
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");
  await appRepository.deleteById(companyId, "companies");
};

export const companiesService = {
  getCompanies,
  registerCompany,
  updateCompany,
  deleteCompany,
};
