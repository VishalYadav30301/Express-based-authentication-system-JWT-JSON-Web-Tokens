const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware

app.use(express.json());  // Parse JSON bodies

// Routes

app.use('/api/auth', authRoutes);  // Authentication routes

module.exports = app;