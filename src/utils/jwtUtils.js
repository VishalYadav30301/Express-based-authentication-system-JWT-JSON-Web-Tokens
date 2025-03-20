const jwt =  require ('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';  // Use environment variable for production


// Generate a token 

const generateToken = (userId) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};


// Verify a token

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;    // Returns the decoded payload if valid
    } catch (err) {
        
        return null;       // Returns null if invalid or expired
    }
};

module.exports = { generateToken, verifyToken };
