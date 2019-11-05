/* Informações
   Nome: Comando - Clear
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'clear',
	guildOnly: true,
	description: 'Limpa a quantidade desejada de mensagens em um canal',
	aliases: ['clean', 'limparcanal', 'clearchannel', 'canallimpar', 'limpezacanal', 'limpar', 'limpeza'],
	usage: "'clear [Quantidade de mensagens a serem limpas]",
	cooldown: 0,
	execute(message, args) {
		var member = message.guild.members.get(message.author.id);
		if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
			//Verifica se o usuário tem permissão para executar o comando. A permissão mínima é poder Manejar Mensagens
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} Você não tem a permissão de Gerenciar Mensagens! Por isso, o comando não pôde ser exeucutado!`);
			//Caso o usuário não tenha enviado o número de mensagens necessárias, ele avisa e dá o Return
			if(!args[0]) return message.channel.send(`${message.author} Você não inseriu o número de mensagens a serem excluídas! Lembrando, o máximo de mensagem a serem excluídas é de 100 mensagens`);
			/*if(message.deletable !== false) {
				message.channel.send(`${message.author} Ocorreu um erro enquanto eu tentava excluir as mensagens! Lembrando, eu só posso exlcuir até 100 mensagens por vez e eu só posso deletar mensagens que tenham menos que duas semanas!`).then(msg => msg.delete(5000));
				return
			}*/
	
			if(args[0] > 100) return message.channel.send(`${message.author} O limite de mensagens a serem excluídas por vez é 100 mensagens e **VOCÊ NÃO PODE EXCLUIR MENSAGENS COM MAIS DE 14 DIAS**!`)
			message.channel.bulkDelete(args[0], filterOld = true).then(() => {
				message.channel.send(`${message.author} Foram excluídas ${args[0]} mensagens!`).then(msg => msg.delete(5000));
			})
			
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
		
 }
}
