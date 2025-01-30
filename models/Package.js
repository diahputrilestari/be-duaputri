const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  packageName: {
        type: String,
        required: true,
        enum: ["Value Package", "Standart Package", "Premium Package"],
      },
  name: {
    type: String,
    required: true,
    enum: ["Value Package 1", "Value Package 2", "Value Package 3", "Value Package 4", 
           "Standard Package 1", "Standard Package 2", "Standard Package 3", "Standard Package 4", 
           "Premium Package 1", "Premium Package 2", "Premium Package 3", "Premium Package 4"], // Define package names
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  items: {
    type: [String], // Array of item names
    required: true,
  },
}, { timestamps: true });

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
