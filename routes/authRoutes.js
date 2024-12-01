const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register route
router.post('/register', authController.register);

// Sign-in route
router.post('/signin', authController.signin);

module.exports = router;
