/* Informações
   Nome: Comando - Avatar
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
	guildOnly: true,
	description: 'Mostra o avatar do usuário mencionado',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
        let user = message.mentions.users.first()
        
        if(user === undefined) {
                let embed = new Discord.RichEmbed()
                .setImage(message.author.avatarURL)
                .setTitle('Avatar do usuário')
                .setFooter(message.author.username)
                .setColor('#7d3bd4')
                message.channel.send(embed)  
        } else {
                let embed = new Discord.RichEmbed()
                .setImage(user.avatarURL)
                .setTitle('Avatar do usuário')
                .setFooter(user.username)
                .setColor('#7d3bd4')
                message.channel.send(embed)
        }
        


      
	},
};
