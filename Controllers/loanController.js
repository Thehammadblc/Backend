const Loan = require('../models/Loan');

// Submit Loan Request
exports.submitLoanRequest = async (req, res) => {
    try {
        const { category, subcategory, amount, period, guarantors } = req.body;
        const loan = await Loan.create({
            user: req.user.id,
            category,
            subcategory,
            amount,
            period,
            guarantors,
        });
        res.status(201).json({ message: 'Loan request submitted successfully', loan });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting loan request', error });
    }
};

// Get All Loans (Admin)
exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('user', 'name email');
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};