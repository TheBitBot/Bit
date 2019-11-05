/* Informações
   Nome: Docs - Base dos Comandos
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'tiodopave',
	guildOnly: true,
	description: 'Mostra uma piada do Tio do Pavê',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
        
       message.channel.send(`${message.author} Soon™`)
	},
};



