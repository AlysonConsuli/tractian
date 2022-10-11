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

async function findByCompanyId(companyId: string) {
  return await prisma.users.findFirst({
    where: {
      companyId,
    },
  });
}

export const usersRepository = {
  findMany,
  findByCompanyId,
};
