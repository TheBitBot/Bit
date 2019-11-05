/* Informações
   Nome: Comandos - Dashboard
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'dashboard',
	guildOnly: true,
	description: 'Mostra o link da Dashboard do Bit!',
	aliases: ['bitsite', 'configbit', 'config', 'configurar', 'configurarbit', 'bitconfig', 'dashboardbit','bitdashboard'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        //Por enquanto
		message.channel.send(`${message.author} Soon™`)
		//Adicionar uma embed com todas as informações sobre a dashboard e sobre a configuração!
        
	},
};
