import { Companies, Units } from "@prisma/client";
import { UnitInsertData } from "../interfaces/createData.js";
import { conflictError } from "../middlewares/errorHandlingMiddleware.js";
import { appRepository } from "../repositories/appRepository.js";
import { assetsRepository } from "../repositories/assetsRepository.js";
import { unitsRepository } from "../repositories/unitsRepository.js";
import {
  __validateIdOrFail,
  __validateNameOrFail,
} from "../utils/validateData.js";

const getUnits = async () => {
  const units = await unitsRepository.findMany();
  return units;
};

const registerUnit = async (unit: UnitInsertData) => {
  const { name, companyId } = unit;

  await __validateNameOrFail<Units>(name, "units", "Unit");
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");

  await appRepository.insert<UnitInsertData>(unit, "units");
};

const updateUnit = async (unit: UnitInsertData, unitId: string) => {
  const { name, companyId } = unit;
  const selectedUnit = await __validateIdOrFail<Units>(unitId, "units", "Unit");

  if (name !== selectedUnit.name) {
    await __validateNameOrFail<Units>(name, "units", "Unit");
  }
  await __validateIdOrFail<Companies>(companyId, "companies", "Company");

  await appRepository.update<UnitInsertData>(unitId, unit, "units");
};

const deleteUnit = async (unitId: string) => {
  await __validateIdOrFail<Units>(unitId, "units", "Unit");
  await __validateUnitAssociation(unitId);

  await appRepository.deleteById(unitId, "units");
};

async function __validateUnitAssociation(unitId: string) {
  const asset = await assetsRepository.findByUnitId(unitId);
  if (asset) throw conflictError("There are assets associated with this unit!");
}

export const unitsService = {
  getUnits,
  registerUnit,
  updateUnit,
  deleteUnit,
};
