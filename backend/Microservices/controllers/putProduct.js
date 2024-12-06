const productModel = require("../models/productModel");

const putProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      req.body
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).json({
      result: true,
      message: "Task updated successfully",
      productId: productId,
    });
  } catch (error) {
    console.error("error 8002: ", error);
  }
};

module.exports = putProduct;
