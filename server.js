// Load the http module to create an http server.
var http = require('http');
var express = require('express');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!!!!!!\n");
});

const serverPort = 3000;

server.listen(serverPort);

// Put a friendly message on the terminal
console.log(`Server running at http://127.0.0.1:/${serverPort}`);