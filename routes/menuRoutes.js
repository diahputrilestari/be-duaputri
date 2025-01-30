const express = require("express");
const { addMenuItem, getAllMenuItems, getMenuItemsByCategory, editMenuItem } = require("../controllers/menuController");

const router = express.Router();

router.post("/add", addMenuItem);
router.get("/", getAllMenuItems);
router.get("/category/:category", getMenuItemsByCategory);
router.put("/edit/:id", editMenuItem); // Use a parameter for the menu item ID


module.exports = router;
