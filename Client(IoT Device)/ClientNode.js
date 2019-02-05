var net = require('net');

const client = net.createConnection({ port: 2999 }, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});

client.connect(2999, '172.20.10.11', function() {
    console.log('Connected');
    client.end();
});

client.on('close', function() {
	console.log('Connection closed');
});
