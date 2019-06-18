const moteIds = [8001, 8002]
const mysticIds = [8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023]
module.exports = function nmm(d) {
d.command.add('nmm', (v) => {
if(!v){
d.settings.enabled = !d.settings.enabled
d.command.message(` ${d.settings.enabled ? 'enabled' : 'disabled'}`)}
if(v == 'mystic'){
d.settings.mysticMode = !d.settings.mysticMode
d.command.message(`Mystic Mode ${d.settings.mysticMode ? 'enabled' : 'disabled'}`)}
})
d.hook('S_SPAWN_DROPITEM', 7, (e) => {   		
if(d.settings.enabled && moteIds.includes(e.item)){return false}
if(d.settings.enabled && d.settings.mysticMode && mysticIds.includes(e.item)){return false}
else return
})
}