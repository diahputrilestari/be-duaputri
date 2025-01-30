import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{ menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" }, quantity: Number }],
  totalPrice: Number,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
