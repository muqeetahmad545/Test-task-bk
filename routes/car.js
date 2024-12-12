const express = require('express');
const carController = require('../controller/cars');
const carRoutes = express.Router();

carRoutes.post('/cars', carController.createcarData);

module.exports = { carRoutes };
