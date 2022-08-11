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
	bot.application.commands.create({
		name: 'version',
		description: 'A bot verziója',
	});
	bot.application.commands.create({
		name: 'binary',
		description: 'Binary emotikon',
	});
		console.log('Ready!');
		bot.user.setActivity('Noterube.tk');
	});
bot.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
    
	if (commandName === 'ping') {
		await interaction.reply('Pong! :ping_pong:' +bot.ws.ping+'ms');
    }
    if (commandName === 'beep') {
		await interaction.reply('Boop!');
    }
	else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} 
	else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
	if (commandName === 'version') {
		await interaction.reply('CuCi bot verziója: CuCi | V1 :robot: :keyboard: ');
    }
	if (commandName === 'binary') {
		await interaction.reply('https://media2.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif?cid=ecf05e479f3uruy3dpa38iu30ires2892wkewboy3rs5s4wh&rid=giphy.gif&ct=g ');
    }

	
});
bot.login(token);
