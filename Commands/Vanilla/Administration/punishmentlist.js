/* Informações
   Nome: Comando - PunishmentList
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'punishmentlist',
	guildOnly: true,
	description: 'Verifica quantas punições o usuário tem no servidor atual!',
	aliases: ['listadepunições'],
	usage: "'punishmentList [@Nome do Usuário]",
	cooldown: 5,
	execute(message, args, db) {
        var userMentioned = message.mentions.users.first()
        var userFinal = `<@${userMentioned.id}>`
            db.ref(`Servidores/${message.guild.id}/Warns/${userFinal}`).once('value').then(function(snap) {
                var warns = (snap.val() && snap.val().WarnsCount)
                message.channel.send(`${message.author} O usuário ${userMentioned} possui ${warns} warns nesse servidor!`)
            })
                
	},
};