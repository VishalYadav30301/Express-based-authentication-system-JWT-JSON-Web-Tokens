const express = require('express');
const { login, profile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public route (no authentication required)
router.post('/login', login);

// Protected route (requires authentication)
router.get('/profile', authMiddleware, profile);

module.exports = router;
