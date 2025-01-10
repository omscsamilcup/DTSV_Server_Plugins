// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

var db = new KVDatabase('./plugins/DTSV_Database/PlayerData')
var sidebardb = new KVDatabase('./plugins/DTSV_Database/Sidebar')
var serverdb = new KVDatabase('./plugins/DTSV_Database/ServerData')
var sessiondb = new KVDatabase('./plugins/DTSV_Database/SessionData')
var time_zh_TW = ll.imports(time_zh_TW(),'time_zh_TW')
var time_zh_CN = ll.imports(time_zh_CN(),'time_zh_CN')
var time_Eng = ll.imports(time_Eng(), 'time_Eng')
var time_Jap = ll.imports(time_Jap(),'time_Jap')
var Time = system.getTimeObj()
var tps = ll.imports('TPS', 'TPS')

var title = ['§l§cD§dTSV人生商店伺服器','§l§cDT§dSV人生商店伺服器','§l§cDTS§dV人生商店伺服器','§l§cDTSV§d人生商店伺服器','§l§cDTSV人§d生商店伺服器','§l§cDTSV人生§d商店伺服器','§l§cDTSV人生商§d店伺服器','§l§cDTSV人生商店§d伺服器','§l§cDTSV人生商店伺§d服器','§l§cDTSV人生商店伺服§d器','§l§cDTSV人生商店伺服器'
    ,'§l§6DTSV人生商店伺服器'
]

function Simpleform(langid) {
    var fm = mc.newSimpleForm()
    fm.setTitle(Simpleform_lang_find.title)
    fm.addButton(Simpleform_lang_find.button0)
    fm.addButton(Simpleform_lang_find.button1)
    fm.addButton(Simpleform_lang_find.button2)
    fm.addButton(Simpleform_lang_find.button3)
    fm.addButton(Simpleform_lang_find.button4)
    fm.addButton(Simpleform_lang_find.button5)
    fm.addButton(Simpleform_lang_find.button6)
    fm.addButton(Simpleform_lang_find.button7)
    fm.addButton(Simpleform_lang_find.button8)
    fm.addButton(Simpleform_lang_find.button9)
    fm.addButton(Simpleform_lang_find.button10)
    fm.addButton(Simpleform_lang_find.button11)
    fm.addButton(Simpleform_lang_find.button12)
    fm.addButton(Simpleform_lang_find.button13)
    fm.addButton(Simpleform_lang_find.button14)
    fm.addButton(Simpleform_lang_find.button15)
    pl.sendForm(fm, (pl,id) => {
        customersform(pl, id, langid)
    })

    var Simpleform_lang_find = Simpleform_lang.find((langs) => langs.id === langid)
    var Simpleform_lang = [
        {id: 0, title:'§l§c側邊欄/計分板自選設定', button0: '§l§b玩家名稱', button1: '§l§b等級', button2: '§l§b金錢/銀行', button3: '§l§b重生次數', button4: '§l§b礦工等級', button5: '§l§b牌級', button6: '§l§b延遲',button7: '§l§bTPS/伺服器穩定性', button8: '§l§b遊玩時間', button9: '§l§b遊玩日期(UTC+8)', button10: '§l§b在線人數', button11: '§l§b賽季完結日期', button12: '§l§b使用設備', button13: '§l§b伺服器版本', button14: '§l§b遊玩版本', button15: '§l§b伺服器IP'},
        {id: 1},
        {id: 2},
        {id: 3}
    ]
}
var sidebar = {
    sidebar: db.get(pl.xuid.sidebar),
    line0: db.get(pl.xuid.line0),
    line1: db.get(pl.xuid.line1),
    line2: db.get(pl.xuid.line2),
    line3: db.get(pl.xuid.line3),
    line4: db.get(pl.xuid.line4),
    line5: db.get(pl.xuid.line5),
    line6: db.get(pl.xuid.line6),
    line7: db.get(pl.xuid.line7),
    line8: db.get(pl.xuid.line8),
    line9: db.get(pl.xuid.line9),
    line10: db.get(pl.xuid.line10),
    line11: db.get(pl.xuid.line11),
    line12: db.get(pl.xuid.line12),
    line13: db.get(pl.xuid.line13),
    line14: db.get(pl.xuid.line14),
    line15: db.get(pl.xuid.line15)
}

function customersform(pl, id, langid) {    
    var form_lang_find = form_lang.find((langs) => langs.id === langid)
    var Customersform_content_find = Customersform_content.find((content) => content.id === id)
    var form = mc.newCustomForm()
    form.setTitle(Customersform_content_find.title)
    form.addSwitch(form_lang_find.switch, sidebardb.get(Customersform_content_find.get))
    pl.sendForm(form, (pl,data) => {
        if (id == 0) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: data[0],
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 1) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: data[0],
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 2) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: data[0],
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        }else if (id == 3) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line3),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: data[0],
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 4) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: data[0],
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 5) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: data[0],
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 6) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: data[0],
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 7) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: data[0],
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 8) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: data[0],
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 9) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: data[0],
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 10) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: data[0],
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 11) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: data[0],
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 12) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: data[0],
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 13) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: data[0],
                line14: db.get(pl.xuid.line14),
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 14) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: data[0],
                line15: db.get(pl.xuid.line15)
            })
        } else if (id == 15) {
            sidebardb.set(pl.xuid, {
                sidebar: db.get(pl.xuid.sidebar),
                line0: db.get(pl.xuid.line0),
                line1: db.get(pl.xuid.line1),
                line2: db.get(pl.xuid.line2),
                line3: db.get(pl.xuid.line3),
                line4: db.get(pl.xuid.line4),
                line5: db.get(pl.xuid.line5),
                line6: db.get(pl.xuid.line6),
                line7: db.get(pl.xuid.line7),
                line8: db.get(pl.xuid.line8),
                line9: db.get(pl.xuid.line9),
                line10: db.get(pl.xuid.line10),
                line11: db.get(pl.xuid.line11),
                line12: db.get(pl.xuid.line12),
                line13: db.get(pl.xuid.line13),
                line14: db.get(pl.xuid.line14),
                line15: data[0]
            })
        }
    })

    var form_lang = [
        {id: 0, title:'§l§c側邊欄/計分板自選設定', button0: '§l§b玩家名稱', button1: '§l§b等級', button2: '§l§b金錢/銀行', button3: '§l§b重生次數', button4: '§l§b礦工等級', button5: '§l§b牌級', button6: '§l§b延遲',button7: '§l§bTPS/伺服器穩定性', button8: '§l§b遊玩時間', button9: '§l§b遊玩日期(UTC+8)', button10: '§l§b在線人數', button11: '§l§b賽季完結日期', button12: '§l§b使用設備', button13: '§l§b伺服器版本', button14: '§l§b遊玩版本', button15: '§l§b伺服器IP', switch: '請選擇是否開啟該選項'},
        {id: 1},
        {id: 2},
        {id: 3}
    ]
    var Customersform_content = [
        {id: 0, title: form_lang_find.button0, get: pl.xuid.line0},
        {id: 1, title: form_lang_find.button1, get: pl.xuid.line1},
        {id: 2, title: form_lang_find.button2, get: pl.xuid.line2},
        {id: 3, title: form_lang_find.button3, get: pl.xuid.line3},
        {id: 4, title: form_lang_find.button4, get: pl.xuid.line4},
        {id: 5, title: form_lang_find.button5, get: pl.xuid.line5},
        {id: 6, title: form_lang_find.button6, get: pl.xuid.line6},
        {id: 7, title: form_lang_find.button7, get: pl.xuid.line7},
        {id: 8, title: form_lang_find.button8, get: pl.xuid.line8},
        {id: 9, title: form_lang_find.button9, get: pl.xuid.line9},
        {id: 10, title: form_lang_find.button10, get: pl.xuid.line10},
        {id: 11, title: form_lang_find.button11, get: pl.xuid.line11},
        {id: 12, title: form_lang_find.button12, get: pl.xuid.line12},
        {id: 13, title: form_lang_find.button13, get: pl.xuid.line13},
        {id: 14, title: form_lang_find.button14, get: pl.xuid.line14},
        {id: 15, title: form_lang_find.button15, get: pl.xuid.line15}
    ]
}

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
            {id: 0, line0: '玩家:$Name', line1: '等級:$Level', line2: '金錢/銀行:$Money/$Bank', line3: '重生次數:$Rebirth', line4: '礦工等級:$Miner_Level', line5: '牌級:$Rank', line6:'延遲:$Ping', line7: 'TPS:$TPS' ,line8: '遊玩時間:$Time' ,line9: '遊玩日期:$Date' ,line10: '在線人數$Online' ,line11: '賽季完結日期:$SessionFinish_Date' ,line12: '使用設備:$Device' ,line13: '伺服器版本:$Server_Version', line14: '遊戲版本$Minecraft_Version',line15: 'dtsvserver.ddns.net', time: time_zh_TW, date: `${Time.D}/${Time.M}/${Time.Y}`},
            {id: 1, line0: '玩家:$Name', line1: '等级:$Level'},
            {id: 2, line0: 'Player:$Name', line1: 'Level:$Level'},
            {id: 3,}
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
        arr.replace('$Device', pl.getDevice().os)
        arr.replace('$TPS', tps)
        arr.replace('$Time', sidebar.time)
        arr.replace('$Date', sidebar.date)
        arr.replace('$SessionFinish_Date', sessiondb.Session(SessionDueDate))

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

    var cmd = mc.newCommand('sidebar', '§l§bSidebar Settings', PermType.Any)
    cmd.setEnum('enum', ['on', 'Settings'])
    cmd.mandatory('enum', ParamType.Enum, 'on', 1)
    cmd.mandatory('enum', ParamType.Enum, 'Settings', 1)
    cmd.overload(['on', 'Settings'])
    cmd.setCallback((_cmd,ori, _out, res) => {
        var pl = ori.player
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
        switch (res.enum) {
            case 'on':
                if (sidebardb.get(pl.xuid.sidebar) == false) {
                    sidebardb.set(pl.xuid, 
                        {
                            sidebar: true,
                            line0: db.get(pl.xuid.line0),
                            line1: db.get(pl.xuid.line1),
                            line2: db.get(pl.xuid.line2),
                            line3: db.get(pl.xuid.line3),
                            line4: db.get(pl.xuid.line4),
                            line5: db.get(pl.xuid.line5),
                            line6: db.get(pl.xuid.line6),
                            line7: db.get(pl.xuid.line7),
                            line8: db.get(pl.xuid.line8),
                            line9: db.get(pl.xuid.line9),
                            line10: db.get(pl.xuid.line10),
                            line11: db.get(pl.xuid.line11),
                            line12: db.get(pl.xuid.line12),
                            line13: db.get(pl.xuid.line13),
                            line14: db.get(pl.xuid.line14),
                            line15: db.get(pl.xuid.line15)
                        }
                    )
                } else if (sidebar.get(pl.xuid.sidebar) == true) {
                    if (sidebardb.get(pl.xuid.sidebar) == false) {
                        sidebardb.set(pl.xuid, 
                            {
                                sidebar: false,
                                line0: db.get(pl.xuid.line0),
                                line1: db.get(pl.xuid.line1),
                                line2: db.get(pl.xuid.line2),
                                line3: db.get(pl.xuid.line3),
                                line4: db.get(pl.xuid.line4),
                                line5: db.get(pl.xuid.line5),
                                line6: db.get(pl.xuid.line6),
                                line7: db.get(pl.xuid.line7),
                                line8: db.get(pl.xuid.line8),
                                line9: db.get(pl.xuid.line9),
                                line10: db.get(pl.xuid.line10),
                                line11: db.get(pl.xuid.line11),
                                line12: db.get(pl.xuid.line12),
                                line13: db.get(pl.xuid.line13),
                                line14: db.get(pl.xuid.line14),
                                line15: db.get(pl.xuid.line15)
                            }
                        )
                    }
                }
            case 'Settings':
                Simpleform(langid)
        }
    })
    cmd.setup()
    log('Setup command successful')