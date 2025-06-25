const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      return cb(new Error('Only JPG, JPEG, PNG files are allowed'));
    }
    cb(null, true);
  },
});

// ✅ Add Product
router.post('/add', authenticate, upload.single('image'), async (req, res) => {
  const { name, price, description, category, pcs } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !price || !description || !category || !pcs || !imageUrl) {
    return res.status(400).json({ success: false, message: 'All fields including image and pcs are required' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO products (name, price, description, category, pcs, imageUrl) VALUES (?, ?, ?, ?, ?, ?)',
      [name, price, description, category, pcs, imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      productId: result.insertId,
    });
  } catch (error) {
    console.error('Add error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


// ✅ Get All Products
router.get('/all', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products ORDER BY id DESC');
    res.json({ success: true, products: rows });
  } catch (error) {
    console.error('Fetch error:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

// ✅ Get One Product
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, product: rows[0] });
  } catch (error) {
    console.error('Get error:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching product' });
  }
});

// ✅ Update Product
router.put('/:id', authenticate, upload.single('image'), async (req, res) => {
  const { name, price, description, category, pcs } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const updateFields = [];
    const values = [];

    if (name) { updateFields.push('name = ?'); values.push(name); }
    if (price) { updateFields.push('price = ?'); values.push(price); }
    if (description) { updateFields.push('description = ?'); values.push(description); }
    if (category) { updateFields.push('category = ?'); values.push(category); }
    if (pcs) { updateFields.push('pcs = ?'); values.push(pcs); }
    if (imageUrl) { updateFields.push('imageUrl = ?'); values.push(imageUrl); }

    if (updateFields.length === 0) {
      return res.status(400).json({ success: false, message: 'No fields provided to update' });
    }

    values.push(req.params.id);

    const [result] = await db.execute(
      `UPDATE products SET ${updateFields.join(', ')} WHERE id = ?`,
      values
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    console.error('Update error:', error.message);
    res.status(500).json({ success: false, message: 'Error updating product' });
  }
});


// ✅ Delete Product
router.delete('/delete/:id', authenticate, async (req, res) => {
  try {
    const [result] = await db.execute('DELETE FROM products WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error.message);
    res.status(500).json({ success: false, message: 'Error deleting product' });
  }
});

module.exports = router;
