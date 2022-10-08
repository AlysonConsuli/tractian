import prisma from "../config/db.js";

async function findMany() {
  return await prisma.assets.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      model: true,
      owner: true,
      status: true,
      healthLevel: true,
      unit: {
        select: {
          name: true,
        },
      },
    },
  });
}

export const assetsRepository = {
  findMany,
};
