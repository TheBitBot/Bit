/* Informações
   Nome: Comando - Play (Música)
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

const Discord = require('discord.js');


module.exports = {
	name: 'play',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
    
        if (message.member.voice.channel) {
            const connection = message.author.voice.channel.join()
            connection.play(ytdl(
              'https://www.youtube.com/watch?v=ZlAU_w7-Xp8',
              { filter: 'audioonly' }));
            
            // Files on the internet
            connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3');
            
            // Local files
            connection.play('/home/discord/audio.mp3');
          } else {
            message.reply('You need to join a voice channel first!');
          }
          const ytdl = require('ytdl-core');

	},
};
