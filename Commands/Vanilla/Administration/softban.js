/* Informações
   Nome: Comando - SoftBan
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'softban',
	guildOnly: true,
	description: 'Bane e depois desbane o usuário mencionado',
	aliases: [' '],
	usage: "'softban [@NomeDoUsuário]",
	cooldown: 5,
	execute(message, args) {
        var member = message.guild.members.get(message.author.id);
        if (member.hasPermission('BAN_MEMBERS', false, false)) {
			//Procura pelo usuário mencionado
            const user = message.mentions.users.first();
            //Verifica se um usuário foi mencionado
            if(!user) message.channel.send(`${message.author} Você precisa mencionar um usuário para dar um softban!`)
    
            //Primeiro, ele bane o usuário
            message.guild.unban(user);
            //Depois, ele desbane ele
            message.guild.unban(user);
            
            //E por último, ele manda a mensagem confirmando
            message.channel.send(`${message.author} O usuário ${user} recebeu um softban com sucesso!`)
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
        
	},
};
