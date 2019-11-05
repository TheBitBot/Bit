/* Informações
   Nome: Comandos - RoleID
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'roleinfo',
	guildOnly: true,
	description: 'Mostra as informações da role mencionada',
	aliases: ['roleid', 'rolecolor'],
	usage: "'roleinfo [NOME da Role (não o @)]",
	cooldown: 5,
	execute(message, args) {
                //let role = message.guild.roles.find(role => role.name === args[0]);
                let myRole = message.mentions.roles.first()
                

                if (!myRole) { return message.channel.send(`${message.author} Eu não consegui encontrar esta Role! Mas não se desespere! Aqui vão alguns motivos possíveis para eu não ter achado a role:\n1. Pode ser que você tenha mencionado a Role, você deve apenas colocar o nome dela!\n2. A Role não pode ter os emojis do Discord. Deixe-os em Unicode (não colocar o emoji que fica :entre Dois-Pontos:)`); }
            
                let embed = new Discord.RichEmbed()
                .addField("Role:", `${myRole.name} - ID: ${myRole.id}`)
                .setColor(myRole.hexColor)
                .addField("🖌 Posição:", myRole.position, true)
                .addField("📊 Cor:", myRole.hexColor, true)
                .addField("📚 Usuários com este cargo:", myRole.members.size, false);

                message.channel.send(embed)
	},
};
