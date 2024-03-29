const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Import routes
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use routes
app.use(htmlRoutes);
app.use(apiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
