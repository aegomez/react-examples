// @ts-check
const path = require('path');
const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, '/')));

server.listen(9000);