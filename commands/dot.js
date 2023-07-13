const {cmd } = require('../lib')
cmd({
        pattern: "hfyhdhdjdjxhxjcjdgn",
        alias: "kgjskghkxhmdkhxhihb",
        desc: "download instagram post.",
        react: "❌",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('No suck command!.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });
