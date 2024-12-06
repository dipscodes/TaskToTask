const productModel = require("../models/productModel");

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const deletedProduct = await productModel.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).json({
      result: true,
      message: "Task deleted successfully",
      productId: productId,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteProduct;
