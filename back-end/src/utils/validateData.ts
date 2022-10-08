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
}

export async function __validateIdOrFail<T>(
  id: string,
  table: Table,
  tableTitle: string,
) {
  const regex = /^[0-9A-Fa-f]{24}$/;
  if (!regex.test(id)) {
    throw unprocessableEntityError(
      `${tableTitle} id must be a 24-character hex string!`,
    );
  }
  const data: T = await appRepository.findById(id, table);
  if (!data) throw notFoundError(`${tableTitle} not found!`);
  return data;
}
