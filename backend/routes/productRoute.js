const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const db = require('../db'); // ✅ mysql2 connection or pool
const fs = require('fs');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

const upload = multer({ storage, fileFilter });


// ✅ POST /api/products/add (MySQL version)
router.post('/products/add', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description || !req.file) {
      return res.status(400).json({ error: 'All fields including image are required' });
    }

    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;

    const [result] = await db.execute(
      'INSERT INTO products (name, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [name, price, description, imageUrl]
    );

    res.status(201).json({
      message: 'Product created',
      product: { id: result.insertId, name, price, description, imageUrl }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating product' });
  }
});


// ✅ POST /api/products/upload (for image only)
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
    res.status(200).json({
      message: 'Image uploaded successfully!',
      imageUrl: imageUrl
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

module.exports = router;
