const tmi = require('tmi.s');

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'INIT2022',
    password: 'oauth:7wevj1864nd535psb3qcbl0u2qlk50',
  },
  channels: ['yourchannel'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('yourchannel', 'Hello, I am here')
});

client.on('chat', (channel, user, message, self) => {
  if message === '!game') {
    client.action('yourchannel', 'Join me!');
  }
  
  client.action('yourchannel', 'Hello ${user['display-name']}' );
});
 
  
  
