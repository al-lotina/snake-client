const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ALQ');
  });

  conn.on('connect', () => {
    conn.write('Move: up');
  });

  return conn;
};

module.exports = connect;
/* or Export the connect function as part of an object:
module.exports = {
  connect
};
*/