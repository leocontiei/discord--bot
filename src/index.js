require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,          
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessageTyping,
  ],
});

client.on('ready', (e) => {
    console.log('Il bot è stato eseguito con successo!')
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder().setTitle("Embed Title").setDescription('@everyone is an embed description').setColor('Random').addFields({ name: 'Field title', value: 'some random value', inline: true }, { name: 'Field title', value: 'some random value', inline: true });
    interaction.reply({ embeds: [embed] });
   }
});

client.login(process.env.TOKEN);
