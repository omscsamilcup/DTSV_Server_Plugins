mc.listen("onServerStarted", () => {
    mc.listen('onJoin', function(player) {
        var ip = {}
        let dv = player.getDevice()
        var op = mc.getOnlinePlayers();
        for (let index = 0; index < op.length; index++) {
            if (op[index].isOP()) {
                op[index].tell(`§l§e玩家${player.name}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`, 0); 
            }
        }
        colorLog("yellow", `玩家${player.name}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`)
    })
})

log('Data Show插件已加載')
log('Written By:Samilcup')