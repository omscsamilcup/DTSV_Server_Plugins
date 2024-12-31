var db = newKVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database')

var cmd = mc.newCommand('language','',PermType.Any)
cmd.setAlias('lang')
cmd.overload()
cmd.setCallback((_cmd,ori,_out,_res)=>{
    var pl = ori.player
       form(pl)
    })
cmd.setup()

var id = ''

function form(pl) {
    var rlang = db.get(pl.xuid.Lang) //Regular Language
    if (rlang = 'TChi') {
        rlang = 0
    } else if (rlang = 'SChi') {
        rlang = 1
    } else if (rlang = 'Eng') {
        rlang = 2
    } else if (rlang = 'Jap') {
        rlang = 3
    }
    var language = lang_content.find((langs) => langs.id === rlang)
    var fm = mc.newSimpleForm()
    fm.setTitle(language.title)
    fm.setContent(language.content)
    fm.addButton('§l§e繁體中文')
    fm.addButton('§l§e简体中文')
    fm.addButton('§l§eEnglish')
    fm.addButton('§l§e日本語')
    pl.sendForm(fm, (pl,id)=> {
        var lang = ''
        if (id == 0) {
            lang = 'TChi'
        } else if (id == 1) {
            lang = 'SChi'
        } else if (id == 2) {
            lang = 'Eng'
        } else if (id == 3) {
            lang = 'Jap'
        } else if (id == Null) {
            if (rlang == 0) {
                lang = 'TChi'
            } else if (rlang == 1) {
                lang = 'SChi'
            } else if (rlang == 2) {
                lang = 'Eng'
            } else if (rlang == 3) {
                lang = 'Jap'
            }
        }
        db.set(pl.xuid,
            {
                Name:pl.name,
                Level: db.get(pl.xuid.Level),
                Miner_Level: db.get(pl.xuid.Miner_Level),
                Rank: db.get(pl.xuid_Rank),
                Rebirth: db.get(pl.xuid_Rebirth),
                Money: db.get(pl.xuid.Money),
                Bank: db.get(pl.xuid.Bank),
                Lang: lang,                        
                PlaytimeDay: db.get(pl.xuid.PlaytimeDay),
                PlaytimeHrs: db.get(pl.xuid.PlaytimeHrs),
                PlaytimeMin: db.get(pl.xuid.PlaytimeMin),
                PlaytimeSec: db.get(pl.xuid.PlaytimeSec),
                Term: db.get(pl.xuid.Term)
            }
        )
        pl.tell(language.msg)
    })
}

var lang_content = [
    {id: 0, title: '§l§d更改語言', content: '§l§b請選擇你要更換成的語言', msg: '§l§a你已將語言更改為§6繁體中文'},
    {id: 1, title: '§l§d更改语言', content: '§l§b请选择你要更换成的语言', msg: '§l§a你已将语言更改为§6简体中文'},
    {id: 2, title: '§l§dChange Language', content: '§l§bPlease select the language you want to change to', msg: '§l§aYou have change your language to§6 english'},
    {id: 3, title: '§l§d言語を変更する', content: '§l§b変更したい言語を選択してください', msg: '§l§a言語を§6日本語§aに変更しました'}
]

db.close()