const express = require('express');
const LoanCategory = require('../models/LoanCategory');
const router = express.Router();

// Fetch all loan categories
router.get('/loan-categories', async (req, res) => {
    try {
        const loanCategories = await LoanCategory.find();
        res.json(loanCategories);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching loan categories', error: err.message });
    }
});

// Fetch a single loan category by ID
router.get('/loan-categories/:id', async (req, res) => {
    try {
        const category = await LoanCategory.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching category details', error: err.message });
    }
});

module.exports = router;