import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../config/setup.js";

import {
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorHandlingMiddleware.js";
import { authRepository } from "../repositories/authRepository.js";
import { UserInsertData } from "../interfaces/createData.js";
import { Users } from "@prisma/client";

const signin = async (userData: UserInsertData) => {
  const { name, password } = userData;

  const user = await getUserOrFail(name);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user);

  return { name, token };
};

const getUserOrFail = async (name: string) => {
  const user = await authRepository.findUserByName(name);
  if (!user) throw notFoundError("User not found!");
  return user;
};

const validatePasswordOrFail = async (
  password: string,
  userPassword: string,
) => {
  const isPasswordValid = bcrypt.compareSync(password, userPassword);
  if (!isPasswordValid) throw unauthorizedError("Incorrect password!");
};

const createSession = async (user: Users) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token: string = jwt.sign(user, secretKey);
  return token;
};

export const authService = {
  signin,
};
