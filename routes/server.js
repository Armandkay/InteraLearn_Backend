// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

