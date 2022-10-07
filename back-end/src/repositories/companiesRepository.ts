import prisma from "../config/db.js";
import { CompanyInsertData } from "../interfaces/createData.js";

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

const findById = async (id: string) => {
  return await prisma.companies.findFirst({
    where: {
      id,
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

const update = async (id: string, company: CompanyInsertData) => {
  return await prisma.companies.update({
    where: {
      id,
    },
    data: company,
  });
};

export const companiesRepository = {
  getCompanies,
  getCompany,
  insert,
  update,
  findById,
};
