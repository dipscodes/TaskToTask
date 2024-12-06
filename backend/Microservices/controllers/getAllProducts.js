const productModel = require("../models/productModel");

const getAllTasks = async (req, res, _) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {}
};

module.exports = getAllTasks;
