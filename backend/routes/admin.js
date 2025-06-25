const express = require('express');
const router = express.Router();
const db = require('../db'); // Your MySQL connection module

// GET all products
router.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Error fetching products' });
        }
        res.json(results);
    });
});

// Add a new product
router.post('/products', (req, res) => {
    const { name, price, description, category, imageUrl } = req.body;

    if (!name || !price || !description || !category) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO products (name, price, description, category, imageUrl) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, price, description, category, imageUrl], (err, result) => {
        if (err) {
            console.error('Error adding product:', err);
            return res.status(500).json({ error: 'Error adding product' });
        }
        res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
    });
});

// GET all categories
router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ error: 'Error fetching categories' });
        }
        res.json(results);
    });
});

// Add a new category
router.post('/categories', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
        if (err) {
            console.error('Error adding category:', err);
            return res.status(500).json({ error: 'Error adding category' });
        }
        res.status(201).json({ message: 'Category added successfully', categoryId: result.insertId });
    });
});

module.exports = router;
