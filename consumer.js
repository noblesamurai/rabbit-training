var AMQP = require('amqp-wrapper'),
    config = require('./config'),
    amqp = AMQP(config.amqp);

amqp.connect(connected);

function connected(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  amqp.consume(handleMessage);
}

function handleMessage(message, callback) {
  console.log('got message');
  setTimeout(callback,150);
}

// vim: set et sw=2 ts=2 colorcolumn=80:
