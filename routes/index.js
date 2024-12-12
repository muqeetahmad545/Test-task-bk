const express = require('express');
const authRoutes = require('./auth');
const carRoutes = require('./car');
const uploadRouter = require('./upload');
const router = express.Router();

router.use('/', authRoutes.authRoutes);
router.use('/', carRoutes.carRoutes);
router.use('/', uploadRouter.uploadRouter);

module.exports = { router };
