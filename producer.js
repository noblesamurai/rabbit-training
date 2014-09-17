var AMQP = require('amqp-wrapper'),
    config = require('./config'),
    amqp = AMQP(config.amqp);

amqp.connect(connected);

function connected(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  produce();
}

function produce() {
  amqp.publish('test', {hello: 'there'}, {}, function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('successfully published message');
    setTimeout(produce, 1000);
  });
}

// vim: set et sw=2 ts=2 colorcolumn=80:
