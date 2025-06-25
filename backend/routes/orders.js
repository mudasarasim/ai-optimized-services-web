const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
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
      [
        user_id,
        service_id,
        service_name,
        address,
        professionals,
        hours,
        material ? 1 : 0,
        addons,
        total,
        description
      ]
    );

    console.log("✅ Order saved with ID:", result.insertId);
    res.status(201).json({ message: 'Order placed successfully', order_id: result.insertId });
  } catch (error) {
    console.error('❌ Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

module.exports = router;
