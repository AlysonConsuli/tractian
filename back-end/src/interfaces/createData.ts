import { Companies, Users } from "@prisma/client";

export type UserInsertData = Omit<
  Users,
  "id" | "isAdmin" | "companyId" | "createdAt" | "updatedAt"
>;
export type CompanyInsertData = Omit<
  Companies,
  "id" | "createdAt" | "updatedAt"
>;
