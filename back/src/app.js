const express = require('express');
const morgan = require('morgan');
const server = express();
const router = require('./routes/index');
const cors = require('cors');


server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/rickandmorty',router);

module.exports = server;