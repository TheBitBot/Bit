/* Informações
   Nome: Comando - UnBan
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'unban',
	guildOnly: true,
	description: 'Desbane o usuário mencionado',
	aliases: [' '],
	usage: 'Use !unban [@NomeDoUsuário] para desbanir!',
	cooldown: 5,
	execute(message, args) {
        var member = message.guild.members.get(message.author.id);
        if (member.hasPermission('BAN_MEMBERS', false, false)) {
			//Procura pelo usuário mencionado
            const user = message.mentions.users.first();
            //Verifica se um usuário foi mencionado
            if(!user) message.channel.send(`${message.author} Você precisa mencionar um usuário para desbanir!`)
    
            //Desbane o usuário
            message.guild.unban(user);
            //Manda a mensagem confirmando
            message.channel.send(`${message.author} O usuário ${user} foi desbanido do servidor com sucesso!`)
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
        
	},
};
