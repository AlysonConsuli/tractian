import prisma from "../config/db.js";

const getCompanies = async () => {
  return await prisma.companies.findMany({});
};

const getCompany = async (name: string) => {
  return await prisma.companies.findFirst({
    where: {
      name,
    },
  });
};

const insert = async (name: string) => {
  return await prisma.companies.create({
    data: {
      name,
    },
  });
};

export const companiesRepository = {
  getCompanies,
  getCompany,
  insert,
};
