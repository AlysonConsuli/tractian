import { Assets, Companies, Units, Users } from "@prisma/client";

export type AuthInsertData = Omit<
  Users,
  "id" | "isAdmin" | "companyId" | "createdAt" | "updatedAt"
>;
export type CompanyInsertData = Omit<
  Companies,
  "id" | "createdAt" | "updatedAt"
>;
export type UserInsertData = Omit<Users, "id" | "createdAt" | "updatedAt">;
export type UnitInsertData = Omit<Units, "id" | "createdAt" | "updatedAt">;
export type AssetInsertData = Omit<Assets, "id" | "createdAt" | "updatedAt">;
export type Table = "companies" | "users" | "units" | "assets";
