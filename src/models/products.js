const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  description: { type: String, trim: true },

  price: { type: Number, required: true },

  category: { type: String, required: true },

  NumberInStock: { type: Number },

  color: { type: String },

  images: [String],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
