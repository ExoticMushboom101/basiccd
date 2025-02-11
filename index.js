const express = require('express');

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Calculator routes
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 + num2 });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 - num2 });
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 * num2 });
});

// Only start server if this file is run directly
let server;
if (require.main === module) {
    server = app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

module.exports = { app, server };