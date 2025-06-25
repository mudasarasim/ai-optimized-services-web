const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); // your mysql2 connection
require("dotenv").config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Check if user already exists
    const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Insert user
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    // 4. Get the inserted user ID
    const userId = result.insertId;

    // 5. Generate token
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 6. Return token + user object
    res.status(200).json({
      token,
      user: {
        id: userId,
        name,
        email,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error during signup" });
  }
};
