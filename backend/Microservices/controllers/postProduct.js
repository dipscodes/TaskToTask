const productModel = require("../models/productModel");

const postProduct = async (req, res) => {
  try {
    console.log(req.body);
    const Product = new productModel(req.body);
    await Product.save();
    res.status(200).json({
      result: true,
      message: "Task added successfully",
    });
  } catch (error) {
    console.error("error 8002: ", error);
  }
};

module.exports = postProduct;
