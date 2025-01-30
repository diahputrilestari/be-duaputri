const express = require('express');
const { register, login } = require('../controllers/authController'); // Ensure this is correct

const router = express.Router();

router.post('/register', register); // This should be a function
router.post('/login', login); // This should also be a function

module.exports = router;
