/* Informações
   Nome: Comando - Guild Icon
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'guildicon',
	guildOnly: true,
	description: 'Mostra as informaões do Bit!',
	aliases: ['bitinfo', 'bitbotinfo', 'botbitinfo'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        
        var iconURL = message.guild.iconURL
        message.channel.send(`${message.author} Aqui está o ícone deste incrível servidor!\n${iconURL}`)
        
	},
};
