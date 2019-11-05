/* Informações
   Nome: Sistema de Sharding
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./app.js');
Manager.spawn(1); 