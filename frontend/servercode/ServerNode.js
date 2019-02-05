const net = require('net');
var servers = require('../src/Util/Servers.json');
const fs = require('fs');

console.log(servers);

const server = net.createServer((c) => {
    // 'connection' listener
    servers.push(c.remoteAddress);
    fs.writeFile("../src/Util/Servers.json", JSON.stringify(servers), function(err) {
        if(err) {
            return console.log(err);
        }
    });
    
    c.on('end', () => {
      console.log('client disconnected');
  });
});

server.listen(2999, () => {
  console.log('server bound');
});

server.on('data', function(data) {
	console.log('Received: ' + data);
});

server.on('error', (err) => {
    throw err;
});
