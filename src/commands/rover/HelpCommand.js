const Command = require('../Command')

module.exports =
class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'roverhelp',
      properName: 'RoVer',
      aliases: ['rover'],
      description: 'Displays a description of RoVer'
    })
  }

  async fn (msg) {
    const output = `PhantonVerify a simple Roblox Verify Bot.`

    msg.reply(output)
  }
}
