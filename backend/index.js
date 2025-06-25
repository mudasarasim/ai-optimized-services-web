const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
// const categoryRoutes = require('./routes/categories'); // optional
const userRoutes = require('./routes/user');
// const cartRoutes = require('./routes/cart');
// const orderRoutes = require('./routes/checkout'); // adjust path as needed
const serviceRoutes = require('./routes/services');
const orderRoutes = require('./routes/orders');



const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 🔁 optional for form data
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // safer path handling


// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
// app.use('/api/categories', categoryRoutes); // optional
app.use('/api/user', userRoutes);
// app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/orders', orderRoutes);



// ✅ Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ✅ Server start
app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}`);
});
