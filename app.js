const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/message', (req, res) => {
    const name = req.query.name || "User";
    res.json({ message: `Hello ${name}, welcome to AWS Cloud 🚀` });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});