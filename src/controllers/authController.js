const { generateToken } = require('../utils/jwtUtils');
const users = require('../models/userModel'); // Mock or database model

// Login controller
const login = (req, res) => {
    const { username, password } = req.body;

    // Input validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Find the user in the mock data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate a token for the user
        const token = generateToken(user.id);
        console.log(`Token generated for user: ${user.username}`); // Debugging
        res.json({ message: 'Login successful!', token });
    } else {
        console.log(`Login failed for username: ${username}`); // Debugging
        res.status(401).json({ message: 'Invalid username or password.' });
    }
};

// Profile controller
const profile = (req, res) => {
    const user = users.find(u => u.id === req.userId);

    if (user) {
        console.log(`Profile accessed by user: ${user.username}`); // Debugging
        res.json({ message: `Welcome, ${user.username}!`, user });
    } else {
        console.log(`User not found with ID: ${req.userId}`); // Debugging
        res.status(404).json({ message: 'User not found.' });
    }
};

module.exports = { login, profile };