const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aio_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional: test the connection once
(async () => {
  try {
    const connection = await db.getConnection();
    console.log(' Connected to MySQL');
    connection.release();
  } catch (err) {
    console.error(' MySQL connection error:', err);
  }
})();

module.exports = db;
