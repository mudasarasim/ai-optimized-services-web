// const db = require('../db'); // Make sure db is connected

// exports.getCategories = (req, res) => {
//   const query = 'SELECT * FROM categories'; // Make sure the table name is correct

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('❌ MySQL Error:', err);
//       return res.status(500).json({
//         success: false,
//         error: 'Failed to fetch categories from database',
//       });
//     }

//     if (!results || results.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No categories found',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       categories: results,
//     });
//   });
// };
