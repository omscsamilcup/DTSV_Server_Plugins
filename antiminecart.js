

//LiteLoaderScript Dev Helper
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "Anti Minecart Crasher",
    /* introduction */ "Anti Minecart Crasher",
    /* version */ [0,0,2],
    /* otherInformation */ {}
); 



mc.listen('onCmdBlockExecute',(isMinecart,pos) => {
    if (isMinecart == true) {
        log('有玩家使用命令方塊礦車惡意崩服，礦車坐標為' + pos)
            var op = mc.getOnlinePlayers();
            for (let index = 0; index < op.length; index++) {
                if (op[index].isOP()) {
                    op[index].tell(`§l§d[§bAntiMinecartCrasher§d]§e有玩家使用命令方塊礦車惡意崩服，礦車坐標為'${pos}`, 0); 
            }
        }
        return false
    }
})

log('Anti Minecart Crasher插件已加載')