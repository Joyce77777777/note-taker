const express = require('express');
const router = express.Router();
const path = require('path');

// Define a mapping of endpoint to the HTML file it should serve
const routeToFileMap = {
    '/': 'index.html',
    '/notes': 'notes.html'
};

// Generate routes based on the mapping
Object.entries(routeToFileMap).forEach(([route, fileName]) => {
    router.get(route, (req, res) => {
        res.sendFile(path.join(__dirname, '../public', fileName));
    });
});

module.exports = router;
