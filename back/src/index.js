const express = require('express');
const morgan = require('morgan');
const server = express();
const router = require('./routes/index');
const cors = require('cors');
const PORT = 3005;

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/rickandmorty',router);

server.listen(PORT, () => {
   console.log('Server runing in port: ' + PORT);
});