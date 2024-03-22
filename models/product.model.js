import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
    unique: true,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  rating: {
    type: Number,
    default: 0,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  category: {
    type: String,
    require: true,
  },

  stock: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);

//model.exports = Product;

export default Product;
