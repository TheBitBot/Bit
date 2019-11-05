/* Informações
   Nome: Comando - Ping
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

//discord.js
const Discord = require('discord.js')
//client
const client = new Discord.Client


//message exec
module.exports = {
	name: 'ping',
	guildOnly: true,
	description: 'Calcula e mostra o ping do cliente!',
	aliases: [''],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
		let apiPing = Math.round(message.client.ping)
		message.channel.send(`Pinging...`).then(m => {
		let ping = message.createdTimestamp - message.createdTimestamp
		m.edit(`${message.author} :ping_pong: Pong! \n :stopwatch: Ping: **${ping}** \n :satellite: Ping da API: **${Math.round(message.client.ping)}**`)
		});
        
	},
};