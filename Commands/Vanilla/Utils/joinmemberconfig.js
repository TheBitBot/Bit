/* Informações
   Nome: Comando - Set Join Sistem
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'joinmemberconfig',
	guildOnly: true,
	description: 'Seta as configurações do sistema de entrada de membros!',
	aliases: [' ', ' '],
	usage: "'joinMemberConfig ['on' ou 'off'] [Canal de notificações]",
	cooldown: 5,
	execute(message, args, db) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
			var escolha = args[0]
			var canal1 = message.mentions.channels.first()
			if(!escolha) return;
            if(escolha == 'on' || escolha == 'ligado') {
                db.ref(`Servidores/${message.guild.id}/Configs`)
			    .update({
					memberJoinSistem: true
				}).then(function(){
                    message.channel.send(`${message.author} Sistema ligado com sucesso!`)
                });
            } else if(escolha == 'off' || escolha == 'desligado') {
                db.ref(`Servidores/${message.guild.id}/Configs`)
			    .update({
					memberJoinSistem: false
				}).then(function(){
                    message.channel.send(`${message.author} Sistema desligado com sucesso!`)
                });
			}
			if(!canal1) {
				return
			} else {
				db.ref(`Servidores/${message.guild.id}/Configs/JoinMemberMessage`)
			    .update({
					canal: canal1.id
				})
			}

			
        	
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
        
	},
};
