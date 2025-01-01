var db = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/PlayerData')
var sidebardb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/Sidebar')
var serverdb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/ServerData')
var seasiondb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/SeasionData')

var title = ['§l§cD§dTSV人生商店伺服器','§l§cDT§dSV人生商店伺服器','§l§cDTS§dV人生商店伺服器','§l§cDTSV§d人生商店伺服器','§l§cDTSV人§d生商店伺服器','§l§cDTSV人生§d商店伺服器','§l§cDTSV人生商§d店伺服器','§l§cDTSV人生商店§d伺服器','§l§cDTSV人生商店伺§d服器','§l§cDTSV人生商店伺服§d器','§l§cDTSV人生商店伺服器'
    ,'§l§6DTSV人生商店伺服器'
]
var tps = ll.imports('TPS', 'TPS')

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
            {id: 0, line0: '玩家:$Name', line1:'等級:$Level', line2: '牌級:$Rank', line3: '礦工等級:$Miner_Level', line4: '金錢/銀行:$Money/$Bank', line5: '重生次數:$Rebirth', line6:'延遲:$Ping' ,line11: '伺服器版本:$Server_Version', line12: '遊戲版本$Minecraft_Version',line13: 'dtsvserver.ddns.net'}
        ]

        var str0 = `§l§e| §b${sidebar.line0}`
        var str1 = `§l§e| §b${sidebar.line1}`
        var str2 = `§l§e| §b${sidebar.line2}`
        var str3 = `§l§e| §b${sidebar.line3}`
        var str4 = `§l§e| §b${sidebar.line4}`
        var str5 = `§l§e| §b${sidebar.line5}`
        var str6 = `§l§e| §b${sidebar.line6}`
        var str7 = `§l§e| §b${sidebar.line7}`
        var str8 = `§l§e| §b${sidebar.line8}`
        var str9 = `§l§e| §b${sidebar.line9}`
        var str10 = `§l§e| §b${sidebar.line10}`
        var str11 = `§l§e| §b${sidebar.line11}`
        var str12 = `§l§e| §b${sidebar.line12}`
        var str13 = `§l§6${sidebar.line13}`

        //true
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
        if (sidebar.get(pl.xuid.line6) == true) {
            arr.push(str6)
        }
        if (sidebar.get(pl.xuid.line7) == true) {
            arr.push(str7)
        }
        if (sidebar.get(pl.xuid.line8) == true) {
            arr.push(str8)
        }
        if (sidebar.get(pl.xuid.line9) == true) {
            arr.push(str9)
        }
        if (sidebar.get(pl.xuid.line10) == true) {
            arr.push(str10)
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

        //false
        if (sidebar.get(pl.xuid.line0) == false && arr.includes(str0)) {
            arr.splice(str0)
        }
        if (sidebar.get(pl.xuid.line1) == false && arr.includes(str1)) {
            arr.push(str1)
        }
        if (sidebar.get(pl.xuid.line2) == false && arr.includes(str2)) {
            arr.push(str2)
        }
        if (sidebar.get(pl.xuid.line3) == false && arr.includes(str3)) {
            arr.push(str3)
        }
        if (sidebar.get(pl.xuid.line4) == false && arr.includes(str4)) {
            arr.push(str4)
        }
        if (sidebar.get(pl.xuid.line5) == false && arr.includes(str5)) {
            arr.push(str5)
        }
        if (sidebar.get(pl.xuid.line6) == false && arr.includes(str6)) {
            arr.push(str6)
        }
        if (sidebar.get(pl.xuid.line7) == false && arr.includes(str7)) {
            arr.push(str7)
        }
        if (sidebar.get(pl.xuid.line8) == false && arr.includes(str8)) {
            arr.push(str8)
        }
        if (sidebar.get(pl.xuid.line9) == false && arr.includes(str9)) {
            arr.push(str9)
        }
        if (sidebar.get(pl.xuid.line10) == false && arr.includes(str10)) {
            arr.push(str10)
        }
        if (sidebar.get(pl.xuid.line11) == false && arr.includes(str11)) {
            arr.push(str11)
        }
        if (sidebar.get(pl.xuid.line12) == false && arr.includes(str12)) {
            arr.push(str12)
        }
        if (sidebar.get(pl.xuid.line13) == false && arr.includes(str13)) {
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
        arr.replace('$Ping', pl.getDevice().avgPing)
        arr.replace('$TPS', tps)

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