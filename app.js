//Bit Release - Version 8.0
//Autor: Peter_0101#4567
//Licença AGPL V3 - LICENSE
//Github: https://github.com/BitBotCloud/Bit

//Bibliotecas:
//O Bit utiliza muitas bibliotecas para funcionar!
//Obrigado a todos os mantedores delas!

//FS:
//Essencial para a busca de arquivos no Gerenciador de Comandos!
fs = require('fs');

//Discord.js
//A principal, a única, a incrível biblioteca Discord.js!
//Ela permite a interação entre o bot e o Discord!
//Muito obrigago aos criadores dessa incrível biblioteca para JavaScript!
const Discord = require('discord.js');

//Config
//Arquivo de configuração da Token do bot!
const config = require('./Configs/configs.json');

//Cliente do Bot
//O cliente do bot que interage com a API do Discord através da Discod.js!
//Ele é essencial para o funcionamento do bot
const client = new Discord.Client();

//Ytdl
//O Ytdl permite tocar músicas vindas do Yotube!
const ytdl = require('ytdl-core');

//Coleção dos Cooldowns
//Para o sistema de cooldowns funcionar, ele precisa de uma coleção do Discord!
//Então, aqui está a declaração da coleção por meio de uma variável!
const cooldowns = new Discord.Collection();


//Firebase
//O Firebase é o DB secundário do Bit! Ele está sendo usado com o Firebase Admin, ou seja, de forma autenticada!
//Ele armazena os GlobalBans, as piadas do Tio do Pavê, entre outros!
var firebase = require("firebase-admin");

var serviceAccount = require(`./Configs/firebaseAuth.json`);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://bit-db.firebaseio.com"
})

const db = firebase.database()

//DBL Api
//Para manter o bot com a contagem de servidores, webhooks para votos e etc, é necessário utilizar a DBL Api
//A DBL Api é a API do Discordbots.org (ou top.gg)

//Para começar, devemos importar a DBL Api através do método Require
const DBL = require("dblapi.js");
//Em seguida, criamos o "cliente" da DBL Api, ele utiliza a token do Bit da DBL
const dbl = new DBL(config.dblToken, client);

//Quando a contagem de servidores é postada, ele executa um console.log informando!
dbl.on('posted', () => {
  console.log(`Contagem de servidores atualizada no DBL!`);
})

//Quando há um erro, ele utiliza outro console.log informando qual foi o erro!
dbl.on('error', dblError => {
 console.log(`[DBL] Houve um erro na postagem da quantidade de servidores no DBL! \n${dblError}`);
})

/*
//Events Loader
const evtFiles = fs.readdirSync("./Events");
console.log(`[EVENTOS] Estão sendo carregados um total de ${evtFiles.length} eventos\n`);
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  const event = require(`./Events/${file}`);
  
  client.on(eventName, event.bind(null, client, db));
});*/


//Events Loader - V2
eventsLoader()
function eventsLoader() {
	//Ready
	client.on('ready', () => {
		var event = require('./Events/ready.js')
		event(client, db)
	})
	//Reconnecting
	client.on('reconnecting', () => {
		var event = require('./Events/reconnecting.js')
		event(client, db)
	})
	//GuildCreate
	client.on('guildCreate', guild => {
		var event = require('./Events/guildCreate.js')
		event(client, guild, db)
	})
	//GuildDelete
	client.on('guildDelete', guild => {
		var event = require('./Events/guildDelete.js')
		event(client, guild, db)
	})
	//GuildMemberAdd
	client.on('guildMemberAdd', member => {
		var event = require('./Events/guildMemberAdd.js')
		event(client, member, db)
		var guild = member.guild
		console.log(member.guild)
		db.ref(`/Servidores/${guild.id}/Configs`).once('value').then(function(snapshot) {
		  var isOnOrOff = (snapshot.val() && snapshot.val().memberJoinSistem) || 'Anonymous';
		  
		if(isOnOrOff === false) return;
		
	  
		db.ref(`/Servidores/${guild.id}/Configs/JoinMemberMessage`).once('value').then(function(snapshot) {
		  
		  //Pega a mensagem
		  var mensagem = (snapshot.val() && snapshot.val().message) || 'Anonymous';
		  //Pega o ID do canal no Firebase
		  var canalID = (snapshot.val() && snapshot.val().canal) || 'Anonymous';
	  
		  //Pega o canal com o ID que está no Database
		  var canal = member.guild.channels.get(canalID)
		  
		  canal.send(mensagem)
	  })
	  })
	})
	//GuildMemberRemove
	client.on('guildMemberRemove', member => {
		var event = require('./Events/guildMemberRemove.js')
		event(member, db)
	})

	
}


client.on('guildCreate', guild => {
	
    
    
    firebase.database().ref(`Servidores/${guild.id}/Configs`).set({
        id: guild.id,
        prefix: "'",
        ownerId: guild.ownerID,
        memberJoinNotification: false,
        memberLeaveNotification: false,
        memberJoinAutorole: false
    });
})
	
client.on('guildDelete', guild => {
	var serverinfo = firebase.database().ref(`Servidores/${guild.id}`)
    serverinfo.remove()
})

//Gerenciador de Comandos:
//O Gerenciador de Comandos serve para interagir com os comandos que estão dentro das pastas!
//Todos os comandos estão na pasta Comandos, porém, um documento com mais detalhes sobre cada subpasta pode ser encontrado em:
//../Docs/Info - Pasta Comandos

//Exporta o Gerenciador de Comandos para que seja possível reiniciá-lo sem reiniciar o Bit!
module.exports.carregarComandos = carregarComandos()
//Executa o Gerenciador de Comandos quando o Bit é ligado
carregarComandos()

//Inicializa o Gerenciador de Comandos
function carregarComandos() {

//Client.Commands
//Client.Commands é uma variável que armazena os comandos que estão nos arquivos
client.commands = new Discord.Collection();

//Variáveis de cada categoria de comandos
//Já que existem muitas categorias de comandos em várias pastas, é preciso importá-las para este arquivo!
//Para isso, os comandos são armazenados em variáveis.
//O FS possui uma função que realiza o trabalho de importar os comandos de todas as SubPastas!
//Aqui estão todas as importações!

//Estrutura de cada variável:
//const commandAdm = fs.readdirSync('./comandos/Vanilla/Administração/').filter(file => file.endsWith('.js'));
//    Constante    | Função do FS  |         Caminho da Pasta          | Função Filtro | Apenas arquivos .js vão passar pelo filtro


//Pasta ADMINISTRATION:
administrationCommands = fs.readdirSync('./Commands/Vanilla/Administration/').filter(file => file.endsWith('.js')) //ok

//Pasta DISCORD:
discordCommands = fs.readdirSync('./Commands/Vanilla/Discord/').filter(file => file.endsWith('.js')) //ok

//Pasta ECONOMY:
economyCommands = fs.readdirSync('./Commands/Vanilla/Economy/').filter(file => file.endsWith('.js')) //ok

//Pasta FUN:
funCommands = fs.readdirSync('./Commands/Vanilla/Fun/').filter(file => file.endsWith('.js'))

//Pasta IMAGES:
//const imagesCommands = fs.readdirSync('./Commands/Vanilla/Images').filter(file => file.endsWith('.js'))

//Pasta MISC:
miscCommands = fs.readdirSync('./Commands/Vanilla/Misc').filter(file => file.endsWith('.js'))

//Pasta SOCIAL:
SocialCommands = fs.readdirSync('./Commands/Vanilla/Social').filter(file => file.endsWith('.js'))

//Pasta UTILS:
UtilCommands = fs.readdirSync('./Commands/Vanilla/Utils').filter(file => file.endsWith('.js'))

//Pasta TESTS: (Essa não é uma categoria, e sim uma Subpasta para comandos em teste!)
testCommands = fs.readdirSync('./Commands/Tests/').filter(file => file.endsWith('.js'));


//commands.set
//Essas funções do tipo For a seguir compõe a parte de importação de todos os comandos para as suas respectivas variáveis!
//Existe uma função para cada categoria (ou Subpasta)!
//Aqui estão todas as funções para cada variável declarada acima!

//Estrutura de cada função: (Explicações embaixo de cada linha)
// for   (const file of commandAdm) {
//Função | Importa a variável para a função
//	const command = require(`./Comandos/Vanilla/Administração/${file}`);
//Constante       | Requerimento de cada arquivo daquela SubCategoria
//	client.commands.set(command.name, command);
//  Seta as variáveis 'command.name' e 'command' com os comandos daquela SubCategoria
//}


//Pasta ADMINISTRATION
for (const file of administrationCommands) {
	const command = require(`./Commands/Vanilla/Administration/${file}`);
	client.commands.set(command.name, command);
}
//Pasta DISCORD:
for (const file of discordCommands) {
	const command = require(`./Commands/Vanilla/Discord/${file}`);
	client.commands.set(command.name, command);
}
//Pasta ECONOMY:
for (const file of economyCommands) {
	const command = require(`./Commands/Vanilla/Economy/${file}`);
	client.commands.set(command.name, command);
}
//Pasta FUN:
for (const file of funCommands) {
	const command = require(`./Commands/Vanilla/Fun/${file}`);
	client.commands.set(command.name, command);
}/*
//Pasta IMAGES:
for (const file of imagesCommands) {
	const command = require(`./Commands/Vanilla/Images/${file}`);
	client.commands.set(command.name, command);
}*/
//Pasta MISC:
for (const file of miscCommands) {
	const command = require(`./Commands/Vanilla/Misc/${file}`);
	client.commands.set(command.name, command);
}
//Pasta SOCIAL:
for (const file of SocialCommands) {
	const command = require(`./Commands/Vanilla/Social/${file}`);
	client.commands.set(command.name, command);
}

//Pasta UTILS:
for (const file of UtilCommands) {
	const command = require(`./Commands/Vanilla/Utils/${file}`);
	client.commands.set(command.name, command);
}

//Pasta TESTS: (Novamente, a pasta Testes não é uma categoria, apenas um SubPasta para os comandos em teste!)
for (const file of testCommands) {
	const command = require(`./Commands/Tests/${file}`);
	client.commands.set(command.name, command);
}


} //Fim do Gerenciador de Comandos! (Ufa! Finalmente!)



//Message
//Quando o bot receber uma mensagem, ela será processada na função abaixo!
//Essa é a função mais importante do Bot, sem ela, ele não vai responder nada!
client.on('message', message => {

	
	firebase.database().ref('GlobalBans').once('value').then(function(snapshot) {
	  var userId = (snapshot.val() && snapshot.val().id) || 'Anonymous';
	  
	  if(message.author.id === userId) return;
	
	

    //Identificador de DM's
	//Por conta de algumas limitações do Node.js e do Discord.js, é impossível utilizar o sistema de Custom Prefix dentro de DM's!
	//Por isso, quando alguém utiliza algum comando dentro de uma DM, a mensagem dizendo sobre as limitações é mandada!
	
    if(message.channel.type === 'dm') {
	  return 
	} else if(message.channel.type === 'text') { 

		firebase.database().ref(`Servidores/${message.guild.id}/Configs/prefix`).once('value').then(function(snapshot) {
			
			
			//criou um loop: message.channel.send(`${message.author} Este servidor ainda não estava registrado no meu Banco de Dados, porém, agora eu o adicionei! Mas você precisa executar o comando novamente com o meu prefixo padrão (ou mudar ele antes de executr novamente)! Prefixo padrão: '`)
			if(snapshot.val() === null) {
				if(!message.author.bot) {
					message.channel.send(`${message.author} Desculpa incomodar, mas eu estou aqui para avisar algo! Você me fez detectar que este servidor ainda não estava registrado no meu Banco de Dados, porém, agora eu o adicionei! Mas, caso você tenha executado um comando, você precisa o executar novamente com o meu prefixo padrão (que é ') (ou mudar ele antes de executar novamente)! Caso você não tenha mandado um comando, apenas desculpe o incômodo!`).then(msg => msg.delete(10000))
					
					//message.channel.send(`${message.author} Este servidor ainda não estava registrado no meu Banco de Dados, porém, agora eu o adicionei! Mas você precisa executar o comando novamente com o meu prefixo padrão (ou mudar ele antes de executr novamente)! Prefixo padrão: '`)
				}
				firebase.database().ref(`Servidores/${message.guild.id}/Configs`).set({
					id: message.guild.id,
					prefix: "'",
					ownerId: message.guild.ownerID,
					memberJoinNotification: false,
					memberLeaveNotification: false,
					memberJoinAutorole: false
				});
			
			} else {
				firebase.database().ref(`Servidores/${message.guild.id}/Configs/prefix`).once('value').then(function(snapshot) {
					var prefix = (snapshot.val())
				//Essa função verifica se a mensagem começa com o prefixo do servidor!
	//Caso ela não comece com o prefixo, ele ignora!
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	//Separa os argumentos do comando e salva eles em uma variável, por exemplo:
	//'Comando Argumento1 Argumento2 Argumento3...
		const args = message.content.slice(prefix.length).split(/ +/);

	//Salva o Nome do Comando, que é a parte incial do comando em uma variável
	//A função 'toLowerCase' coloca o comando em minúsculo
		const commandName = args.shift().toLowerCase();

	//Salva o comando em uma variável
	//Ele também busca os aliases (ou Alternativos) do comando para usar no lugar do próprio comando
		const command = client.commands.get(commandName)
			|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	//Se for Diferente da variável do comando, ele retorna!
		if (!command) return;

	//GuildOnly
	//O GuildOnly permite fazer com que os comandos possam (ou Não!) ser executados em DM's
		if (command.guildOnly && message.channel.type !== 'text') {
	//Caso a pessoa tenha mandado a mensagem na DM e ele não possa executar, ele envia essa mensagem!
			return message.reply('Eu não posso executar este comando dentro de DMs!');
		}

	//Processamento dos Argumentos
	//Esse If verifica se há os argumentos essenciais no comando do usuário fornecido!
		if (command.args && !args.length) {
			//Caso não haja, ele envia a seguinte mensagem:
			//Alterar futuramente para enviar o help do comando quando a pessoa não fornece os argumentos
			let reply = `${message.author} Você não forneceu os argumentos necessários!`;

    //Uso errado do comando
	//Caso seja necessário, esse If fornece as informações da maneira correta de usar o comando solicitado!
			if (command.usage) {
				reply += `\nVocê deve usar o comando da seguinte forma: \`${prefix}${command.name} ${command.usage}\``;
			}
    //Finalmente, ele envia a mensagem para o canal!
			return message.channel.send(reply);
		}


	//Sistema de Cooldown

	//Esse If verifica se o comando tem Cooldown definido!
	//Se sim, ele cria uma coleção de Cooldown para o nome do comando!
		if (!cooldowns.has(command.name)) {
			//Se tiver Cooldown definido, ele executa o seguinte:
			cooldowns.set(command.name, new Discord.Collection());
		}

	if(message.author.id !== '383661058029649920') {
	//Sistema do Cooldown
	//Sistema de Tempo do Cooldown
	//Ele define a data do momento em que o comando é executado
	//Também define o comando que tem o Cooldown
	//E por último o tempo do Cooldown
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

	//Execução do Cooldown
	//Se o comando tiver Cooldown definido, ele vai verificar o tempo que o comando foi executado pela última vez e verificar se o usuário pode usar o comando de novo!
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		//Se o tempo ainda não acabou, ele executa o seguinte:
			if (now < expirationTime) {
				//Ele salva o tempo restante na variável 'tempoRestante'
				const tempoRestante = (expirationTime - now) / 1000;
				//E depois manda a mensagem para o usuário no canal do comando
				//Ele usa as variáveis TempoRestante para indicar o tempo que falta para o usuário poder executar o comando novamente
				//E a variável commandName para indicar o comando que deve ser executado
				return message.reply(`${message.author} Por favor espere ${tempoRestante.toFixed(1)} para usar o comando **${command.name}**!.`);
			}
		}

	//Assim que ele manda a mensagem, ele aguarda um momento e depois a apaga!
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	}
	//Execução do Comando
	//Nessa função, ele executa o comando depois de todos esses processamentos e tratamentos
	//A função Try tenta executar o comando, porém, se ela não conseguir, ela envia um erro para o Console e para o Canal do Comando!
		try {
			//Tenta executar o comando com os seguintes parâmetros:
			//Message - A mensagem em sí, é o parâmetro mais importante
			//Args - Os argumentos do Comando
			//Database - O parâmetro do Database do Bot, permite usar as funções do Firebase nos arquivos individuais de cada comando
			command.execute(message, args, db, client);

		//Caso ele não consiga executar o comando, ou seja, caso haja um erro, ele executa o seguinte:
		//Console.log - Para informar no Console
		//Message.Channel.Send - Para mandar no canal do comando!
		} catch (error) {
			//Caso haja um erro, ele executa:
			//O console.log - para informar no Console!
			//O console.error - para gerar um erro no Console!
			console.error(error); //Gera um erro no Console
			console.log('[ERRO] Houve um erro na execução de um comando!')
			//O message.channel.send - para informar o usuário no canal do comando!
			message.reply(`Houve um erro na execução do comando! Contate o suporte para mais informações! Tipo do Erro:\n ${error}`);
	   }//catch (error)
	
		

	
	
	
	
			
						
				}) //funcao pesquisar
				} //else se nao tive q setar
				}) //funcao setar novo server
			} //if dm
}); //global bans
}) //client on
//Função SetarPresença
//Essa função permite facilitar o trabalho de atualizar a presenca do bot!
//Futuramente, será adicionado um sitema para mudar a presença via comando do Discord!

//Login
//Para tudo isso funcionar, o Bot precisa fazer login no discord com a token dele
//Para isso, ele usa o método client.login e usa a token importada do arquivo Config.json!
//Depois, ele ainda mostra que o bot foi logado com sucesso!

client.login(config.token).then(
	
	console.log('[INFO] Bot logado com sucesso!')
)

