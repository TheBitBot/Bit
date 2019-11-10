/* Informações
   Nome: Comandos - Choose
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'choose',
	guildOnly: true,
	description: 'Escolhe entre duas coisas para você!',
	aliases: ['escolher', 'decidir'],
	usage: "'choose [Escolha 1] [Escolha 2]",
	cooldown: 5,
	execute(message, args) {

        if(args[0] === undefined || args[1] === undefined) {
            return message.channel.send(`${message.author} Você precisa me dar duas alternativas para escolher!`)
        }
        
        //Gera um número aleatório de 0 a 10
        let number = Math.floor (Math.random() * 10)
        //Resultado Cara (Igual ou menor que 5)
        if(number <= 5) message.channel.send(`${message.author} Eu escolhi a opção ${args[0]}`)
        //Resultado Coroa (Maior que 5)
        if(number > 5) message.channel.send(`${message.author} Eu escolhi a opção ${args[1]}`)
        
    },
};
