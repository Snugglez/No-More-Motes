const config = require('./config.json');
const Command = require('Command')
const moteIds = [8001, 8002]
module.exports = function nmm(dispatch) {
const command = Command(dispatch)
let enabled = config.toggle;

command.add('nmm', () => {
enabled = !enabled
command.message(`No-More-motes is now ${enabled ? 'enabled' : 'disabled'}.`)})

dispatch.hook('S_SPAWN_DROPITEM', 1, (event) => {   		
if(!enabled) return;
if (moteIds.includes(event.item)){return false;}

})
}