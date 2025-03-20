const { verifyToken } = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    req.userId = decoded.userId; // Attach the user ID to the request object
    next(); // Proceed to the next middleware or route handler
};

module.exports = authMiddleware;