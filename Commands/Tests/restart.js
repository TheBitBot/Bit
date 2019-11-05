const Discord = require('discord.js');
const app = require('../../app.js')

module.exports = {
	name: 'restart',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
        if(message.author.id === '383661058029649920') {
            
            message.channel.send(`${message.author} Desligando o bot...`)
                .then(process.exit())
        } else if(message.author.id !== '383661058029649920') {
            return message.channel.send(`${message.author} Apenas o Peter_0101 pode usar este comando!`)
        }
       
		
	},
};




