import { Request, Response } from "express";
import { UserInsertData } from "../interfaces/createData.js";
import { usersService } from "../services/usersService.js";

const getUsers = async (req: Request, res: Response) => {
  const users = await usersService.getUsers();
  res.send({ users });
};

const registerUser = async (req: Request, res: Response) => {
  const user: UserInsertData = req.body;
  await usersService.registerUser(user);
  res.sendStatus(201);
};

const updateUser = async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const user: UserInsertData = req.body;
  await usersService.updateUser(user, userId);
  res.sendStatus(200);
};

const deleteUser = async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  await usersService.deleteUser(userId);
  res.sendStatus(204);
};

export const usersControler = {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
};
