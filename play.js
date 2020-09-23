// const net = require('net');
// object { connect } instead  of variable ?
const connect = require('./client');
// console.log('Connecting ...');
connect();
// object { setupInput } instead  of variable ?
const setupInput = require('./input');

setupInput();