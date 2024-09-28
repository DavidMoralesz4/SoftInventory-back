import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  date_order: { type: Date, required: true, default: Date.now },
  client_id: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  product_ids: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }], // array de productos
  status: { type: Array, required: true },
  total: { type: Number, required: true },
});

export const Order = model("Order", orderSchema);
