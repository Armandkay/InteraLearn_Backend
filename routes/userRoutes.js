// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Sample route
router.get('/users', (req, res) => {
  res.send('Fetching all users');
});

module.exports = router;

