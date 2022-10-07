import { companiesRepository } from "../repositories/companiesRepository.js";

const getCompanies = async () => {
  const companies = await companiesRepository.getCompanies();
  return companies;
};

export const companiesService = {
  getCompanies,
};
