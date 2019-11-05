/* Informações
   Nome: Comando - UserInfo
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
	name: 'userinfo',
	guildOnly: true,
	description: 'Exibe as informações sobre o autor do comando!',
	aliases: ['ui'],
	usage: "'userinfo @NomeDoUsuário",
	cooldown: 5,
	execute(message, args) {
		 				
		let member = message.mentions.members.first() || message.member,
		  user = member.user;
		  if (!message.mentions.users.size) {
			return message.channel.send(`${message.author} aVocê precisa mencionar um usuário para consultar as informações!`);
		}

		let embed = new Discord.RichEmbed()
			.setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
			.setDescription(`${user.username}`)
			.setColor(`RANDOM`)
			.setThumbnail(`${user.displayAvatarURL}`)
			.addField('Status:', user.presence.status, false)
			.addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true) 
			.setFooter(`ID: ${user.id}`)
			.setTimestamp();
	
		message.channel.send({ embed: embed });
		return;
	},
};