const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ id: user._id }, 'secret_key');
      res.json({ token });
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

