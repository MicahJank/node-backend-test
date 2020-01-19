const express = require('express');
const server = express();

const cors = require('cors');
const helmet = require('helmet');


server.use(cors());
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send({
        api: 'Its worrrking, its wooooorking!'
    })
})

module.exports = server;