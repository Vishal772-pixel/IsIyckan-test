import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  images: [{
    url: String,
    altText: String
  }],
  specifications: {
    dimensions: {
      length: Number,
      width: Number,
      height: Number
    },
    material: String,
    color: String
  }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);