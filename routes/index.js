const express = require('express');
const router = express.Router();

// Health check route
router.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running!' });
});

// User routes (example with mock data)
router.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.status(200).json(users);
});

// Authentication routes
router.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // For now, mock a successful login response
  res.status(200).json({ message: `User ${email} logged in!` });
});

router.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  // For now, mock a successful signup response
  res.status(201).json({ message: `User ${name} signed up successfully!` });
});

module.exports = router;

