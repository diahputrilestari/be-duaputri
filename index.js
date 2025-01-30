const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const menuRoutes = require("./routes/menuRoutes");
const packageRoutes = require("./routes/packageRoutes"); // Import package routes
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/menu", menuRoutes);

// Use the package routes
app.use("/api/packages", packageRoutes); // Set the base path for package routes

app.use("/api/cart", cartRoutes);

// Use the auth routes
app.use('/api', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
