import prisma from "../config/db.js";

const getCompanies = async () => {
  return await prisma.companies.findMany({});
};

export const companiesRepository = {
  getCompanies,
};
