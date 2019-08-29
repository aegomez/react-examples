// @ts-check

const static = require('node-static');

const fileServer = new static.Server('public');

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    fileServer.serve(request, response);
  }).resume();
}).listen(9000);
