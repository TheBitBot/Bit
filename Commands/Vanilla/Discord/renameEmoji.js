/* Informações
   Nome: Comando - RenameEmoji
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'renameemoji',
	guildOnly: true,
	description: 'Mostra o avatar do usuário mencionado',
	aliases: ['renomearEmoji', 'emojiRename', 'emojirenomear'],
	usage: "'renameEmoji :Emoji: [Novo Nome]",
	cooldown: 5,
	execute(message, args) {
		var member = message.author
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
			var emoji = args[0]
			const ayy = message.guild.emojis.find(emoji => emoji.name === emoji);
			message.channel.send(`${message.author} ${emoji} editado com sucesso!`)
			
			ayy.edit({name: 'newemoji'})
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
	 
      
	},
};
