import { Request, Response } from "express";
import { AssetInsertData } from "../interfaces/createData.js";
import { assetsService } from "../services/assetsService.js";

const getAssets = async (req: Request, res: Response) => {
  const assets = await assetsService.getAssets();
  res.send(assets);
};

const registerAsset = async (req: Request, res: Response) => {
  const asset: AssetInsertData = req.body;
  await assetsService.registerAsset(asset);
  res.sendStatus(201);
};

const updateAsset = async (req: Request, res: Response) => {
  const assetId: string = req.params.assetId;
  const asset: AssetInsertData = req.body;
  await assetsService.updateAsset(asset, assetId);
  res.sendStatus(200);
};

const deleteAsset = async (req: Request, res: Response) => {
  const assetId: string = req.params.assetId;
  await assetsService.deleteAsset(assetId);
  res.sendStatus(204);
};

export const assetsControler = {
  getAssets,
  registerAsset,
  updateAsset,
  deleteAsset,
};
