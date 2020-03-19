const express = require('express'); //import express

const server = express(); //define server as express
server.use(express.json()); //server.use set up

server.get('/', (req, res) => {
    res.send('<h1> This is the code for Cristina Edens</h1>') //shh it's secrete code
})

module.exports = server;