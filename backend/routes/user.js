const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticate = require('../middleware/fetchuser');

router.get('/profile', authenticate, async (req, res) => {
  const userId = req.user.id;
  console.log("Inside /profile route. User ID:", userId);

  try {
    const [results] = await db.query(`SELECT id, name, email FROM users WHERE id = ?`, [userId]);

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.status(200).json(results[0]);
  } catch (err) {
    console.error('❌ DB Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});


module.exports = router;
