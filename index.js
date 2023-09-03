const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const token = 'YOUR_BOT_TOKEN';
const prefix = 'YOUR_BOT_PREFIX';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.reply('Pong!');
  } else if (command === 'coinflip') {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    message.channel.send(`You flipped a coin, and it's ${result}!`);
  } else if (command === 'help') {
    const helpMessage = `
      **Available Commands**:
      - !ping: Get a pong response.
      - !coinflip: Flip a coin and get heads or tails.
    `;
    message.channel.send(helpMessage);
  }
});

client.login(token);
