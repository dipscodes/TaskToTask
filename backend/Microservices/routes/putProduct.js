const express = require("express");
const putProduct = require("../controllers/putProduct");

const putProductRouter = express.Router();

putProductRouter.put("/putTask/:id", putProduct);

module.exports = putProductRouter;
