/* Informações
   Nome: Comando - Prefix (Configuração de Prefixo)
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'prefix',
	guildOnly: true,
	description: 'Muda o prefixo do servidor!',
	aliases: [' ', ' '],
	usage: "'prefix [Novo Prefixo]",
	cooldown: 5,
	execute(message, args, database) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('ADMINISTRATOR', false, false)) {
			var NewPrefix = args[0];
        	database.ref(`Servidores/${message.guild.id}/Configs/`)
			    .update({
					prefix: NewPrefix,
				}).then(function(){
                    message.channel.send(`${message.author} Prefixo alterado para ${NewPrefix} com sucesso!`)
                });
		
		} else {
			return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
		}
        
	},
};
