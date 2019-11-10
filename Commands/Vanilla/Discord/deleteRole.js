/* Informações
   Nome: Comando - deleteRole
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'deleterole',
	guildOnly: true,
	description: 'Deleta o cargo mencionado',
	aliases: ['dRole'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
		var member = message.author
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
			const roleName = args[0]
			message.guild.roles.find(role => role.name === roleName).delete();
			message.channel.send(`${message.author} Role ${roleName} deletada com sucesso!`)
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
       
	},
};
