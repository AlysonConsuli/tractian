import { Request, Response, NextFunction } from "express";

const serviceErrorToStatusCode = {
  unauthorized: 401,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
};

export const unauthorizedError = (message: string) => {
  return { type: "unauthorized", message };
};

export const conflictError = (message: string) => {
  return { type: "conflict", message };
};

export const unprocessableEntityError = (message: string) => {
  return { type: "unprocessableEntity", message };
};

export const notFoundError = (message: string) => {
  return { type: "notFound", message };
};

export const errorHandlingMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.type) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  console.log(err);
  res.status(500).send("Internal server error. Refresh the page to try again");
};
