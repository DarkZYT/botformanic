module.exports = (client, event) => {
  // The bot won't attempt to login again, so attempt to login again
  console.error('Bot Disconnected! Attempting to reconnect!');
  client.login(client.config.token).catch(() => {
    const interval = setInterval(() => {
      client.login(client.config.token).then(clearInterval(interval));
    }, 5000);
  })
};