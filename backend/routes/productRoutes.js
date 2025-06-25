const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL pool/connection
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ✅ Ensure uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// ✅ Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

// ✅ Multer instance with file size/type validation
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowed.includes(ext)) {
      return cb(new Error('Only .jpg, .jpeg, and .png files are allowed.'));
    }
    cb(null, true);
  }
});

// ✅ Add product route
router.post('/add', authenticate, upload.single('image'), async (req, res) => {
  const { name, price, description, category } = req.body;
  const baseUrl = process.env.BASE_URL || 'http://localhost:5001';
  const imageUrl = req.file ? `${baseUrl}/uploads/${req.file.filename}` : null;

  // ✅ Field validation
  if (!name || !price || !description || !category || !imageUrl) {
    return res.status(400).json({ success: false, message: 'All fields and an image are required.' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO products (name, price, description, category, imageUrl) VALUES (?, ?, ?, ?, ?)',
      [name, price, description, category, imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product: {
        id: result.insertId,
        name,
        price,
        description,
        category,
        imageUrl
      }
    });
  } catch (error) {
    console.error('MySQL insert error:', error.message);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

// ✅ Multer error handler (e.g. file too big, invalid type)
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message.includes('Only')) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next(err);
});

module.exports = router;
