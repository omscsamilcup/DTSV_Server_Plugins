setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
    var pl = pls[pl]
        pl.addScore('playSec',1)
        if (pl.getScore('playSec') >= 60) {
            pl.addScore('playMin', 1)
            pl.reduceScore('playSec', 60)
        }
        if (pl.getScore('playMin') >= 60) {
            pl.addScore('playHours', 1)
            pl.reduceScore('playMin',60)
        }
        if (pl.getScore('playHours') >= 24) {
            pl.addScore('playDays', 1)
            pl.reduceScore('playHours', 1)
        }
    }
},1000)

mc.listen("onServerStarted",() => {
    if (!mc.getAllScoreObjectives().includes('timer')) {
        var scorename = ['playSec','playMin','playHours','playDays']
        var scoreshow = ['秒','分','時','天']
        var i = 0
        while (i < scorename.length) {
            mc.newScoreObjective(scorename[i],scoreshow[i])
            i += 1
        }
        mc.newScoreObjective('timer')
        colorLog('yellow',`第一次加载本插件，功能已成功加载`)
    }
})

function time_zh_TW(pl) {
    pl.getScore('playDays') + '天',pl.getScore('playHours') + '小時' + pl.getScore('playMin') + '分' + pl.getScore('playSec') + '秒'
}

function time_Eng(pl) {
    pl.getScore('playDays') + 'Day',pl.getScore('playHours') + 'Hours' + pl.getScore('playMin') + 'Min' + pl.getScore('playSec') + 'Sec'
}

function time_zh_CN(pl) {
    pl.getScore('playDays') + '天',pl.getScore('playHours') + '小时' + pl.getScore('playMin') + '分' + pl.getScore('playSec') + '秒'
}

ll.export(time_zh_TW,'timecount','time_zh_TW')
ll.export(time_zh_CN,'timecount','time_zh_CN')
ll.export(time_Eng,'timecount','time_Eng')

log('Time Count插件已加載')