// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "",
    /* introduction */ "",
    /* version */ [0,0,1],
    /* otherInformation */ null
); 

var db = newKVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database')
var fm = mc.newSimpleForm()
fm.setContent('§l§b請選擇你將在本伺服器中所使用的語言\n请选择你将在本伺服器所使用的语言\n§l§dPlease select the language you will use on this server\n§l§6このサーバーで使用する言語を選択してください\n\n本服主要所使用的語言是繁體中文、簡體中文、英文和日文，本服的翻譯並非完全正確，如有錯誤歡迎向本服糾正。\n本服主要所使用的语言是繁体中文、简体中文、英文和日文，本服的翻译并非完全正确，如有错误欢迎向本服纠正。\nThe main languages ​​used in this server are Traditional Chinese, Simplified Chinese, English and Japanese. The translation of this server is not completely correct. If there are any errors, please feel free to correct them to this server.\nこのサーバーで使用されている主な言語は繁体字中国語、簡体字中国語、英語、日本語です。このサーバーの翻訳は完全に正しいわけではありません。誤りがある場合は、お気軽に修正してください。\n\n\n\n如選擇錯誤，可與游戲開始後輸入/lang,/language更改語言。\n如选择错误，可与游戏开始后输入/lang,/language更改语言。\nIf you make the wrong choice, you can change the language by typing /lang,/language after starting the game.\n選択を間違えた場合は、ゲームの開始後に「/lang,/ language」と入力して言語を変更できます。')
fm.addButton('§l§e繁體中文')
fm.addButton('§l§e简体中文')
fm.addButton('§l§eEnglish')
fm.addButton('§l§e日本語')
var lang = ''

function terms(id,pl) {
    var term = lang_term.find((langs) => langs.lang === id)
    var terms = mc.newSimpleForm()
    terms.setContent(term.content)
    terms.addButton(term.button_agree)
    terms.addButton(term.button_disagree)
    pl.sendForm(terms, (pl,id) => {
        if (id == 0) {
            pl.tell(msg_agree)
            db.set(pl.xuid,
                {
                    Name:pl.name,
                    UUID:pl.uuid,
                    Level: db.get(pl.xuid.Level),
                    Miner_Level: db.get(pl.xuid.Miner_Level),
                    Rank: db.get(pl.xuid_Rank),
                    Rebirth: db.get(pl.xuid_Rebirth),
                    Money: db.get(pl.xuid.Money),
                    Bank: db.get(pl.xuid.Bank),
                    Lang: db.get(pl.xuid.Lang),
                    PlaytimeDay: 0,
                    PlaytimeHrs: 0,
                    PlaytimeMin: 0,
                    PlaytimeSec: 0,
                    Term: 'Agree'
                }
            )
        } else if (id == 1) {
            pl.kick(msg_disagree)
            db.set(pl.xuid,
                {
                    Name:pl.name,
                    UUID:pl.uuid,
                    Level: db.get(pl.xuid.Level),
                    Miner_Level: db.get(pl.xuid.Miner_Level),
                    Rank: db.get(pl.xuid_Rank),
                    Rebirth: db.get(pl.xuid_Rebirth),
                    Money: db.get(pl.xuid.Money),
                    Bank: db.get(pl.xuid.Bank),
                    Lang: db.get(pl.xuid.Lang),
                    PlaytimeDay: 0,
                    PlaytimeHrs: 0,
                    PlaytimeMin: 0,
                    PlaytimeSec: 0,
                    Term: 'Disagree'
                }
            )
        } else if (id == Null) {
            terms(id,pl)
        }
    })
}

var lang_term = [
    { lang: 0, title: '', content: '', button_agree: '§l§a同意', button_disagree: '§l§c不同意', msg_agree: '§l§a感謝你同意本服條款', msg_disagree: '§l§c你未能夠同意本服條款'},
    { lang: 1, title: '', content: '', button_agree: '§l§a同意', button_disagree: '§l§c不同意', msg_agree: '§l§a感谢你同意本服条款', msg_disagree: '§l§c你未能够同意本服条款'},
    { lang: 2, title: '', content: '', button_agree: '§l§aAgree', button_disagree: '§l§cDisagree', msg_agree: '§l§aThanks for agree our terms', msg_disagree: '§l§cYou failed to agree to these terms'},
    { lang: 3, title: '', content: '', button_agree: '§l§a同意する', button_disagree: '§l§c同意しない', msg_agree: '§l§aこれらの利用規約に同意していただきありがとうございます', msg_disagree: '§l§cこれらの利用規約に同意できませんでした'}
]

mc.listen('onJoin', (pl) => {
    if (db.get(pl.xuid) == Null) {
        pl.sendForm(fm,(pl,id) => {
            if (id == 0) {
                lang = '繁體中文'
            }else if (id == 1) {
                lang = '簡體中文'
            } else if (id == 2) {
                lang = '英文'
            } else if (id == 3) {
                lang = '日文'
            }
            log(pl.realName + `首次加入伺服器，玩家所選取的語言是：${lang}`)
            if (id == 0) {
                db.set(pl.xuid,
                    {
                        Name:pl.name,
                        UUID:pl.uuid,
                        Level: 1,
                        Miner_Level: '煤炭工人',
                        Rank: '玩家',
                        Rebirth: 0,
                        Money: 100,
                        Bank: 0,
                        Lang: 'TChi', //TChi = Tradtional Chinese //SChi = Simplified Chinese
                        PlaytimeDay: 0,
                        PlaytimeHrs: 0,
                        PlaytimeMin: 0,
                        PlaytimeSec: 0,
                        Term: 0
                    }
                )
                terms(id,pl)
            } else if (id == 1) {
                db.set(pl.xuid,
                    {
                        Name:pl.name,
                        UUID:pl.uuid,
                        Level: 1,
                        Miner_Level: '煤炭工人',
                        Rank: '玩家',
                        Rebirth: 0,
                        Money: 100,
                        Bank: 0,
                        Lang: 'SChi', //TChi = Tradtional Chinese //SChi = Simplified Chinese
                        PlaytimeDay: 0,
                        PlaytimeHrs: 0,
                        PlaytimeMin: 0,
                        PlaytimeSec: 0,
                        Term: 0
                    }
                )
                terms(id,pl)
            } else if (id == 2) {
                db.set(pl.xuid,
                    {
                        Name:pl.name,
                        UUID:pl.uuid,
                        Level: 1,
                        Miner_Level: 'Coal Worker',
                        Rank: 'Player',
                        Rebirth: 0,
                        Money: 100,
                        Bank: 0,
                        Lang: 'Eng',
                        PlaytimeDay: 0,
                        PlaytimeHrs: 0,
                        PlaytimeMin: 0,
                        PlaytimeSec: 0,
                        Term: 0
                    }
                )
                terms(id,pl)
            } else if (id == 3) {
                db.set(pl.xuid,
                    {
                        Name:pl.name,
                        UUID:pl.uuid,
                        Level: 1,
                        Miner_Level: '石炭労働者',
                        Rank: 'プレーヤー',
                        Rebirth: 0,
                        Money: 100,
                        Bank: 0,
                        Lang: 'Jap',
                        PlaytimeDay: 0,
                        PlaytimeHrs: 0,
                        PlaytimeMin: 0,
                        PlaytimeSec: 0,
                        Term: 0
                    }
                )
                terms(id,pl)
            }
        })
    }
})

db.close()