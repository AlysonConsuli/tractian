import { Table } from "../interfaces/createData.js";
import {
  conflictError,
  notFoundError,
  unprocessableEntityError,
} from "../middlewares/errorHandlingMiddleware.js";
import { appRepository } from "../repositories/appRepository.js";

export async function __validateNameOrFail<T>(
  name: string,
  table: Table,
  tableTitle: string,
) {
  const data: T = await appRepository.findByName(name, table);
  if (data) throw conflictError(`${tableTitle} name already exists!`);
  return data;
}

export async function __validateIdOrFail<T>(
  id: string,
  table: Table,
  tableTitle: string,
) {
  if (id.length !== 24) {
    throw unprocessableEntityError(
      `${tableTitle} id length must be 24 characters long`,
    );
  }
  const data: T = await appRepository.findById(id, table);
  if (!data) throw notFoundError(`${tableTitle} not found!`);
  return data;
}
