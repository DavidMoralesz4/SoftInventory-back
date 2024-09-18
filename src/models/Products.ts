import { model, Schema } from "mongoose";

const productsSchema = new Schema({
  name: String,
  description: String,
  stock: String,
  image_url: String,
  price: Number,
});

export const Product = model("Product", productsSchema);
