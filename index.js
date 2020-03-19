const server = require('./api/server');

const port = process.env.port || 5005;

server.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});