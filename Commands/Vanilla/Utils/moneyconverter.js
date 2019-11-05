/* Informações
   Nome: Comando - Help
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js')


module.exports = {
	name: 'money',
	description: 'Converte moedas!',
	aliases: ['commands', 'comandos', 'bothelp', 'bithelp'],
	usage: "money [Moeda 1] [Moeda 2] [Valor]",
	cooldown: 5,
	execute(message, args, database) { 
        
        var moeda1 = args[0]
        var moeda2 = args[1]
        var valor = args[2]
        message.channel.send(`${message.author} Função em desenvolvimento! Mas enquanto isso, você pode converter dinheiro aqui: https://www.google.com/search?q=conversor+de+moedas&oq=Conversor+de+Moedas&aqs=chrome.0.69i59j0l5.4238j1j9&sourceid=chrome&ie=UTF-8`)
		
  },
}