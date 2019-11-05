/* Informações
   Nome: Comando - ServerInfo
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
    name: 'serverinfo',
	guildOnly: true,
	description: 'Informa as principais informações do servidor!',
	aliases: ['servidorinfo'],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
        
        //Cria uma embed com as principais informações do server
        let embed = new Discord.RichEmbed() 

            .setTitle(`Info do Servidor ${message.guild.name} (${message.guild.id})`) //Título: Nome do server e ID
            .setThumbnail(`${message.guild.iconURL}`) //Ícone do server como Thumbnail
            .setColor(`RANDOM`) //Cor da embed: RANDOM
            .addField(`Nome:`, message.guild.name) //Nome do server
            .addField(`Membros:`, message.guild.members.size) //Quantidade de membros
            .addField(`Canais:`, message.guild.channels.size) //Quantidade de canais
            .addField(`Dono:`, message.guild.owner) //Dono do server (mostra o @NomeDoDono mas não menciona, já que é dentro de uma embed)  
            .addField(`Criado em:`, message.guild.createdAt) //Data e hora (em UTC ainda) da criação do server
            .addField(`Região:`, message.guild.region) //Região do server
            .addField(`Shard:`, message.client.shard.id) //Shard onde o server está sendo "executado" ou "hospedado"
            .setFooter(`${message.author.username}`) //Footer com nome do solicitante
			
        message.channel.send(embed) //Manda a embed no canal
	},
};
