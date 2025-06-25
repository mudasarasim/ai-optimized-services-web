const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const pool = require('../db'); // mysql2 pool

router.post('/checkout', authenticate, async (req, res) => {
 const userId = req.user.user.id; 
  const { phone, email, country, address, product } = req.body;

  if (!phone || !email || !country || !address || !product || !product.id || !product.price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const quantity = Number(product.quantity) || 1;
  if (quantity <= 0) return res.status(400).json({ error: 'Invalid quantity' });

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1️⃣ Insert into orders
    const [orderResult] = await connection.query(
      'INSERT INTO orders (user_id, phone, email, country, address) VALUES (?, ?, ?, ?, ?)',
      [userId, phone, email, country, address]
    );
    const orderId = orderResult.insertId;

    // 2️⃣ Insert into order_items
    await connection.query(
      'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, product.id, quantity, product.price]
    );

    await connection.commit();
    res.json({ success: true, message: 'Order placed successfully', orderId });
  } catch (error) {
    await connection.rollback();
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Something went wrong during checkout' });
  } finally {
    connection.release();
  }
});

module.exports = router;
