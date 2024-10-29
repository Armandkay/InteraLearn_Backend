const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userID: String,
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' }
});

module.exports = mongoose.model('User', userSchema);

