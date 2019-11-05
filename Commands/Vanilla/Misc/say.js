/* Informações
   Nome: Comando - Say
   Autor: Peter_0101#4567
   Última data de modificação: 04/10/2019
   Linguagem: JavaScript
*/

//message exec
module.exports = {
	name: 'say',
	guildOnly: true,
	description: 'Calcula e mostra o ping do cliente!',
	aliases: ['fale', 'envie'],
	usage: ' ',
	cooldown: 5,
	execute(message, args) {
	// makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
	const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
	message.channel.send(`${message.author} A mensagem foi eviada com sucesso!`).then(msg => msg.delete(2000));
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
},
}
