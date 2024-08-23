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


mc.listen('onServerStarted', () => {
    mc.regPlayerCmd('stop', '關閉伺服器，請不要隨便使用', (player) => {
        if (player.isOP() == false)
            player.tell('你不是OP，無法使用')
        else {
            mc.broadcast('§l§c管理員' + player.realName + '關閉了伺服器,伺服器將於10秒後關閉')
            setTimeout(() => {
                mc.broadcast('§l§c伺服器將於10秒後關閉')
            })
            setTimeout(() => {
                mc.runcmd("stop");
            }, 1000);
        }
    })
})