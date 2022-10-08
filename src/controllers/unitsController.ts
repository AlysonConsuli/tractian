import { Request, Response } from "express";
import { UnitInsertData } from "../interfaces/createData.js";
import { unitsService } from "../services/unitsService.js";

const getUnits = async (req: Request, res: Response) => {
  const units = await unitsService.getUnits();
  res.send({ units });
};

const registerUnit = async (req: Request, res: Response) => {
  const unit: UnitInsertData = req.body;
  await unitsService.registerUnit(unit);
  res.sendStatus(201);
};

const updateUnit = async (req: Request, res: Response) => {
  const unitId: string = req.params.unitId;
  const unit: UnitInsertData = req.body;
  await unitsService.updateUnit(unit, unitId);
  res.sendStatus(200);
};

const deleteUnit = async (req: Request, res: Response) => {
  const unitId: string = req.params.unitId;
  await unitsService.deleteUnit(unitId);
  res.sendStatus(204);
};

export const unitsControler = {
  getUnits,
  registerUnit,
  updateUnit,
  deleteUnit,
};
