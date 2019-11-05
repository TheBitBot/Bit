/* Informações
   Nome: Comando - Status
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'status',
	guildOnly: true,
	description: 'Mostra em quantos servidores eu estou e com quantos usuários eu estou interagindo!',
	aliases: ['botstatus', 'botstats', 'bitstats', 'bitstatus'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        const promises = [
            message.client.shard.fetchClientValues('guilds.size'),
            message.client.shard.broadcastEval('this.guilds.reduce((prev, guild) => prev + guild.memberCount, 0)'),
        ];
        
        Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
                const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
                return message.channel.send(`${message.author} Eu estou em ${totalGuilds} servidores com um total de ${totalMembers} membros!`);
            })
            .catch(console.error);
     
	},
};

