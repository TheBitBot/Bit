const Discord = require('discord.js');
/*
//Firebase
//O Firebase é o Banco de Dados que o Bit usa!
//Ele armazena todas as configurações personalizadas de cada servidor entre outras coisas!

//A variável Firebase interage com o código!
var firebase = require('firebase/app');
//O requerimento que interage com o Firebase em sí!
require('firebase/database');

//Firebase Config
//Essa variável armazena todas as informações essenciais para o funcionamento do Firebase!
//As informações foram removidas para garantir a segurança do Banco de Dados!
var firebaseConfig = {
    apiKey: "AIzaSyB9choTv8E4AIBl2IENI0dt9iI8D0w93GY", //Key da API do Firebase
    authDomain: "bit-db.firebaseapp.com", //Domínio de autenticação do Firebase
	databaseURL: "https://bit-db.firebaseio.com", //URL do Database
    projectId: "bit-db", //ID do projeto do Firebase
    storageBucket: "",
    messagingSenderId: "99942984384", //ID de interação com o Banco de Dados
    appId: "1:99942984384:web:fbfe3d08a86c50ae8f5b25" //ID do aplicativo do projeto do Firebase
  };

//Firebase Inicialization
//Essa função inicializa o Firebase baseado nas configurações acima!
firebase.initializeApp(firebaseConfig);

//Variável Database
//Armazena as informações do Database para interagir com ele no código!
const database = firebase.database();
*/
module.exports = {
	name: 'bitban',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args, database) {
    
        message.channel.send(`${message.author} Isso ainda está em beta!`)
		
	},
};




