const mongoose = require('mongoose');

const loanCategorySchema = new mongoose.Schema({
    category: { type: String, required: true },
    subcategories: { type: [String], required: true },
    max_loan: { type: Number, required: true },
    loan_period: { type: Number, required: true },
});

const LoanCategory = mongoose.model('LoanCategory', loanCategorySchema);

module.exports = LoanCategory;
