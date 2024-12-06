const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const deleteProductRouter = require("../routes/deleteProduct");

require("../db/connection");

const expressApp = express();
expressApp.use(cors());
expressApp.use(json());

expressApp.use("/", deleteProductRouter);
expressApp.listen(8009, () => {
  console.log("Listening at 8004");
});
