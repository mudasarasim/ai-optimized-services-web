const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load .env variables

const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.status(401).send({ error: 'Access denied. No token provided.' });
}
const token = authHeader.split(" ")[1]?.replace(/^"|"$/g, '');

    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);
        req.user = decoded;
        next();
    } catch (ex) {
        return res.status(400).send({ error: 'Invalid token.' });
    }
};

module.exports = authenticate;
