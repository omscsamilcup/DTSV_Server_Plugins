// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "",
    /* introduction */ "",
    /* version */ [0,0,1],
    /* otherInformation */ null
); 


//LiteLoaderScript Dev Helper
/// <reference path="d:\/Library/JS/Api.js" /> 

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
    var pl = pls[pl]
        mc.regPlayerCmd('stop', '關閉伺服器，請不要隨便使用', (player,args) => {
            var stop_msg = `§cServer Closed\n§7By:${player.realName}\n§fWithout Reason`
            if (!args[0] == '') {
                stop_msg = `§cServer Closed\n§7By:§f${player.realName}\n§7Reason: §f${args[0]}`
            }
            if (player.isOP() == false) {
                player.tell('你不是OP，無法使用')
            } else {
                pl.kick(stop_msg)
                mc.runcmd('stop')
            }
        })
        mc.regConsoleCmd('stop', '關閉伺服器，請不要隨便使用', (args) => {
            var stop_msg = `§cServer Closed\n§7By:Console\n§fWithout Reason`
            if (!args[0] == '') {
                stop_msg = `§cServer Closed\n§7By:§fConsole\n§7Reason: §f${args[0]}`
            }
            pl.kick(stop_msg)
        })
    }
},1000)

log('stop插件已加載')