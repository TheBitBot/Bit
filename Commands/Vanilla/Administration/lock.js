/* Informações
   Nome: Comando - Lock
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'lock',
	guildOnly: true,
	description: 'Bloqueia um canal para que usuários comuns não possam enviar mensagens!',
	aliases: ['bloquear'],
	usage: 'Use !lock no canal que deseja bloquear!',
	cooldown: 5,
	execute(message, args) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
			message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
        	message.channel.send(`${message.author} O canal foi bloqueado com sucesso! Para desbloquear, use !unlock no canal!`);
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
        
	},
};