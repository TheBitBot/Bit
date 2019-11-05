/* Informações
   Nome: Comando - Help
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js')
const prefix = "'"

module.exports = {
	name: 'help',
	description: 'Lista todos os meus comandos e fornece a ajuda individual de cada um também!',
	aliases: ['commands', 'comandos', 'bothelp', 'bithelp'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args, database) { 
		
		//Ajuda individual de cada comando
		if(args.length) {
		const data = [];
		const { commands } = message.client;
		const name = args[0]
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.channel.send(`${message.author} Este não é um comando válido!`);
		}

		data.push(`**Nome:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descrição:** ${command.description}`);
		if (command.usage) data.push(`**Como usar:** ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} segundos(s)`);

		message.channel.send(data, { split: true });
		
		} else {

		//Agora sim, a mensagem de ajuda

		var discord = message.client.emojis.find(emoji => emoji.name === "discord");
		
		var embed = new Discord.RichEmbed()
		  .setColor(`#38CF1D`)
		  .setTitle(`BitHelp`)
		  .setDescription(`Oi, ${message.author}! Eu me chamo Bit e pelo visto você está com uma dúvida, certo? Então, pode deixar comigo que eu te explico tudo!\nPara obter a ajuda individual de cada comando, use \`'help [Nome do Comando]\`\n**English:** Soon...™\n\nEscolha uma das categorias abaixo!\n`)
		  .addField(`:cop: Administração`, "`ban, kick, mute, clear, etc.`")
		  .addField(`${discord} Discord`, "`avatar, deleteRole, etc.`")
		  .addField(`:money_with_wings: Economia`, "Em desenvolvimento...™")
		  .addField(`:tada: Diversão`, "`flipcoin, roll, etc.`")
		  .addField(`:package: Miscelânea`, "`ping, say, etc.`")
		  .addField(`:camera_with_flash: Imagens`, "Em desenvolvimento...™")
		  .addField(`:sunglasses: Social`, "Em desenvolvimento...™")
		  .addField(`:tools: Utils`, "`botinfo, help, status, etc.`")
		  .setFooter(`Clique em uma das reações abaixo para entrar na categoria!`)

		var admEmbed = new Discord.RichEmbed()
			.setColor(`#3ccee8`)
			.setTitle(`Comandos de Administração`)
			.setDescription(`Comandos de Administração`)
			.addField(`ban`, `Bane o usuário mencionado`)
			.addField(`clear`, `Limpa o canal desejado (até 100 mensagens postadas até duas semanas atrás)`)
			.addField(`dashboard`, `Mostrará a dashboard **quando** ela estiver pronta`)
			.addField(`kick`, `Expulsa o usuário mencionado`)
			.addField(`lock`, `Trava o canal desejado para usuários comuns`)
			.addField(`mute`, `Muta o usuário mencionado`)
			.addField(`roleInfo`, `Mostra algumas informações sobre o cargo mencionado`)
			.addField(`slowmode`, `Define o slowmode do canal com o tempo desejado (Dica: o tempo é sempre em segundos)`)
			.addField(`softban`, `Bane e depois desbane o usuário para limpar as suas mensagens`)
			.addField(`unban`, `Desbane o usuário mencionado`)
			.addField(`unlock`, `Destrava o canal atual`)
			.addField(`unmute`, `Desmuta o usuário mencionado`)
			.addField(`Sistema de Warn`, `Em desenvolvimento...™`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)

		var discordEmbed = new Discord.RichEmbed()
			.setColor(`#4778ff`)
			.setTitle(`Comandos do Discord`)
			.setDescription(`Estes comandos servem para agilizar o seu dia-a-dia, eles podem renomear canais, mostrar informações,\netc.`)
			.addBlankField()
			.addField(`avatar`, `Mostra o avatar do usuário mencionado! Inclusive o meu!`)
			.addField(`botInfo`, `Mostra algumas informações sobre mim!`)
			.addField(`channelInfo`, `Mostra as informações sobre um canal!`)
			.addField(`deleteRole`, `Deleta o cargo mencionado`)
			.addField(`roleInfo`, `Mostra as informações sobre o cargo mencionado`)
			.addField(`serverInfo`, `Mostra as informações do servidor atual`)
			.addField(`userInfo`, `Mostra as informações do usuário mencionado`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)
			
			
		var funEmbed = new Discord.RichEmbed()
			.setColor(`#47ffa6`)
			.setTitle(`Comandos de Diversão`)
			.setDescription(`Afim de jogar uma moeda, um dado? Confira abaixo os meus comandos de diversão!`)
			.addField(`flipCoin`, `Joga uma moeda e diz o lado que ela caiu!`)
			.addField(`roll`, `Joga um dado e diz em qual face ele caiu!`)
			.addField(`tioDoPave`, `Em desenvolvimento...™ Mas já se prepare para a risada!`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)


		var miscEmbed = new Discord.RichEmbed()
			.setColor(`#ffe647`)
			.setTitle(`Comandos Aleatórios`)
			.setDescription(`Abaixo estão alguns comandos que não se encaixam ainda em uma categoria, mas são úteis!`)
			.addField(`invite`, `Manda o meu invite para me adicionar em outros servidores`)
			.addField(`ping`, `Mostra o meu ping e o ping da API\n**Aviso: O comando Ping está em Beta e pode não funcionar corretamente!**`)
			.addField(`say`, `Me faz falar (ou repetir) o que você quiser!`)
			.addField(`votar`, `Explica sobre como votar em mim na Discord Bots List (ou top.gg)\n**Aviso: O bot ainda não está na Discord Bots List**`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)
		
		var utilsEmbed = new Discord.RichEmbed()
			.setColor(`#47ff5c`)
			.setTitle(`Comandos Úteis`)
			.setDescription(`Aqui estão alguns comandos que podem ser úteis para você!`)
			.addField(`generateKey`, `Gera uma key com a quantidade de caracteres que você desejar!`)
			.addField(`help`, `É este comando! Ele mostra todos os meus comandos!`)
			.addField(`prefix`, `Seta o prefixo do servidor atual!`)
			.addField(`status`, `Mostra o meu status no momento!`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)

		var imgEmbed = new Discord.RichEmbed()
			.setColor(`#ff5959`)
			.setTitle(`Comandos de Imagem`)
			.setDescription(`Aqui estão alguns comandos com imgagens para você criar imagens legais ou zuar os outros!`)
			.setFooter(`Clique no 🔙 para voltar para a home!`)


		message.author
		  .createDM()
		  .then((DMChannel) => {
				// We have now a channel ready.
				// Send the message.
				DMChannel.send(embed).then(msg => {
					msg.react('👮')
						.then(msg.react(message.client.emojis.find(emoji => emoji.name === "discord")))
					    //.then(//msg.react('💸'))
						.then(msg.react('🎉'))
						//.then(msg.react('📸'))
						.then(msg.react('📦'))
					    //.then(msg.react('😎'))
					    .then(msg.react('🛠'))
						.then(msg.react('🔙'))
						//.then(msg.react('🇺🇸'))

					const filter = (reaction, user) => {
						return reaction.emoji.name === '👮', '💸', '🎉', '📸', '📦', '😎', '🛠', '🇺🇸','🔙' && user.id === message.author.id;
					};
					
					const collector = msg.createReactionCollector(filter, { time: 300000 });
					
					collector.on('collect', (reaction, reactionCollector) => {
						if(reaction.emoji.name === '👮') { // Administração
							msg.edit(admEmbed)
						} else if(reaction.emoji.name === 'discord') {
							msg.edit(discordEmbed)
						} else if(reaction.emoji.name === '🎉') {
							msg.edit(funEmbed)
						} else if(reaction.emoji.name === '📦') {
							msg.edit(miscEmbed)
						} else if(reaction.emoji.name === '🛠') {
							msg.edit(utilsEmbed)
						} else if(reaction.emoji.name === '🔙') { // Home
							msg.edit(embed)
						}
						
						
					});
					
					collector.on('end', collected => {
						
					});

				  
	      }).then(() => {
			  if (message.channel.type === 'dm') return;
			  message.channel.send(`${message.author} Eu enviei uma mensagem na sua DM com o comando de ajuda!`).then(msg => msg.react('✔'))
		  })
		  .catch(error => {
			  message.channel.send(`${message.author} Eu não consegui enviar uma DM para você! Por favor, verifique as suas configurações do Discord ou fale com o meu suporte em: https://discord.gg/afkYf3v`);
		  });
		})
			 
	}
		  
  },
}