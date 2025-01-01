var db = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/PlayerData')
var sidebardb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/Sidebar')
var serverdb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/ServerData')
var title = ['§l§cD§dTSV人生商店伺服器','§l§cDT§dSV人生商店伺服器','§l§cDTS§dV人生商店伺服器','§l§cDTSV§d人生商店伺服器','§l§cDTSV人§d生商店伺服器','§l§cDTSV人生§d商店伺服器','§l§cDTSV人生商§d店伺服器','§l§cDTSV人生商店§d伺服器','§l§cDTSV人生商店伺§d服器','§l§cDTSV人生商店伺服§d器','§l§cDTSV人生商店伺服器'
    ,'§l§6DTSV人生商店伺服器'
]

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var langid = db.get(pl.xuid.Lang)
        if (langid = 'TChi') {
            langid = 0
        } else if (langid = 'SChi') {
            langid = 1
        } else if (langid = 'Eng') {
            langid = 2
        } else if (langid = 'Jap') {
            langid = 3
        }
        var pl = pls[pl]
        var sidebar = lang.find((langs) => langs.id === langid)
        var lang = [
            {id: 0, line0: '§l§e玩家:$Name', line1:'§l§e等級:$Level', line2: '§l§e牌級:$Rank', line3: '§l§e礦工等級:$Miner_Level', line4: '§l§e金錢/銀行:$Money/$Bank', line5: '§l§e重生次數:$Rebirth', line11: '伺服器版本:$Server_Version', line12: '遊戲版本$Minecraft_Version',line13: '§l§bdtsvserver.ddns.net'}
        ]

        var str0 = `§l§e${sidebar.line0}`
        var str1 = `§l§e${sidebar.line1}`
        var str2 = `§l§e${sidebar.line2}`
        var str3 = `§l§e${sidebar.line3}`
        var str4 = `§l§e${sidebar.line4}`
        var str5 = `§l§e${sidebar.line5}`
        var str11 = `§l§e${sidebar.line11}`
        var str12 = `§l§e${sidebar.line12}`
        var str13 = `§l§e${sidebar.line13}`

        if (sidebar.get(pl.xuid.line0) == true) {
            arr.push(str0)
        }
        if (sidebar.get(pl.xuid.line1) == true) {
            arr.push(str1)
        }
        if (sidebar.get(pl.xuid.line2) == true) {
            arr.push(str2)
        }
        if (sidebar.get(pl.xuid.line3) == true) {
            arr.push(str3)
        }
        if (sidebar.get(pl.xuid.line4) == true) {
            arr.push(str4)
        }
        if (sidebar.get(pl.xuid.line5) == true) {
            arr.push(str5)
        }
        if (sidebar.get(pl.xuid.line11) == true) {
            arr.push(str11)
        }
        if (sidebar.get(pl.xuid.line12) == true) {
            arr.push(str12)
        }
        if (sidebar.get(pl.xuid.line13) == true) {
            arr.push(str13)
        }
        
        var arr = [sidebardb.get(pl.xuid)]
        arr.replace('$Name',pl.realName)
        arr.replace('$Money',db.get(pl.xuid.Money))
        arr.replace('$Bank',db.get(pl.xuid.Bank))
        arr.replace('$Miner_Level',db.get(pl.xuid.Miner_Level))
        arr.replace('$Rank',db.get(pl.xuid.Rank))
        arr.replace('$Level',db.get(pl.xuid.Level))
        arr.replace('$Rebirth',db.get(pl.xuid.Rebirth))
        arr.replace('$Online', mc.getOnlinePlayers().length)
        arr.replace('$Server_Version', serverdb.get(Server.Version))
        arr.replace('$Minecraft_Version', mc.getBDSVersion())

        /*Server: {
            Version: 0.0.1
        }*/

        var bar = '{"'
        for (var i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        if (sidebar.get(pl.xuid.sidebar) == true) {
            for (var a in title) {
                pl.removeSidebar()
                pl.setSidebar(title[a], JSON.parse(bar),0)
            }
        } else {
            pl.removeSidebar()
        }
    }
}, 500);

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