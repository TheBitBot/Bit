/* Informações
   Nome: Comandos - Votar (DBL)
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
    name: 'dbl',
	guildOnly: true,
	description: ' ',
	aliases: ['votardbl', 'dblvotar', 'discordbotslist', 'bitdbl', 'bitvotardbl', 'topgg', 'infodbl', 'dblinfo'],
	usage: '',
	cooldown: 5,
	execute(message, args) {

		
		
		let embed = new Discord.RichEmbed()
			.setColor(`RANDOM`)
			.setTitle(`Me ajude na Discord Bots List`)
			.setDescription(`A Discord Bot List (ou agora, top.gg) é uma lista de bots onde os criadores podem divulgar cada um os seus bots e mais pessoas podem conhecer e começar a usar o Bit por causa dela!\nE sabia que você pode me ajudar lá votando e com isso você ganha recompensas incríveis?\nEntão, por favor, vote em mim, pois isso me ajuda **muito mesmo**!\nConfira o link abaixo para votar, ver as recompensas e o meu link lá para você compartilhar com os seus amigos!`)
			.addField(`Vote em mim:`, `https://top.gg/bot/618202633907208192/vote`)
			.addField(`Confira as recompensas quando você vota em mim!`, `https://discord.gg/hbrhQbf`)
			.addField(`Meu perfil na DBL`, `https://top.gg/bot/618202633907208192`)

			message.channel.send(embed)
	
	},
};
/*

A Discord Bot List (ou agora, top.gg) é uma lista de bots onde os criadores podem divulgar cada um os seus bots e mais pessoas podem conhecer e começar a usar o Bit por causa da DBl!
Então, para me ajudar, vote em mim! Basta você clicar [aqui!](https://top.gg/bot/618202633907208192)
Você ganha recompensas conforme você vai votando! Confira todas elas clicando [aqui!](https://)



*/