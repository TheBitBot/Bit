/* Informações
   Nome: Comando - emoji
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'emoji',
	guildOnly: true,
	description: 'Deleta o cargo mencionado',
	aliases: ['dRole'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        var usedEmoji = args[0]
        var emoji = usedEmoji.url
        
        message.channel.send(`${message.author} ${emoji}`)
	},
};
