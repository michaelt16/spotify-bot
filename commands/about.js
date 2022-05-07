module.exports ={
    name:'about',
    description: "this is a about command!",
    execute(message,args){
        const { MessageEmbed } = require('discord.js');
        const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Spotify Reminder Bot')
	.setURL('https://www.youtube.com/channel/UCumhLucKmlrWFQBPLiUz7uA')
	.setAuthor({ name: 'mahkel'})
	.setThumbnail('https://cdn.dribbble.com/users/113499/screenshots/6971887/penguin.png?compress=1&resize=400x300&vertical=top')
    .setDescription("List of Commands")
	.addFields(
		{ name: '!ping', value: 'When ping is typed it will return pong', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.setImage('https://cdn.dribbble.com/users/113499/screenshots/6971887/penguin.png?compress=1&resize=400x300&vertical=top')
	.setTimestamp()
	.setFooter({ text: 'Gimme ur money bitch', iconURL: 'https://cdn.dribbble.com/users/113499/screenshots/6971887/penguin.png?compress=1&resize=400x300&vertical=top' });

message.channel.send({ embeds: [exampleEmbed] });

    }
}