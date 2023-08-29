/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { dare, truth, random_question } = require('../lib/truth-dare.js')

const axios = require('axios')
const { formatp , sck1, formatDate , tlang, botpic,cmd, prefix, runtime,Config , parsedJid ,sleep } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
 react: "⁉️",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
	     if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
    pattern: "truth",
    desc: "truth and dare (truth game.)",
    react: "🤔",
    category: "fun",
    filename: __filename,
},
async (Void, citel, text, { isCreator }) => {
    if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️* 
    
    _Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*`)
    // The rest of your warning message
    
    let ter = `*TRUTH*\n\n${truth()}`;
    let buttonMessaged = {
        image: { url: await botpic() },
        caption: ter,
        footer: tlang().footer,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: "",
                body: "Mikasa💗",
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: ``,
            },
        },
    };
    return await Void.sendMessage(citel.chat, buttonMessaged, {
        quoted: citel,
    });
});


    //---------------------------------------------------------------------------
    pattern: "dare",
    desc: "truth and dare (dare game.)",
    react: "🤔",
    category: "fun",
    filename: __filename,
},
async (Void, citel, text, { isCreator }) => {
    if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️* 
    
    _Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*`)
    // The rest of your warning message
    
    let ter = `*DARE*\n\n${dare()}`;
    let buttonMessaged = {
        image: { url: await botpic() },
        caption: ter,
        footer: tlang().footer,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: "",
                body: "Mikasa💗",
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: ``,
            },
        },
    };
    return await Void.sendMessage(citel.chat, buttonMessaged, {
        quoted: citel,
    });
});

    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
 react: "❕",
        category: "fun",
        filename: __filename,
    },
  async(Void, citel, text,{ isCreator }) => {
	     if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n*Powered by Mikasa💗*`)   
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
     react: "〽️",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
	     if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
       const replyf = `
*🎗️Content:* ${quoo.data.quote.body}
*👤Author:* ${quoo.data.quote.author}`
return citel.reply(replyf)
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
     react: "✳️",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
	     if (!citel.isGroup && !isCreator) return citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*
`);
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `🔰Word: ${text}
            📛Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            ⚜️Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
