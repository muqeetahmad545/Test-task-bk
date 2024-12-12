const express = require('express');
const authController = require('../controller/auth');
const authRoutes = express.Router();

authRoutes.post('/user', authController.loginUser);
authRoutes.post('/register', authController.createUser);

module.exports = { authRoutes };
