module.exports = {
	name: 'commanad name',
	description: 'description of your command',
	aliases: ['aleas1', 'alias2'],
	usage: '[argument1] [argument2]',
	guildOnly: false, //true if only used in server
	args: false, //true if the command cant run without arguments
	permissions: {
		bot: [], //permissions that the bot requires for the command
		user: [], //permissions that the user requires for the command
	},
	execute: async (message, args, client) => {
		//code for the command goes here
	},
};
