const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    amount: { type: Number, required: true },
    period: { type: Number, required: true },
    guarantors: [
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            cnic: { type: String, required: true },
        },
    ],
    status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);