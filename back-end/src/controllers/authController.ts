import { Request, Response } from "express";

import { authService } from "../services/authService.js";
import { UserInsertData } from "../interfaces/createData.js";

const signin = async (req: Request, res: Response) => {
  const user: UserInsertData = req.body;
  const result = await authService.signin(user);
  res.send(result);
};

export const authController = {
  signin,
};
