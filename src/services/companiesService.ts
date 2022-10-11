import { Companies } from "@prisma/client";
import { CompanyInsertData } from "../interfaces/createData.js";
import { conflictError } from "../middlewares/errorHandlingMiddleware.js";
import { appRepository } from "../repositories/appRepository.js";
import { unitsRepository } from "../repositories/unitsRepository.js";
import { usersRepository } from "../repositories/usersRepository.js";
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
  await __validateCompanyAssociation(companyId);

  await appRepository.deleteById(companyId, "companies");
};

async function __validateCompanyAssociation(companyId: string) {
  const user = await usersRepository.findByCompanyId(companyId);
  if (user)
    throw conflictError("There are users associated with this company!");
  const unit = await unitsRepository.findByCompanyId(companyId);
  if (unit)
    throw conflictError("There are units associated with this company!");
}

export const companiesService = {
  getCompanies,
  registerCompany,
  updateCompany,
  deleteCompany,
};
