const Menu = require("../models/Menu");

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const newMenuItem = new Menu({ name, price, description, category });
    await newMenuItem.save();

    res.status(201).json({ message: "Menu item added successfully", data: newMenuItem });
  } catch (error) {
    res.status(500).json({ message: "Failed to add menu item", error });
  }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
      const menuItems = await Menu.find(); // Fetch all menu items
      res.status(200).json({ message: "Menu items retrieved successfully", data: menuItems });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve menu items", error });
    }
  };

// Get menu items by category
exports.getMenuItemsByCategory = async (req, res) => {
    const { category } = req.params; // Get category from request parameters
    try {
      const menuItems = await Menu.find({ category }); // Fetch menu items by category
      if (menuItems.length === 0) {
        return res.status(404).json({ message: "No menu items found for this category" });
      }
      res.status(200).json({ message: "Menu items retrieved successfully", data: menuItems });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve menu items", error });
    }
  };

// Edit a menu item
exports.editMenuItem = async (req, res) => {
    const { id } = req.params; // Get the menu item ID from the request parameters
    const { name, price, description, category } = req.body; // Get updated data from the request body
  
    try {
      const updatedMenuItem = await Menu.findByIdAndUpdate(
        id,
        { name, price, description, category },
        { new: true, runValidators: true } // Return the updated document and run validators
      );
  
      if (!updatedMenuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
  
      res.status(200).json({ message: "Menu item updated successfully", data: updatedMenuItem });
    } catch (error) {
      res.status(500).json({ message: "Failed to update menu item", error });
    }
  };