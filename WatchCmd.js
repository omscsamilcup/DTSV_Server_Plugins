let config = data.openConfig(".\\plugins\\YuFengYa\\WatchPlayerCmd\\WatchPlayerCmd.json", "json", "{}")

function feedback(player, info) {
    player.tell("§r[§l§c玩家指令輸出§r] " + info);
};
mc.regPlayerCmd("cmdlog", "切換玩家指令輸出狀態", (player, args) => {
    let fm = mc.newCustomForm();
    fm.setTitle("監控玩家指令輸出");
    fm.addLabel("監控玩家指令輸出開關狀態");
    fm.addSwitch("關閉玩家指令輸出 <=> 開啟玩家指令輸出", Boolean(config.get(player.realName, true )));
    player.sendForm(fm, (pl, data) => {
        if (data == null) {
            return;
        }
        config.set(player.realName, data[1]);
        let info = "§l§b狀態更新成功。";
        if (data[1]) {
            info += "§e當前狀態:§a開啟§r";
        } else {
            info += "§e當前狀態:§c關閉§r";
        }
        feedback(pl, info);
    });
}, 1);
mc.listen("onPlayerCmd", (player, cmd) => {
    if (config.get(player.realName, true )) {
        var op = mc.getOnlinePlayers();
        for (let index = 0; index < op.length; index++) {
            if (op[index].isOP()) {
                op[index].tell(`§d[§bCMD§d]§e${player.realName}使用指令:/${cmd}`, 0); 
            }
        }
    }
});

log('WatchCmd插件已加載')
log('Written By:Samilcup')