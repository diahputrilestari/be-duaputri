const express = require("express");
const { getAllPackages, addPackage, getPackageByPackageName, editPackage, deletePackage } = require("../controllers/packageController");

const router = express.Router();

// Route to add a new package
router.post("/add", addPackage); // This should be a POST route

// Route to get all packages
router.get("/", getAllPackages);

// Route to get packages by packageName
router.get("/packageName/:packageName", getPackageByPackageName); // Use a parameter for packageName

// Route to edit a package
router.put("/edit/:id", editPackage);

// Route to delete a package
router.delete("/delete/:id", deletePackage);

module.exports = router;
