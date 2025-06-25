// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const verifyToken = require('../middleware/authenticate');

// ✅ GET user's cart
router.get('/', verifyToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const [rows] = await db.query(
      `SELECT c.id, c.product_id, c.quantity, 
              p.name, p.price, p.imageUrl 
       FROM carts c
       JOIN products p ON c.product_id = p.id
       WHERE c.user_id = ?`,
      [userId]
    );
    res.json({ success: true, cart: rows });
  } catch (err) {
    console.error('Fetch cart error:', err);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

// ✅ Add or update item
router.post('/', verifyToken, async (req, res) => {
  const userId = req.user.id;
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

    res.json({ success: true, message: 'Cart updated' });
  } catch (err) {
    console.error('Add/update cart error:', err);
    res.status(500).json({ error: 'Failed to update cart' });
  }
});

// ✅ Delete all cart items for the user
router.delete('/', verifyToken, async (req, res) => {
  const userId = req.user.id;
  try {
    await db.query('DELETE FROM carts WHERE user_id = ?', [userId]);
    res.json({ success: true });
  } catch (err) {
    console.error('Delete cart error:', err);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
});

module.exports = router;
