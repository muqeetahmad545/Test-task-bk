const express = require('express');
const authController = require('../controller/auth');  
const authRoutes = express.Router();

authRoutes.get('/user', authController.loginUser);
authRoutes.post('/register', authController.createUser);

module.exports = { authRoutes };  
