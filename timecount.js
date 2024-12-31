var db = newKVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database')

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        db.set(pl.xuid, {
            Name:pl.name,
            Level: db.get(pl.xuid.Level),
            Miner_Level: db.get(pl.xuid.Miner_Level),
            Rank: db.get(pl.xuid_Rank),
            Rebirth: db.get(pl.xuid_Rebirth),
            Money: db.get(pl.xuid.Money),
            Bank: db.get(pl.xuid.Bank),
            Lang: db.get(pl.xuid.Lang),                        
            PlaytimeDay: db.get(pl.xuid.PlaytimeDay),
            PlaytimeHrs: db.get(pl.xuid.PlaytimeHrs),
            PlaytimeMin: db.get(pl.xuid.PlaytimeMin),
            PlaytimeSec: ++db.get(pl.xuid.PlaytimeSec),
            Term: db.get(pl.xuid.Term)
        })
        if (db.get(pl.xuid.PlaytimeSec) >= 60) {
            db.set(pl.xuid, {
                Name:pl.name,
                Level: db.get(pl.xuid.Level),
                Miner_Level: db.get(pl.xuid.Miner_Level),
                Rank: db.get(pl.xuid_Rank),
                Rebirth: db.get(pl.xuid_Rebirth),
                Money: db.get(pl.xuid.Money),
                Bank: db.get(pl.xuid.Bank),
                Lang: db.get(pl.xuid.Lang),                        
                PlaytimeDay: db.get(pl.xuid.PlaytimeDay),
                PlaytimeHrs: db.get(pl.xuid.PlaytimeHrs),
                PlaytimeMin: ++db.get(pl.xuid.PlaytimeMin),
                PlaytimeSec: db.get(pl.xuid.PlaytimeSec),
                Term: db.get(pl.xuid.Term)
            })
        }
        if (db.get(pl.xuid.PlayertimeMin) >= 60) {
            db.set(pl.xuid, {
                Name:pl.name,
                Level: db.get(pl.xuid.Level),
                Miner_Level: db.get(pl.xuid.Miner_Level),
                Rank: db.get(pl.xuid_Rank),
                Rebirth: db.get(pl.xuid_Rebirth),
                Money: db.get(pl.xuid.Money),
                Bank: db.get(pl.xuid.Bank),
                Lang: db.get(pl.xuid.Lang),                        
                PlaytimeDay: db.get(pl.xuid.PlaytimeDay),
                PlaytimeHrs: ++db.get(pl.xuid.PlaytimeHrs),
                PlaytimeMin: db.get(pl.xuid.PlaytimeMin),
                PlaytimeSec: db.get(pl.xuid.PlaytimeSec),
                Term: db.get(pl.xuid.Term)
            })
        }
        if (db.get(pl.xuid.PlayertimeHrs) >= 24) {
            db.set(pl.xuid, {
                Name:pl.name,
                Level: db.get(pl.xuid.Level),
                Miner_Level: db.get(pl.xuid.Miner_Level),
                Rank: db.get(pl.xuid_Rank),
                Rebirth: db.get(pl.xuid_Rebirth),
                Money: db.get(pl.xuid.Money),
                Bank: db.get(pl.xuid.Bank),
                Lang: db.get(pl.xuid.Lang),                        
                PlaytimeDay: ++db.get(pl.xuid.PlaytimeDay),
                PlaytimeHrs: db.get(pl.xuid.PlaytimeHrs),
                PlaytimeMin: db.get(pl.xuid.PlaytimeMin),
                PlaytimeSec: db.get(pl.xuid.PlaytimeSec),
                Term: db.get(pl.xuid.Term)
            })
        }
    }
},1000)

function time_zh_TW(pl) {
    var time = pl.getScore('playDays') + '天' + pl.getScore('playHours') + '小時' + pl.getScore('playMin') + '分鐘' + pl.getScore('playSec') + '秒'
}

function time_Eng(pl) {
    var time = pl.getScore('playDays') + 'Day' + pl.getScore('playHours') + 'Hours' + pl.getScore('playMin') + 'Min' + pl.getScore('playSec') + 'Sec'
}

function time_zh_CN(pl) {
    var time = pl.getScore('playDays') + '天' + pl.getScore('playHours') + '小时' + pl.getScore('playMin') + '分钟' + pl.getScore('playSec') + '秒'
}

function time_Jap() {
    var time = `${db.get(pl.xuid.PlaytimeDay)}日${db.get(pl.xuid.PlaytimeHrs)}時間${db.get(pl.xuid.PlaytimeMin)}分${db.get(pl.xuid.PlaytimeSec)}秒`
}

ll.exports(time_zh_TW(),'timecount','time_zh_TW')
ll.exports(time_zh_CN(),'timecount','time_zh_CN')
ll.exports(time_Eng(),'timecount','time_Eng')
ll.exports(time_Jap(),'timecount','Jap')