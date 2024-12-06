const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const putProductsRouter = require("../routes/putProduct");

require("../db/connection");

const expressApp = express();
expressApp.use(cors());
expressApp.use(json());

expressApp.use("/", putProductsRouter);
expressApp.listen(8008, () => {
  console.log("Listening at 8003");
});
