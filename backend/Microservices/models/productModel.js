const mongoose = require("mongoose");

const productTemplate = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
    required: true,
    trim: true,
  },
  completeAt: {
    type: String,
    required: true,
    trim: true,
  },
};

const productSchema = mongoose.Schema(productTemplate);
const productModel = mongoose.model("task", productSchema);

module.exports = productModel;
