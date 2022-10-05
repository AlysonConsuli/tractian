import { Request, Response } from "express";

export default function appHealth(req: Request, res: Response) {
  res.sendStatus(200);
}
