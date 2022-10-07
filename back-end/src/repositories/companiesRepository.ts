import prisma from "../config/db.js";
import { CompanyInsertData } from "../interfaces/createData.js";

const findMany = async () => {
  return await prisma.companies.findMany({});
};

const findByName = async (name: string) => {
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

const insert = async (data: CompanyInsertData) => {
  return await prisma.companies.create({
    data,
  });
};

const update = async (id: string, data: CompanyInsertData) => {
  return await prisma.companies.update({
    where: {
      id,
    },
    data,
  });
};

const deleteById = async (id: string) => {
  return await prisma.companies.delete({
    where: {
      id,
    },
  });
};

export const companiesRepository = {
  findMany,
  findByName,
  findById,
  insert,
  update,
  deleteById,
};
