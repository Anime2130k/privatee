const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        alias: "igdl",
        desc: "download instagram post.",
        react: "🛐",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
            if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
        const { Insta } = require('../lib')
if(!text) return citel.reply('Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });


cmd({
        pattern: "iguser",
        alias: "ig",
        desc: "download instagram post.",
        react: "🛐",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
            if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
        const { iginfo } = require('../lib')
if(!text) return citel.reply('Need Username.')
let response = await iginfo(username)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });
