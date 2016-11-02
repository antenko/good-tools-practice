const server = require('./server');
const serverPort = 3000;

server.listen(serverPort, function () {
  console.log(`Example app listening on port ${serverPort}!!!`);
});