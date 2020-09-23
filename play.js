const connect = require('./client');
// or const { connect } = require('./client'); if Exports is set up as object

const setupInput = require('./input');
// or const { setupInput } = require('./input'); if Exports is set up as object

// connect();

setupInput(connect());

