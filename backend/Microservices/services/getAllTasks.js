const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const getAllProductsRouter = require("../routes/getAllProducts");

require("../db/connection");

const expressApp = express();
expressApp.use(cors());
expressApp.use(json());

expressApp.use("/", getAllProductsRouter);
expressApp.listen(8005, () => {
  console.log("Listening at 8000");
});
