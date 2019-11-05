/* Informações
   Nome: Comandos - Invite
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'invite',
	guildOnly: true,
	description: 'Manda o invite do Bit!',
	aliases: [' ', ' '],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        
        var embed = new Discord.RichEmbed()
            .setColor(`#fcd535`)
            .setDescription(`${message.author} Se você ficou interessado em me adicionar em outros servidores, basta clicar [aqui!](https://discordapp.com/oauth2/authorize?client_id=618202633907208192&scope=bot&permissions=8)`)
            
        message.channel.send(embed)
    },
};
