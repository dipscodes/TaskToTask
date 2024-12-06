const express = require("express");
const getAllProducts = require("../controllers/getAllProducts");

const getAllProductsRouter = express.Router();

getAllProductsRouter.get("/tasks", getAllProducts);

module.exports = getAllProductsRouter;
