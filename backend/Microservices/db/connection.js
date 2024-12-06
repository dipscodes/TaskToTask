let mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/ShiftLeft1")
//   .then(() => {
//     console.log("connection establisheed");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ShiftLeft1");
const db = mongoose.connection;
db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));
