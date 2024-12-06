const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const postProductsRouter = require("../routes/postProduct");

require("../db/connection");

const expressApp = express();
expressApp.use(cors());
expressApp.use(json());

expressApp.use("/", postProductsRouter);
expressApp.listen(8006, () => {
  console.log("Listening at 8001");
});
