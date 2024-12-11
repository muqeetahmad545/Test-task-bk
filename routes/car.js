const express = require('express');
const carController = require('../controller/cars'); 
const carRoutes = express.Router();

carRoutes.post('/car', carController.createcarData);

module.exports = { carRoutes };  
