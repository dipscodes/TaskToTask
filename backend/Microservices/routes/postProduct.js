const express = require("express");
const postProduct = require("../controllers/postProduct");

const postProductRouter = express.Router();

postProductRouter.post("/postTask", postProduct);

module.exports = postProductRouter;
