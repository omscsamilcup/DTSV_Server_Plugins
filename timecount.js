/*var play_time = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/')
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        var play_time_day = play_time.get(pl.realName).day
        var play_time_hours = play_time.get(pl.realName).hours
        var play_time_min = play_time.get(pl.realName).min
        var play_time_sec = play_time.get(pl.realName).sec
        play_time_sec = ++play_time_sec
        if (play_time.get(pl.realName).sec >= 60) {
            play_time_min = ++play_time_min
            play_time_sec = 0
        }
        if (play_time_min >= 60) {
            play_time_hours = ++play_time_hours
            play_time_min = 0
        }
        if (play_time_hours >= 24) {
            play_time_day = ++play_time_day
            play_time_hours = 0
        }
        play_time.set(pl.realName, {
            day: play_time_day,
            hours: play_time_hours,
            min: play_time_min,
            sec: play_time_sec
        })
    }
},1000)

log('Time Count插件已加載')*/