/* Informações
   Nome: Comando - Set Join Sistem
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'joinmembermessage',
	guildOnly: true,
	description: 'Muda o prefixo do servidor!',
	aliases: [' ', ' '],
	usage: "",
	cooldown: 5,
	execute(message, args, db) {
		var member = message.guild.members.get(message.author.id);
		if(member.hasPermission('MANAGE_CHANNELS', false, false)) {
           
            var mensagem = args.join(' ')
			db.ref(`Servidores/${message.guild.id}/Configs/JoinMemberMessage`)
			.update({
				message: mensagem
			}).then(function(){
				message.channel.send(`${message.author} Sucesso!`)
			});
	
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
        
	},
};
