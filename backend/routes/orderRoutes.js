const express = require("express");
const router = express.Router();
const db = require("../db");
const authenticate = require("../middleware/authenticate");

// POST /api/orders
router.post("/order",authenticate, async (req, res) => {
  console.log("User from token:", req.user);
  const {
    user_id,
    service_id,
    service_name,
    address,
    professionals,
    hours,
    material,
    addons,
    total,
    description
  } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO orders 
      (user_id, service_id, service_name, address, professionals, hours, material, addons, total, description) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, service_id, service_name, address, professionals, hours, material ? 1 : 0, addons, total, description]
    );

    res.status(201).json({ message: "Order placed", order_id: result.insertId });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
