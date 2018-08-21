const config = require('./config.json');
const moteIds = [8001, 8002]
module.exports = function nmm(d) {
let enabled = config.toggle;

d.command.add("nmm", {
$default() {
enabled = !enabled
d.command.message(`No-More-motes is now ${enabled ? 'enabled' : 'disabled'}.`)}})
d.hook('S_SPAWN_DROPITEM', 6, (event) => {   		
if(!enabled) return;
if (moteIds.includes(event.item)){return false;}

})
}