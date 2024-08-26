// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

var data = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/data.json')
var cave_level = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/cave_level.json')
var miner_level = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/miner_level.json')
var play_time = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/play_time.json')
var money = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/AllConfig_Data/money.json')

mc.listen('onJoin', function(pl) {
    let dv = pl.getDevice()
    var op = mc.getOnlinePlayers();
    data.set(pl.realName, {
        xuid: pl.xuid,
        uuid: pl.uuid,
        ip: dv.ip,
        os : dv.os,
        op: pl.isOP(),
        money: money.get(pl.realName),
        play_time: play_time.get(pl.realName),
        miner_level: miner_level.get(pl.realName),
        cave_level: cave_level.get(pl.realName)
    })
    for (let index = 0; index < op.length; index++) {
        if (op[index].isOP()) {
            op[index].tell(`§l§e玩家${pl.realName}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入時的延遲是${dv.avgPing}`, 0); 
        }
    }
    colorLog("yellow", `玩家${pl.realName}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入時的延遲是${dv.avgPing}`)
})

log('Get Data插件已加載')