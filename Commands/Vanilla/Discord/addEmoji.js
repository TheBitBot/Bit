/* Informações
   Nome: Comando - Avatar
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'addEmoji',
	guildOnly: true,
	description: 'Mostra o avatar do usuário mencionado',
	aliases: ['createemoji', 'adicionaremoji'],
	usage: "'addemoji [Link do Emoji] [Nome do Emoji]",
	cooldown: 5,
	execute(message, args) {
        var member = message.author
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
            var emoji = args[0]
            var emojiName = args[1]
        
            if(args[0] === undefined || args[0] === null || args[1] === undefined || args[1] === null) {
                message.channel.send(`${message.author} Você deve enviar o comando com o Link do Emoji e depois o nome dele!`)
            }
        
            message.guild.createEmoji(args[0], args[1])
                .then(emoji => {
                    message.channel.send(`${message.author} O emoji ${args[1]} foi adicionado com sucesso!`)
                })
			
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
        
        
  

      
	},
};
