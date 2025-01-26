const express = require('express');
const { submitLoanRequest } = require('../Controllers/loanController'); // Import the specific function
const router = express.Router();

router.post('/', submitLoanRequest); // Pass the function directly
module.exports = router;