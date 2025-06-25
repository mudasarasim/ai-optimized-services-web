const express = require('express');
const router = express.Router();
const db = require('../db'); // mysql2 pool
const verifyToken = require('../middleware/authenticate');

router.post('/', verifyToken, async (req, res) => {
  const userId = req.user.user.id;
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity) {
    return res.status(400).json({ error: 'Missing product_id or quantity' });
  }

  try {
    const [existing] = await db.query(
      'SELECT * FROM carts WHERE user_id = ? AND product_id = ?',
      [userId, product_id]
    );

    if (existing.length > 0) {
      await db.query(
        'UPDATE carts SET quantity = ? WHERE user_id = ? AND product_id = ?',
        [quantity, userId, product_id]
      );
    } else {
      await db.query(
        'INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)',
        [userId, product_id, quantity]
      );
    }

    res.json({ success: true });
  } catch (err) {
    console.error('🛑 Error saving cart:', err);
    res.status(500).json({ error: 'Failed to save cart' });
  }
});

module.exports = router;
