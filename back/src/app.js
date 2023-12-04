const express = require('express');
const morgan = require('morgan');
const server = express();
const router = require('./routes/index');
const cors = require('cors');

 


server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
//server.use(express.urlencoded({ extended: true }));

server.use('/rickandmorty',cors(),router);

// Manejo de errores global
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

module.exports = server;