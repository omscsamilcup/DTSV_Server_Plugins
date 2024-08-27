//Bossbar
var CurrentTPS = ll.import("ShowTPS", "TPSShow")
mc.listen("onServerStarted",() => {
    var i = 0
    setInterval(() => {
        var pls = mc.getOnlinePlayers()
        for (pl in pls) {
            var pl = pls[pl]
                var bossbar = ['§l§c歡迎§6你加§e入本§a伺服§2器，§b請你§d記得§c加入§6本服§eDiscord','§l§c你§6的§e游§a玩§2時§b間§d' + pl.getScore('playDays') + '天' + pl.getScore('playHours') + '小時' + pl.getScore('playMin') + '分' + pl.getScore('playSec') + '秒','§l§c伺服器§6TPS§e' + CurrentTPS() + ' §a你的§2延遲§b' + pl.getDevice().avgPing + '§dms','§l§c伺§6服§e器§a在§2綫§b玩§d家§c數§6量§e:§a' + mc.getOnlinePlayers().length]
                if (i > 3) {
                    i = 0
                }
            if (pl.getScore('bossbar') == 0) {
                pl.setBossBar(1,bossbar[i], 100,8)
                i += 1
            }
        }
    },2000)
    
    var cmd = mc.newCommand('bossbar','開關Bossbar')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        if (pl.getScore('bossbar') == 1) {
            pl.setScore('bossbar', 0)
            pl.tell("§l§a你已成功開啟Bossbar")
        } else if (pl.getScore('bossbar') == 0) {
            pl.setScore('bossbar',1)
            pl.tell('§l§c你已成功關閉Bossbar')
        }
    })
    cmd.setup()
})

log('Bossbar插件已加載')