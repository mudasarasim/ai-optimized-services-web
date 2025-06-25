const express = require('express');
const router = express.Router();
const db = require('../db'); // aapki MySQL connection file

// ✅ Category insert karna
router.post('/', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Category name is required' });
    }

    const sql = 'INSERT INTO categories (name) VALUES (?)';

    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error inserting category:', err);
            return res.status(500).json({ message: 'Database error' });
        }

        res.status(201).json({ message: 'Category saved successfully', id: result.insertId });
    });
});

module.exports = router;
