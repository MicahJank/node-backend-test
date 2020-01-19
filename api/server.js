const express = require('express');
const server = express();

const configureMiddleware = require('./configureMiddleware.js');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send({
        api: 'Its worrrking, its wooooorking!'
    })
})

module.exports = server;