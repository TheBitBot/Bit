/* Informações
   Nome: Comando - RenameChannel
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');

module.exports = {
	name: 'renamechannel',
	guildOnly: true,
	description: 'Muda o nome do canal mencionado!',
	aliases: ['renomearcanal'],
	usage: "'renameChannel #[Canal]",
	cooldown: 5,
	execute(message, args) {
        var member = message.guild.members.get(message.author.id);
        if (member.hasPermission('MANAGE_CHANNELS', false, false)) {
            var channel = message.mentions.channels.first()
            if(args[2] !== undefined && args[3] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] 
                
                channel.setName(novoNome)
            } else if(args[3] !== undefined && args[4] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3]
                
                channel.setName(novoNome)
    
            } else if(args[4] !== undefined && args[5] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4]
                console.log(novoNome)
                channel.setName(novoNome)
    
            } else if(args[5] !== undefined && args[6] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5]
                
                channel.setName(novoNome)
    
            } else if(args[6] !== undefined && args[7] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6]
              
                channel.setName(novoNome)
    
            } else if(args[7] !== undefined && args[8] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6] + "\u2009" + "\u2009"+ args[7]
                
                channel.setName(novoNome)
    
            } else if(args[8] !== undefined && args[9] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6] + "\u2009" + "\u2009"+ args[7] + "\u2009" + "\u2009"+ args[8]
                
                channel.setName(novoNome)
    
            } else if(args[9] !== undefined && args[10] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6] + "\u2009" + "\u2009"+ args[7] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[9]
                
                channel.setName(novoNome)
    
            } else if(args[10] !== undefined && args[11] === undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6] + "\u2009" + "\u2009"+ args[7] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[10]
                
                channel.setName(novoNome)
    
            } else if(args[11] !== undefined) {
                var novoNome = args[1] + "\u2009" + "\u2009"+ args[2] + "\u2009" + "\u2009"+ args[3] + "\u2009" + "\u2009"+ args[4] + "\u2009" + "\u2009"+ args[5] + "\u2009" + "\u2009"+ args[6] + "\u2009" + "\u2009"+ args[7] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[8] + "\u2009" + "\u2009"+ args[11]
                
                channel.setName(novoNome)
    
            } else if(args[2] === undefined && args[3] === undefined) {
                var novoNome = args[1]
                channel.setName(novoNome)
            }
            
            
            
            
            message.channel.send(`${message.author} Nome do canal alterado com sucesso!`)/*.then(
                
                
            )*/
            //console.log(args)
            
	   	} else {
		   return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
	   	}
       
	},
};
