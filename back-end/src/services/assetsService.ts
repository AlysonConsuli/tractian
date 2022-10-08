import { Units, Assets } from "@prisma/client";
import { AssetInsertData } from "../interfaces/createData.js";
import { appRepository } from "../repositories/appRepository.js";
import { assetsRepository } from "../repositories/assetsRepository.js";
import {
  __validateIdOrFail,
  __validateNameOrFail,
} from "../utils/validateData.js";

const getAssets = async () => {
  const assets = await assetsRepository.findMany();
  return assets;
};

const registerAsset = async (asset: AssetInsertData) => {
  const { name, unitId } = asset;

  await __validateNameOrFail<Assets>(name, "assets", "Asset");
  await __validateIdOrFail<Units>(unitId, "units", "Unit");

  await appRepository.insert<AssetInsertData>(asset, "assets");
};

const updateAsset = async (asset: AssetInsertData, assetId: string) => {
  const { name, unitId } = asset;
  const selectedAsset = await __validateIdOrFail<Assets>(
    assetId,
    "assets",
    "Asset",
  );

  if (name !== selectedAsset.name) {
    await __validateNameOrFail<Assets>(name, "assets", "Asset");
  }
  await __validateIdOrFail<Units>(unitId, "units", "Unit");

  await appRepository.update<AssetInsertData>(assetId, asset, "assets");
};

const deleteAsset = async (assetId: string) => {
  await __validateIdOrFail<Assets>(assetId, "assets", "Asset");
  await appRepository.deleteById(assetId, "assets");
};

export const assetsService = {
  getAssets,
  registerAsset,
  updateAsset,
  deleteAsset,
};
