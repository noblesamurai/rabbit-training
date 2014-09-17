module.exports = {
  amqp: {
    url: process.env.AMQP_URL || 'amqp://guest:guest@localhost',
    exchange: process.env.AMQP_EXCHANGE || 'test',
    queues: {
      consume: {
        name: process.env.AMQP_CONSUME || 'test',
        routingKey: process.env.AMQP_CONSUME_ROUTING_KEY || 'test',
      },
      publish: [{
        name: process.env.AMQP_PUBLISH || 'test',
        routingKey: process.env.AMQP_PUBLISH_ROUTING_KEY || 'test'
      }]
    },
    prefetch: 1 
  }
};
