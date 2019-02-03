const net = require('net');
var servers = []; // require('../Server/JSON/Servers.json');
const fs = require('fs');

console.log(servers);

const server = net.createServer((c) => {
    // 'connection' listener
    servers.push(c.remoteAddress);
    console.log(servers[0]);
    c.on('end', () => {
        console.log('client disconnected');
    });
    fs.writeFile("../src/Servers.json", JSON.stringify(servers), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
  c.pipe(c);
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