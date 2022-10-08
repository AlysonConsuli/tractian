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

export const unitsRepository = {
  findMany,
};
