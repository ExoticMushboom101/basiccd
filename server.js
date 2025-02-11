const { app } = require('./index');

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server shutting down');
    });
});