const express = require("express");
const deleteProduct = require("../controllers/deleteProduct");

const deleteProductRouter = express.Router();

deleteProductRouter.delete("/deleteTask/:id", deleteProduct);

module.exports = deleteProductRouter;
