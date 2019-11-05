/* Informações
   Nome: Comando - Kick
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	guildOnly: true,
	description: 'Expulsa uma pessoa do servidor!',
	aliases: ['expulsar', 'expulsardoservidor', 'guildkick', 'serverkick', 'kickserver', 'kickguild', 'kickuser', 'exupulsaruser', 'expulsarusuario'],
	usage: 'Use !kick [@NomeDoUsuário] [Motivo]',
	cooldown: 5,
	execute(message, args) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
			//Verifica se o usuário tem permissão para executar o comando. A permissão mínima é poder Manejar Mensagens
			const member = message.mentions.members.first();
			const reason = args
			if (!message.mentions.users.size) {
				return message.channel.send(`${message.author} Você precisa mencionar um usuário válido para expulsar!`);
			}
			member.kick();
		
        	message.channel.send(`${message.author} O usuário ${member} foi expulso do servidor com sucesso! Motivo: ${reason}`);
			
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
		
               
	},
};