import { Companies, Users } from "@prisma/client";

export type AuthInsertData = Omit<
  Users,
  "id" | "isAdmin" | "companyId" | "createdAt" | "updatedAt"
>;
export type CompanyInsertData = Omit<
  Companies,
  "id" | "createdAt" | "updatedAt"
>;
export type UserInsertData = Omit<Users, "id" | "createdAt" | "updatedAt">;
export type Table = "companies" | "users" | "units" | "assets";
