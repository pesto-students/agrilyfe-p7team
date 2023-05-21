const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createColor = asyncHandler(async (req: any, res: any) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error: any) {
    throw new Error(error);
  }
});
const updateColor = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error: any) {
    throw new Error(error);
  }
});
const deleteColor = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error: any) {
    throw new Error(error);
  }
});
const getColor = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaColor = await Color.findById(id);
    res.json(getaColor);
  } catch (error: any) {
    throw new Error(error);
  }
});
const getallColor = asyncHandler(async (req: any, res: any) => {
  try {
    const getallColor = await Color.find();
    res.json(getallColor);
  } catch (error: any) {
    throw new Error(error);
  }
});
module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
};
