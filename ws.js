var WS = new WSClient();

var tar = 'ws://127.0.0.1:6000'

//設定
var Playerchat = true;
var PlayerJoin = true
var PlayerLeft = true;
var PlayerDie = true;
var Logs = true;

function connectionStauts() {
    switch (WS.status) {
        case 0:
            {
                logger.info('WebSocket 連接成功!');
                let type = 'serverstart'
                let time = system.getTimeStr();

                WS.send(JSON.stringify({
                    type,
                    time
                }));
                break;
            }
        case 1:
            {
                logger.info('DC WS已關閉');
                break;
            }
        case 2:
            {
                logger.info('DC WS已關閉');
                logger.info('重新連接至DC WS...');
                setTimeout(() => {
                    if (WS.status != 0) {
                        logger.info('stauts:', WS.connect(tar), WS.status);
                        connectionStauts();
                    } else {
                        logger.info('已连接到WS服务端');
                    }
                }, 10 * 1000);
                break;
            }
        default:
            {
                logger.info('WS連接狀態未知');
            }
    }
}

function toJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) { return obj; } else { return false; }
        } catch (e) {}
    }
}

function datetime_to_unix(datetime) {
    var tmp_datetime = datetime.replace(/:/g, '-');
    tmp_datetime = tmp_datetime.replace(/ /g, '-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return parseInt(now.getTime() / 1000);
}


mc.listen('onServerStarted', function() {
    logger.info('正在嘗試連接到DC WS');
    if (WS.status != 0) {
        logger.info('stauts:', WS.connect(tar), WS.status);
        connectionStauts();
    } else {
        logger.info('成功連接到DC WS');
    }
});
WS.listen('onError', (err) => {
    logger.info('WS DC連接錯誤');
    logger.error('Error code: ' + err);
})
WS.listen('onLostConnection', (msg) => {
    logger.info('失去DC WS連接');
    logger.error('Error code: ' + msg);
});
setInterval(() => {
    if ((WS.status == 2)) {
        logger.info('stauts:', WS.connect(tar), WS.status);
        connectionStauts();
    }
}, 1000 * 10);

if (Playerchat == true) {
    mc.listen('onChat', function(pl, msg) {
        let playername = pl.realName
        WS.send(JSON.stringify({
            type: 'chat',
            message: msg,
            time: system.getTimeStr(),
            player: playername
        }));
    });
}

if (PlayerJoin == true) {
    mc.listen('onJoin', (pl, msg) => {
        let dv = pl.getDevice();
        WS.send(JSON.stringify({
            type: 'PlayerJoin',
            JoinPlayer: pl.realName,
            time: system.getTimeStr(),
        }))
    })
}

if (PlayerLeft == true) {
    mc.listen('onLeft', (pl, msg) => {
        WS.send(JSON.stringify({
            type: 'PlayerLeft',
            LeftPlayer: pl.realName,
            time: system.getTimeStr()
        }))
    })
}

if (PlayerDie == true) {
    mc.listen('onPlayerDie', function(pl, source) {
        if (source == null) {
            let type = 'PlayerSuicide'
            player = pl.realName;

            var Text = ['莫名其妙死掉了', '憑空消失了', '被服主拿草打死了', '被空氣殺死了', '被上天制裁!', '不想活了!', '使用神秘的力量而死亡', '無緣無故地走掉了......', '安詳的走了'];
            var rand = Math.random();
            var randomtext = Text[Math.floor(Math.random() * Text.length)]

            WS.send(JSON.stringify({
                type,
                player,
                randomtext,
                time: system.getTimeStr()
            }))
        } else if (source.type == 'minecraft:player') {
            let type = 'PlayerDie';
            let DiePlayer = pl.realName;
            let kill = source.toPlayer();
            let KillBy = kill.realName;

            WS.send(JSON.stringify({
                type,
                DiePlayer,
                KillBy,
                time: system.getTimeStr()
            }))
        }
    });
}

WS.listen('onTextReceived', function(msg) {
    var Message = toJSON(msg);
    switch (Message.type) {
        case 'message':
            mc.runcmdEx(`tellraw @a {"rawtext":[{"text":"§d[§bDiscord§d] §e${Message.sender}: ${Message.gomsg}"}]}`);
            colorLog('blue',`[Discord] ${Message.sender}: ${Message.gomsg}`)
            break;
        case 'Playerlist':
            var result = mc.runcmdEx("list");
            let txt = result.output.replace('There are', '共有')
            txt = txt.replace('players online:', '玩家在線上:')

            WS.send(JSON.stringify({
                type: 'Playerlist',
                list: txt,
            }))
            break;
        case 'tps':
            var servertps = mc.runcmdEx('tps');
            let servertpss = servertps.output.replace('§e', '')
            servertpss = servertpss.replace('§a', '')

            WS.send(JSON.stringify({
                type: 'tps',
                tps: servertpss,
            }))
            break;
        case 'restart':
            var restart = mc.runcmd('restart')
            let restarts = ''

            WS.send(JSON.stringify({
                type: 'restart',
                restart: restarts,
            }))
            break;
        case 'stop':
            var stop = mc.runcmd('stop')
            let stops = ''

            WS.send(JSON.stringify({
                type: 'stop',
                restart: stops,
            }))
            break;
    }
});

logger.info('==============插件資訊==============')
logger.info('DC對話橋啟動')
logger.info('==============插件原創==============')
logger.info("原創:RestudyXD")
logger.info("原創Discord:Patreon#4956")
logger.info('==============插件改版==============')
logger.info('改版:杯子小samilcup')
logger.info('改版者github:omscsamilcup')
logger.info('改版者Discord:杯子小samilcup#0001')
logger.info('====================================')