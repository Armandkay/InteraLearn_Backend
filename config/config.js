// config/config.js
require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,  // Default port is 5000
    mongodbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myNewDatabase',
};

module.exports = config;

