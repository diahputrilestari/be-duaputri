const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", MenuSchema);
