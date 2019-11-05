/* Informações
   Nome: Comando - Mute
   Autor: Peter_0101#4567
   Última data de modificação: 30/10/2019
   Linguagem: JavaScript
*/


module.exports = {
	name: 'mute',
	guildOnly: true,
	description: 'Muta o usuário mencionado!',
	aliases: [' '],
	usage: '!mute [@NomeDoUsuário] ',
	cooldown: 5,
	execute(message, args) {
        var member = message.guild.members.get(message.author.id);
        if (member.hasPermission('KICK_MEMBERS', false, false)) {
             //Busca pelo membro
        const user = message.mentions.users.first()
        //Verifica se o usuário foi mencionado
        if(!user) return message.channel.send(`${message.author} Você precisa mencionar um usuário para mutar!`)
        
        //Muta o usuário usando a função setMute e depois manda uma mensagem confirmando
        user.setMute(true)
            .then(() => message.channel.send(`${message.author} O usuário ${user} foi mutado com sucesso!`))
        } else {
            return message.channel.send(`${message.author} Você não tem as permissões necessárias!`)
        }

       
        
        
        
        
     
       
    },
};
