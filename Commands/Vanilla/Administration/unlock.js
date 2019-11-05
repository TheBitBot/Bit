/* Informações
   Nome: Comando - Unlock
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'unlock',
	guildOnly: true,
	description: 'Desbloqueia um canal para que usuários comuns possam enviar mensagens!',
	aliases: ['desbloquear', 'desbloquearcanal', 'unlockchannel'],
	usage: "Use 'unlock no canal que deseja desbloquear!",
	cooldown: 5,
	execute(message, args) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
			message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: true });
        message.channel.send(`${message.author} O canal foi desbloqueado com sucesso! Agora usuários normais podem voltar a enviar mensagens!`);
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
        
	},
};