import bcrypt from "bcrypt";
import { UserInsertData } from "../interfaces/createData.js";
import {
  conflictError,
  notFoundError,
  unprocessableEntityError,
} from "../middlewares/errorHandlingMiddleware.js";
import { companiesRepository } from "../repositories/companiesRepository.js";
import { usersRepository } from "../repositories/usersRepository.js";

const getUsers = async () => {
  const users = await usersRepository.findMany();
  return users;
};

const registerUser = async (user: UserInsertData) => {
  const { name, companyId } = user;
  await __validateNameOrFail(name);
  await __validateCompanyOrFail(companyId);

  const password = __encryptPassword(user.password);
  await usersRepository.insert({ ...user, password });
};

const updateUser = async (user: UserInsertData, userId: string) => {
  const { name, companyId } = user;
  const selectedUser = await __validateIdOrFail(userId);

  if (name !== selectedUser.name) {
    await __validateNameOrFail(name);
  }
  await __validateCompanyOrFail(companyId);

  const password = __encryptPassword(user.password);
  await usersRepository.update(userId, { ...user, password });
};

const deleteUser = async (userId: string) => {
  await __validateIdOrFail(userId);
  await usersRepository.deleteById(userId);
};

const __validateNameOrFail = async (name: string) => {
  const user = await usersRepository.findByName(name);
  if (user) throw conflictError("User name already exists!");
};

const __validateIdOrFail = async (id: string) => {
  if (id.length !== 24)
    throw unprocessableEntityError("User id must be exactly 24 char!");
  const user = await usersRepository.findById(id);
  if (!user) throw notFoundError("User not found!");
  return user;
};

const __validateCompanyOrFail = async (companyId: string) => {
  const company = await companiesRepository.findById(companyId);
  if (!company) throw notFoundError("Company not found!");
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
