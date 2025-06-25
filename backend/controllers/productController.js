const db = require('../db');

exports.addProduct = (req, res) => {
  const { name, price, description, category } = req.body;
  const imageUrl = req.file ? req.file.filename : null;

  // ✅ Basic validation
  if (!name || !price || !description || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `
    INSERT INTO products (name, price, description, category, imageUrl) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [name, price, description, category, imageUrl], (err, result) => {
    if (err) {
      console.error('❌ MySQL Error:', err);
      return res.status(500).json({ error: 'Failed to add product to database' });
    }

    res.status(201).json({ 
      success: true,
      message: '✅ Product added successfully',
      productId: result.insertId
    });
  });
};
