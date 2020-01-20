const express = require('express');
const server = express();

const apiRouter = require('./api-router.js');

const configureMiddleware = require('./configureMiddleware.js');

configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send({
        api: 'Its worrrking, its wooooorking!'
    })
})

module.exports = server;