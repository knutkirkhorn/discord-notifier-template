import {Formatters, EmbedBuilder} from 'discord.js';
import {setTimeout} from 'node:timers/promises';
import discordWebhookWrapper from 'discord-webhook-wrapper';
import config from './config.js';

const webhookClient = discordWebhookWrapper(config);

async function checkForSomething() {
	const embedMessage = new EmbedBuilder()
		.setTitle('😎 **Something new** 🦄')
		.addFields({name: 'Stuff', value: '😎🦄'})
		.addFields({name: 'Date', value: Formatters.time(new Date(), Formatters.TimestampStyles.RelativeTime)})
		.addFields({name: 'URL', value: 'Check more here [here](https://google.com)'});

	await webhookClient.send({embeds: [embedMessage]});
}

// Make it run forever
while (true) {
	try {
		console.log('Checking for <something>:', new Date());
		await checkForSomething();
	} catch (error) {
		console.log(error);
	} finally {
		await setTimeout(config.waitTimeout);
	}
}
