const Discord = require('discord.js');

module.exports = {
	name: 'bitunban',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args, db) {
    
        
        var memberBan = db.ref(``)
        memberBan.remove()

        
		
	},
};




