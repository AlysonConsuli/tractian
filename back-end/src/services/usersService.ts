import { Companies, Users } from "@prisma/client";
import bcrypt from "bcrypt";
import { UserInsertData } from "../interfaces/createData.js";
import { usersRepository } from "../repositories/usersRepository.js";
import {
  __validateIdOrFail,
  __validateNameOrFail,
} from "../utils/validateData.js";

const getUsers = async () => {
  const users = await usersRepository.findMany();
  return users;
};

const registerUser = async (user: UserInsertData) => {
  const { name, companyId } = user;
  await __validateNameOrFail<Users>(name, "users", "User");
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");

  const password = __encryptPassword(user.password);
  await usersRepository.insert({ ...user, password });
};

const updateUser = async (user: UserInsertData, userId: string) => {
  const { name, companyId } = user;
  const selectedUser = await __validateIdOrFail<Users>(userId, "users", "User");

  if (name !== selectedUser.name) {
    await __validateNameOrFail<Users>(name, "users", "User");
  }
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");

  const password = __encryptPassword(user.password);
  await usersRepository.update(userId, { ...user, password });
};

const deleteUser = async (userId: string) => {
  await __validateIdOrFail<Users>(userId, "users", "User");
  await usersRepository.deleteById(userId);
};

const __encryptPassword = (password: string) => {
  const SALT = 10;
  return bcrypt.hashSync(password, SALT) as string;
};

export const usersService = {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
};
