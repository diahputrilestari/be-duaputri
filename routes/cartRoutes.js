const express = require("express");
const router = express.Router();

let cart = []; // This will hold the cart items in memory (for demonstration purposes)

// Add item to cart
router.post("/add", (req, res) => {
    const { item } = req.body; // Expecting item details in the request body
    cart.push(item);
    res.status(201).json({ message: "Item added to cart", cart });
});

// Get cart items
router.get("/", (req, res) => {
    res.status(200).json({ cart });
});

// Clear cart
router.delete("/", (req, res) => {
    cart = [];
    res.status(200).json({ message: "Cart cleared" });
});

module.exports = router;
