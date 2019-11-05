/* Informações
   Nome: Comando - BotInfo
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'botinfo',
	guildOnly: true,
	description: 'Mostra as informaões do Bit!',
	aliases: ['bitinfo', 'bitbotinfo', 'botbitinfo'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Olá, eu me chamo Bit! E sou um incrível bot para o Discord que busca ajudar os moderadores e divertir os membros!\n
            Nesse momento, eu estou em **${message.client.guilds.size} servidores**!\n
            Eu estou on-line desde **${message.client.readyAt}**!\n\n
            Eu fui programado em JavaScript usando o Discord.js!`)
            .addField(`Me adicione!`, `https://bit.ly/bitinvite`)
            .addField(`Suporte!`, `https://bit.ly/bitsuporte`)
            .setFooter('Menções honrosas a `Peter_0101#4567`, o meu incrível criador!')
        
        message.channel.send(embed)    
        
	},
};
