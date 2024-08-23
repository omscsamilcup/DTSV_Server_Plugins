mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('daily','簽到',PermType.Any)
    cmd.setAlias('dm')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res)=>{
        var pl = ori.player
        if (pl.getScore('daily') == 0) {
            pl.addScore('daily',1)
            pl.addScore('money', 500)
            pl.tell('§l§a你已成功簽到，獲得500元')
        } else if (pl.getScore('daily') == 1) {
            pl.tell('§l§c你今天已簽到了，請等到明天！')
        }
    })
    cmd.setup()
    
    setInterval(() => {
        var tm = system.getTimeObj()
        if (tm.m == 0 && tm.s == 0 && tm.h == 0) {
            mc.removeScoreObjective('daily')
            mc.newScoreObjective('daily','簽到')
            mc.broadcast('§l§b簽到已刷新')
            log('簽到已刷新')
        }
    },1000)
})
mc.listen("onJoin",(pl) => {
    if (pl.getScore('daily') == 0) {
        pl.tell('§l§d你今天還沒簽到，輸入/daily或/dm來簽到吧！')
    }
})

log('Daily Sign插件已加載')
log('Written By:Samilcup')