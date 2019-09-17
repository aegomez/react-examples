// @ts-check
const path = require('path');
const express = require('express');

const server = express();

server.use((req, res, next) => {
  let now = (new Date()).toUTCString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
})

server.use(express.static(path.join(__dirname, '/')));

server.listen(9000, () => {
  console.log('Listening on port 9000');
});