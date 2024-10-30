const express = require('express');
const app = express();
const routes = require('./routes'); // Import the routes from the routes folder

// Middleware to parse JSON bodies
app.use(express.json());

// Use the defined routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

