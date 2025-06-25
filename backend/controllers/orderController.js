// // controllers/orderController.js

// const db = require('../db');

// exports.placeOrder = (req, res) => {
//   const { user_id, service_id, description } = req.body;

//   console.log("📥 Incoming Order Body:", req.body);

//   if (!user_id || !service_id || !description) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const sql = "INSERT INTO orders (user_id, service_id, description) VALUES (?, ?, ?)";
//   db.query(sql, [user_id, service_id, description], (err, result) => {
//     if (err) {
//       console.error("❌ DB Error:", err);
//       return res.status(500).json({ error: "Failed to place order" });
//     }
//     res.json({ message: "Order placed successfully" });
//   });
// };

// exports.getUserOrders = (req, res) => {
//   const userId = req.params.userId;
//   const sql = `
//     SELECT o.id, o.description, o.status, o.order_date, s.title AS service_title, s.price
//     FROM orders o
//     JOIN services s ON o.service_id = s.id
//     WHERE o.user_id = ?
//     ORDER BY o.order_date DESC
//   `;
//   db.query(sql, [userId], (err, results) => {
//     if (err) return res.status(500).json({ error: "Failed to fetch orders" });
//     res.json(results);
//   });
// };
