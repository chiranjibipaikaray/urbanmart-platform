const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==============================
// Helper: Input validation
// ==============================
const isValidString = (value) =>
  typeof value === "string" && value.trim().length > 0;

// ==============================
// REGISTER
// ==============================
exports.register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // ✅ Strict type validation (Sonar fix)
    if (
      !isValidString(name) ||
      !isValidString(email) ||
      !isValidString(password)
    ) {
      return res.status(400).json({ message: "Invalid input format" });
    }

    // ✅ Normalize inputs
    name = name.trim();
    email = email.trim().toLowerCase();

    // ✅ Safe DB query (no direct user object injection)
    const existingUser = await User.findOne({
      email: email,
    }).lean();

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Strong hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ==============================
// LOGIN
// ==============================
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // ✅ Strict validation
    if (!isValidString(email) || !isValidString(password)) {
      return res.status(400).json({ message: "Invalid input format" });
    }

    email = email.trim().toLowerCase();

    // ✅ Safe DB query
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      // 🔐 Generic message (avoid user enumeration)
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Hardened JWT
    const token = jwt.sign(
      {
        userId: user._id.toString(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
        issuer: "urbanmart",
        audience: "urbanmart-users",
      }
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
