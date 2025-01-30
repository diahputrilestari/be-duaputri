import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { userId, items, totalPrice } = req.body;
  const newOrder = new Order({ userId, items, totalPrice });
  await newOrder.save();
  res.status(201).json({ message: "Order placed successfully!" });
};

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("items.menuId");
  res.json(orders);
};
