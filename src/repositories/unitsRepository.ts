import prisma from "../config/db.js";

async function findMany() {
  return await prisma.units.findMany({
    select: {
      id: true,
      name: true,
      company: {
        select: {
          name: true,
        },
      },
    },
  });
}

async function findByCompanyId(companyId: string) {
  return await prisma.units.findFirst({
    where: {
      companyId,
    },
  });
}

export const unitsRepository = {
  findMany,
  findByCompanyId,
};
