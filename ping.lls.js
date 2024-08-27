// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

mc.regPlayerCmd('ping','獲得你的延遲值', (pl) => {
    var ping = pl.getDevice().avgPing
    if (ping < 110) {
        ping = '§l§a'+ping
    }else if (ping < 250) {
        ping = '§l§e'+ping
    } else {
        ping = '§l§c'+ping
    }
    pl.tell('§l§6你的延遲值:'+ ping)
})