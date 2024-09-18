import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  document: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  address: { type: String, require: true },
});

export const Client = model("Client", clientSchema);
