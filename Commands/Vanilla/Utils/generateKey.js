const Discord = require('discord.js');


    
//const random =require('random-key-generator');       
  
              
 
module.exports = {
	name: 'key',
	guildOnly: true,
	description: 'Gera uma key com o comprimento informado no primeiro argumento do comando!',
	aliases: ['genkey', 'generatekey', 'keygenerator', 'genkey', 'keygenerate', 'generatorkey'],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
		//message.channel.send(`${message.author} A key gerada foi:\n${random(args[0])}`)
	},
};