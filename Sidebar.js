var title = ['§l§cD§dTSV人生商店伺服器','§l§cDT§dSV人生商店伺服器','§l§cDTS§dV人生商店伺服器','§l§cDTSV§d人生商店伺服器','§l§cDTSV人§d生商店伺服器','§l§cDTSV人生§d商店伺服器','§l§cDTSV人生商§d店伺服器','§l§cDTSV人生商店§d伺服器','§l§cDTSV人生商店伺§d服器','§l§cDTSV人生商店伺服§d器','§l§cDTSV人生商店伺服器'
    ,'§l§6DTSV人生商店伺服器'
]

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]

        var str0 = '§l§e| §r§b玩家名稱$name'.replace('$name',pl.realName)
        //var str1 = '§l§e| §r§b你有$money空島SC幣'.replace('$money',pl.getScore('money')) //Coins NEED CHANGE
        //var str2 = '§l§e| §r§b你有$point點數 $ownercoins服主幣'.replace('$point',pl.getScore('point')).replace('$ownercoins',pl.getScore('ownercoins')) //Coins NEED CHANGE
        //var str3 = '§l§e| §r§b你的空島等級$level'.replace('$level',pl.getScore('level'))
        //var str4 = '§l§e| §r§b伺服器TPS:$tps'.replace('$tps',CurrentTPS())
        var str5 = '§l§e| §r§b你的延遲$pingms'.replace('$ping',pl.getDevice().avgPing)
        //var str6 = '§l§e| §r§b游玩時間$playD天$playH小時'.replace('$playD',pl.getScore('playDays')).replace('$playH',pl.getScore('playHours'))
        //var str7 = '§l§e| §r§b           $playm分鐘$plays秒'.replace('$playm',pl.getScore('playMin')).replace('$plays',pl.getScore('playSec'))
        var str8 = '§l§e| §r§b你的設備:$os'.replace('$os', pl.getDevice().os)
        var str9 = '§l§e| §r§b在綫人數:$online/100'.replace('$online', mc.getOnlinePlayers().length)
        //var str10 = '§l§e| §r§b你的Rank:$rank'.replace('$rank', rank) //Rank NEED CHANGE
        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9,str10]

        var bar = '{"'
        for (var i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        if (pl.getScore('score') == 0) {
            pl.removeSidebar()
            pl.setSidebar('§l§cD§6T§eS§aV§2人§b生§d商§c店§6伺§e服§a器', JSON.parse(bar),0)
        } else if (pl.getScore('score') == 1) {
            pl.removeSidebar()
        }
    }
}, 1000);

mc.listen("onServerStarted",() => {
    mc.regPlayerCmd('sidebar','開關計分板顯示',(pl) => {
        if (pl.getScore('score') == 1) {
            pl.setScore('score', 0)
            pl.tell("§l§a你已成功開啟計分板")
        } else if (pl.getScore('score') == 0) {
            pl.setScore('score',1)
            pl.tell('§l§c你已成功關閉計分板')
        }
    })
})