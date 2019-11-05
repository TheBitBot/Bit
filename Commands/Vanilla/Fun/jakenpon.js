/* Informações
   Nome: Comando - FlipCoin Fun
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'jokenpo',
	guildOnly: true,
	description: 'Joga uma moeda e diz qual lado caiu!',
	aliases: ['caracoroa', 'flipmoeda', 'caraoucoroa', 'moedaflip'],
	usage: '',
	cooldown: 0,
	execute(message, args) {
        var escolhaUser = args[0]
        var escolhaBot = ''
        
        if(escolhaUser !== 'pedra' || escolhaUser !== 'papel' || escolhaUser !== 'tesoura') return message.channel.send(`${message.author} Você deve mandar \`'jokenpo [Sua escolha]\`. A sua escolha pode ser \`Pedra\`, \`Papel\` ou \`Tesoura\`!`)

        let number = Math.floor (Math.random() * 15)
        if(number <= 5) var escolhaBot = 'pedra'
        if(number > 5 && number < 11) var escolhaBot = 'papel'
        if(number >= 11) var escolhaBot = 'tesoura'

        if(escolhaUser === 'papel' && escolhaBot === 'pedra') {
                message.channel.send(`${message.author} Você jogou Papel e eu joguei Pedra. Então, quem ganhou foi você!`)
        } else if(escolhaUser === 'pedra' && escolhaBot === 'papel') {
                message.channel.send(`${message.author} Você jogou Pedra e eu joguei Papel. Então, quem ganhou fui eu!`)
        } else if(escolhaUser === 'tesoura' && escolhaBot === 'papel') {
                message.channel.send(`${message.author} Você jogou Tesoura e eu joguei Papel. Então, quem ganhou foi você!`)
        } else if(escolhaUser === 'papel' && escolhaBot === 'tesoura') {
                message.channel.send(`${message.author} Você jogou Papel e eu joguei Tesoura. Então, quem ganhou fui eu!`)
        } else if(escolhaUser === 'tesoura' && escolhaBot === 'pedra') {
                message.channel.send(`${message.author} Você jogou Tesoura e eu joguei Pedra. Então, quem ganhou fui eu!`)
        } else if(escolhaUser === 'pedra' && escolhaBot === 'tesoura') {
                message.channel.send(`${message.author} Você jogou Pedra e eu joguei Tesoura. Então, quem ganhou foi você!`)
        } else if(escolhaUser === 'pedra' && escolhaBot === 'pedra') {
                message.channel.send(`${message.author} Você jogou Pedra e eu também joguei Pedra. Então, nós empatamos!`)
        } else if(escolhaUser === 'papel' && escolhaBot === 'papel') {
                message.channel.send(`${message.author} Você jogou Papel e eu também joguei Papel. Então, nós empatamos!`)
        } else if(escolhaUser === 'tesoura' && escolhaBot === 'tesoura') {
                message.channel.send(`${message.author} Você jogou Tesoura e eu também joguei Tesoura. Então, nós empatamos!`)
        }

	},
};
