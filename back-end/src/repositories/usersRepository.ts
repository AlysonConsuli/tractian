import prisma from "../config/db.js";

async function findMany() {
  return await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      company: {
        select: {
          name: true,
        },
      },
      isAdmin: true,
    },
  });
}

export const usersRepository = {
  findMany,
};
