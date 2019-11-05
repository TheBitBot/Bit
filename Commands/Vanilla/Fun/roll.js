/* Informações
   Nome: Comando - Roll Fun (Dado)
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'roll',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 0,
	execute(message, args) {
        //Gera um número aleatório de 0 a 10
        let number = Math.floor(Math.random() * 6);
        //Envia qual foi a face que caiu
        message.channel.send(`${message.author} Eu joguei o dado e o que caiu foi a face ${number}!`)

	},
};
