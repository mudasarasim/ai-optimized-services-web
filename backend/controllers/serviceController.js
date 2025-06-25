const db = require('../db');

// GET all services
exports.getAllServices = (req, res) => {
  const sql = "SELECT * FROM services";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch services" });
    res.json(results);
  });
};
