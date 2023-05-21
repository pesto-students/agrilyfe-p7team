const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBrand = asyncHandler(async (req: any, res: any) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error: any) {
    throw new Error(error);
  }
});
const updateBrand = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error: any) {
    throw new Error(error);
  }
});
const deleteBrand = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error: any) {
    throw new Error(error);
  }
});
const getBrand = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaBrand = await Brand.findById(id);
    res.json(getaBrand);
  } catch (error: any) {
    throw new Error(error);
  }
});
const getallBrand = asyncHandler(async (req: any, res: any) => {
  try {
    const getallBrand = await Brand.find();
    res.json(getallBrand);
  } catch (error: any) {
    throw new Error(error);
  }
});
module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
};
