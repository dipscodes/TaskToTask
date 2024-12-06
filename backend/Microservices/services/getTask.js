const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const getProductRouter = require("../routes/getProduct");

require("../db/connection");

const expressApp = express();
expressApp.use(cors());
expressApp.use(json());

expressApp.use("/", getProductRouter);
expressApp.listen(8007, () => {
  console.log("Listening at 8002");
});
