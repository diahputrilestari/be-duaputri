const Package = require("../models/Package");

// Add a new package
exports.addPackage = async (req, res) => {
  const { packageName ,name, description, price, items } = req.body;

  try {
    const newPackage = new Package({ packageName, name, description, price, items });
    await newPackage.save();
    res.status(201).json({ message: "Package added successfully", data: newPackage });
  } catch (error) {
    res.status(500).json({ message: "Failed to add package", error });
  }
};

// Get all packages
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json({ message: "Packages retrieved successfully", data: packages });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve packages", error });
  }
};

exports.getPackageByPackageName = async (req, res) => {
    const { packageName } = req.params; // Get the package name from the request parameters

    try {
        const packages = await Package.find({ packageName }); // Find packages by packageName
        if (packages.length === 0) {
            return res.status(404).json({ message: "No packages found with that name" });
        }
        res.status(200).json({ message: "Packages retrieved successfully", data: packages });

    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve packages", error });
    }
};

// Edit a package
exports.editPackage = async (req, res) => {
  const { id } = req.params;
  const { packageName, name, description, price, items } = req.body;

  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      id,
      { packageName, name, description, price, items },
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.status(200).json({ message: "Package updated successfully", data: updatedPackage });
  } catch (error) {
    res.status(500).json({ message: "Failed to update package", error });
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPackage = await Package.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.status(200).json({ message: "Package deleted successfully", data: deletedPackage });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete package", error });
  }
};
