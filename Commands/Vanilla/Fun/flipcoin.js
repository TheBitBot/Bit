/* Informações
   Nome: Comando - FlipCoin Fun
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'flipcoin',
	guildOnly: true,
	description: 'Joga uma moeda e diz qual lado caiu!',
	aliases: ['caracoroa', 'flipmoeda', 'caraoucoroa', 'moedaflip'],
	usage: '',
	cooldown: 0,
	execute(message, args) {
        //Gera um número aleatório de 0 a 10
        let number = Math.floor (Math.random() * 10)
        //Resultado Cara (Igual ou menor que 5)
        if(number <= 5) message.channel.send(`${message.author} O resultado foi Cara!`)
        //Resultado Coroa (Maior que 5)
        if(number > 5) message.channel.send(`${message.author} O resultado foi Coroa!`)
	},
};
