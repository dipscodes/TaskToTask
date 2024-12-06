const express = require("express");
const getProduct = require("../controllers/getProduct");

const getProductRouter = express.Router();

getProductRouter.get("/getProduct/:id", getProduct);

module.exports = getProductRouter;
