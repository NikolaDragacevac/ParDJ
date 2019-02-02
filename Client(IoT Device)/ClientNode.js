var net = require('net');

var client = new net.Socket();
client.connect(2564, '172.20.10.11', function() {
    console.log('Connected');
    client.end();
});

client.on('close', function() {
	console.log('Connection closed');
});