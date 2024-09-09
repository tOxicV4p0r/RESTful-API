const http = require('http');

require('dotenv').config();

const PORT = parseInt(process.env.PORT, 10) || 5000;

async function startServer() {
    const app = require('./app');
    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log('Server running on port :', PORT);
    });
}

startServer();