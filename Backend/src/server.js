const http = require('http');
require("dotenv/config");
const { mongoConnect } = require('./Services/mongo');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}`);
    });
}

startServer();