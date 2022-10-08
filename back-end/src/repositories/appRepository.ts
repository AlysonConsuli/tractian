import prisma from "../config/db.js";
import { Table } from "../interfaces/createData.js";

async function findMany<T>(table: Table) {
  return (await prisma[table as any].findMany({})) as T[];
}

async function findByName<T>(name: string, table: Table) {
  return (await prisma[table as any].findFirst({
    where: {
      name,
    },
  })) as T;
}

async function findById<T>(id: string, table: Table) {
  return (await prisma[table as any].findFirst({
    where: {
      id,
    },
  })) as T;
}

async function insert<T>(data: T, table: Table) {
  return await prisma[table as any].create({
    data,
  });
}

async function update<T>(id: string, data: T, table: Table) {
  return await prisma[table as any].update({
    where: {
      id,
    },
    data,
  });
}

async function deleteById(id: string, table: Table) {
  return await prisma[table as any].delete({
    where: {
      id,
    },
  });
}

export const appRepository = {
  findMany,
  findByName,
  findById,
  insert,
  update,
  deleteById,
};
