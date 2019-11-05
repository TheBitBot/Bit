/* Informações
   Nome: Comando - Ban
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	guildOnly: true,
	description: 'Permite banir o usuário mencionado',
	aliases: ['banir'],
	usage: "Use 'ban [@NomeDoUsuário] para banir!",
	cooldown: 5,
	execute(message, args) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('BAN_MEMBERS', false, false)) {
			const user = message.mentions.users.first();
			const reason = args
			if (!message.mentions.users.size) {
				return message.channel.send(`${message.author} Você precisa mencionar um usuário válido para banir!`);
			}
			message.guild.ban(user);
			message.channel.send(`${message.author} O usuário ${user} foi banido do servidor com sucesso! Motivo: ${reason}`)
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
       
	},
};
