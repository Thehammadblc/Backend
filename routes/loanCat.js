const express = require('express');
const { addLoanCategory, getLoanCategories } = require('../Controllers/loanCatcontroller');
const router = express.Router();

router.get('/', getLoanCategories);
router.post('/', addLoanCategory);

module.exports = router;
