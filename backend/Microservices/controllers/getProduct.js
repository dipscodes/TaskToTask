const productModel = require("../models/productModel");

const getAllProducts = async (req, res, _) => {
  try {
    console.log(req.params.id);
    const products = await productModel.findById(req.params.id);
    res.status(200).json(products);
  } catch (error) {}
};

module.exports = getAllProducts;
