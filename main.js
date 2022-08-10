const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.once('ready', () => {
	bot.application.commands.create({
	  name: 'ping',
	  description: 'Pong és a jelenlegi pinget megmutatja',
	});
	bot.application.commands.create({
	  name: 'beep',
	  description: 'Ez egy beep command',
	});
	bot.application.commands.create({
		name: 'server',
		description: 'Ez egy server command',
	  });
	bot.application.commands.create({
		name: 'user',
		description: 'Ez egy user command',
	});
		console.log('Ready!');
	});
	const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

bot.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('danger')
					.setLabel('Version')
					.setStyle(ButtonStyle.Danger),
			);

		await interaction.reply({ content: 'Pong :ping_pong:!', components: [row] });
	}
});

bot.login(token);
