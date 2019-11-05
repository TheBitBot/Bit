/* Informações
   Nome: Comando - Warn
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'warn',
	guildOnly: true,
	description: 'Dá um aviso e salva no banco de dados do bot!',
	aliases: ['avisar'],
	usage: 'Use !warn [@NomeDoUsuário] para dar um warn ao usuário mencionado!',
	cooldown: 5,
	execute(message, args, db) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
			var user = message.mentions.users.first()

		
			db.ref(`Servidores/${message.guild.id}/Warns/${user}`).once('value').then(function(snap) {
			if(snap.val() === null) {
				db.ref(`Servidores/${message.guild.id}/Warns/${user}`).set({
					WarnsCount: 1
				})
			} else {
				var newWarnsCount = snap.val().WarnsCount + 1

				db.ref(`Servidores/${message.guild.id}/Warns/${user}`).set({
					WarnsCount: newWarnsCount
				})
			}
			
		})
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
		
		
        
    }
}
        

