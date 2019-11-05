/* Informações
   Nome: Comando - UnWarn
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');
var firebase = require('firebase-admin')

module.exports = {
	name: 'unwarn',
	guildOnly: true,
	description: 'Retira a warn do usuário mencionado!',
	aliases: ['avisar'],
	usage: 'Use !unwarn [@NomeDoUsuário] para retirar uma warn do usuário mencionado!',
	cooldown: 5,
	execute(message, args, db) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('KICK_MEMBERS', false, false)) {
			var user = message.mentions.users.first()

        db.ref(`Servidores/${message.guild.id}/Warns/${user}`).once('value').then(function(snap) {
			if(snap.val() === null) {
				message.channel.send(`${message.author} Este usuário não possui punições ainda!`)
			} else {
					message.channel.send(`${message.author} Você deseja retirar todas as punições do usuário ou apenas a última? :heavy_check_mark: para Todas e :x: para Apenas a Última`).then(msg => {
						msg.react('✔')
						.then(msg.react('❌'))

						const filter = (reaction, user) => {
							return reaction.emoji.name === '✔', '❌' && user.id === message.author.id;
						};
						
						const collector = msg.createReactionCollector(filter, { time: 30000 });
						
						collector.on('collect', (reaction, reactionCollector) => {
							if(reaction.emoji.name === '✔') { 

								msg.edit(`${message.author} Todas as punições do usuário foram retiradas com sucesso!`)

								var i = firebase.database().ref(`Servidores/${message.guild.id}/Warns/${user}`)
								i.remove()
								

							} else if(reaction.emoji.name === '❌') {

								msg.edit(`${message.author} A última punição do usuário foi retirada com sucesso!`)

								db.ref(`Servidores/${message.guild.id}/Warns/${user}`).once('value').then(function(snap) {
									if(snap.val().WarnsCount === 1) {
										db.ref(`Servidores/${message.guild.id}/Warns/${user}`).delete()
									} else {
										var newWarnsCount = snap.val().WarnsCount - 1

										db.ref(`Servidores/${message.guild.id}/Warns/${user}`).set({
										WarnsCount: newWarnsCount
										})
									}
								})
								



							}
							
							
						});
					})
				

				
			}
			
		})
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
		
    
    }
}
        

