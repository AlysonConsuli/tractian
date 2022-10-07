import prisma from "../config/db.js";
import { UserInsertData } from "../interfaces/createData.js";

const findMany = async () => {
  return await prisma.users.findMany({});
};

const findByName = async (name: string) => {
  return await prisma.users.findFirst({
    where: {
      name,
    },
  });
};

const findById = async (id: string) => {
  return await prisma.users.findFirst({
    where: {
      id,
    },
  });
};

const insert = async (data: UserInsertData) => {
  return await prisma.users.create({
    data,
  });
};

const update = async (id: string, data: UserInsertData) => {
  return await prisma.users.update({
    where: {
      id,
    },
    data,
  });
};

const deleteById = async (id: string) => {
  return await prisma.users.delete({
    where: {
      id,
    },
  });
};

export const usersRepository = {
  findMany,
  findByName,
  findById,
  insert,
  update,
  deleteById,
};
