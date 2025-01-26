const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for loan categories
const loanCategories = [
    {
        _id: '1',
        category: 'Personal Loan',
        subcategories: ['Short-term', 'Long-term'],
        max_loan: 500000,
        loan_period: 5,
    },
    {
        _id: '2',
        category: 'Business Loan',
        subcategories: ['Small Business', 'Startup'],
        max_loan: 1000000,
        loan_period: 10,
    },
];

// Endpoint to fetch loan categories
app.get('/api/loan-categories', (req, res) => {
    res.json(loanCategories);
});

// Endpoint to create an account
app.post('/api/create-account', (req, res) => {
    const { cnic, email, name } = req.body;
    console.log('Received data:', { cnic, email, name });
    res.json({ message: 'Account created successfully!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});