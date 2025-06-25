const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchuser = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log("Auth Header:", authHeader);

  if (!authHeader) {
    return res.status(401).send({ error: "Unauthorized: No token provided" });
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: "Unauthorized: Invalid token format" });
  }

  try {
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).send({ error: "Unauthorized: Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded); // 👀 Useful log
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    res.status(401).send({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = fetchuser;
