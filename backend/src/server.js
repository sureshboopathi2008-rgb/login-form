const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running",
  });
});


// Auth routes
app.use("/api/auth", authRoutes);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});