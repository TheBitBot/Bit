/* Informações
   Nome: Comando - SoftBan
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'slowmode',
	guildOnly: true,
	description: 'Seta um slowmode no canal atual!',
	aliases: ['setslowmode', 'setarslowmode', 'ratelimit', 'setarratelimit', 'setratelimit'],
	usage: "'slowmode [Segundos para o Slowmode]",
	cooldown: 5,
	execute(message, args) {
        var member = message.guild.members.get(message.author.id);
        if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
			if(args[0] === undefined) {
                message.channel.send(`${message.author} Você precisa inserir o número de segundos para eu definir o Slowmode do canal!`)
            } else if(args[0] !== Number) {
                message.channel.send(`${message.author} O número de segundos não pode ser uma letra!`)
            } else {
                message.channel.setRateLimitPerUser(args[0])
                message.channel.send(`${message.author} O slowmode do canal foi alterado para ${args[0]} segundos com sucesso!`)
            }
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
        
        

        
	},
};
