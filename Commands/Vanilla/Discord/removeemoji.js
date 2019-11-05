/* Informações
   Nome: Comando - removeEmoji
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'deleteEmoji',
	guildOnly: true,
	description: 'Deleta o cargo mencionado',
	aliases: ['dRole'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
		var member = message.author
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
            message.guild.deleteEmoji(args[0])
			.then(
				message.channel.send(`${message.author} O emoji ${args[0]} foi deletado com sucesso!`)
			)
			.catch(error => {
				message.channel.send(`${message.author} Houve um erro enquanto eu tentava excluir o emoji! Erro:\n${error}`)
			})
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
		
	},
};
