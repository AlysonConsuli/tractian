import { Request, Response } from "express";

import { authService } from "../services/authService.js";
import { AuthInsertData } from "../interfaces/createData.js";

const signin = async (req: Request, res: Response) => {
  const user: AuthInsertData = req.body;
  const result = await authService.signin(user);
  res.send(result);
};

export const authController = {
  signin,
};
