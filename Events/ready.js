/* Informações
   Nome: Eventos - Ready
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

module.exports = client => {
  
  const configs = require('../Configs/configs.json')
    //Console.log
	//Exibe as informações de quantidade de Servidores, Canais e Usuários no console!
	console.log(`[INFO] Bot foi iniciado, com o Username: ${client.user.username} no shard ${client.shard.id} com o status ${client.status}\n`);
  console.log(`[INFO] Pronto às ${client.readyAt}\n`)
  
  if(client.shard.id === configs.shardsCount - 1) {
    console.log(`\n[SHARDING] Todos os shards foram iniciados com sucesso!\n`)
    client.shard.fetchClientValues('guilds.size')
	    .then(results => {
		    var guildsCount = results.reduce((prev, guildCount) => prev + guildCount, 0)
	
	  client.shard.fetchClientValues('channels.size')
	    .then(results => {
		    var channelsCount = results.reduce((prev, guildCount) => prev + guildCount, 0)
	
	  client.shard.fetchClientValues('users.size')
	    .then(results => {
        var usersCount = results.reduce((prev, guildCount) => prev + guildCount, 0)

        console.log(`\n[INFO] Servidores: ${guildsCount}\n[INFO] Canais: ${channelsCount}\n[INFO] Usuários: ${usersCount}\n`)
        console.log(`----------------------------------------------`)
        
      })
    })
  })
  }
	
    
    
    
    //console.log(`[INFO] Servidores: ${guildsCount}\n[INFO] Canais: ${channelsCount}\n[INFO] Usuários: ${usersCount}`)
 
	
    //console.log(``)
    
    
    //Seta a presença padrão no Bot!
	  client.user.setPresence({ game: { name: `😜 Estou em ${client.guilds.size} servidores com um total de ${client.users.size} usuários!`, type: 2, url: 'https://twitch.tv/Peter_0101'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
/*
    }) //Fechamendo do Guilds.Size
   }) //Fechamendo do Channels.Size
  }) //Fechamendo do Users.Size
*/
  


}