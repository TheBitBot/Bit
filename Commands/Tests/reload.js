const Discord = require('discord.js');
const app = require('../../app.js')

module.exports = {
	name: 'reload',
	guildOnly: true,
	description: ' ',
	aliases: [' ', ' '],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
        if(message.author.id === '383661058029649920') {
            if(!args[0] || !args[1]) return message.channel.send(`${message.author} Informe um comando para reinciar!`)

            const commandName = args[1].toLowerCase()
            const commandType = args[0].toLowerCase()

            if(commandType === 'administration' || commandType === 'admin') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Administration/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Administration/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'discord') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Discord/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Discord/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'economy') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Economy/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Economy/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'fun') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Fun/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Fun/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'images') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Images/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Images/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'misc') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Misc/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Misc/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'social') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Social/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Social/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'utils') {
                try {
                    delete require.cache[require.resolve(`../Vanilla/Utils/${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`../Vanilla/Utils/${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            } else if(commandType === 'tests') {
                try {
                    delete require.cache[require.resolve(`./${commandName}.js`)]
                    message.client.commands.delete(commandName)
                    const pull = require(`./${commandName}.js`)
                    message.client.commands.set(commandName, pull)
                } catch(error) {
                    return message.channel.send(`${message.author} Não foi possível reiniciar o comando ${args[1].toUpperCase()}!\n${error}`)
                }
    
                message.channel.send(`${message.author} O comando \`${args[1].toUpperCase()}\` foi reinicado com sucesso!`)
            }
            

            
        } else if(message.author.id !== '383661058029649920') {
            return message.channel.send(`${message.author} Apenas o Peter_0101 pode usar este comando!`)
        }
       
		
	},
};




