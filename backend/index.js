require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ======================
// Middleware
// ======================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// ======================
// MongoDB Connection
// ======================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// ======================
// Routes
// ======================
app.get("/", (req, res) => {
  res.send("UrbanMart Backend is running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "UrbanMart Backend",
    time: new Date().toISOString(),
  });
});

// Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ======================
// Server Start
// ======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 UrbanMart backend running on port ${PORT}`);
});
