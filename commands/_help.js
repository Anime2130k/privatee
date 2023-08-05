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

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------

Secktor.cmd({
    pattern: "help",
    alias: ["menu","h"],
    desc: "Help list",
    category: "general",
    react: "⛩️",
    filename: __filename
},
async (Void, citel, text) => {
    if (citel.isGroup) {
        const { commands } = require('../lib');
        if (text.split(" ")[0]) {
            let arr = [];
            const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
            if (!cmd) return await citel.reply("*❌ No such command.*");
            else arr.push(`*🍁 Command:* ${cmd.pattern}`);
            if (cmd.category) arr.push(`*🧩 Category:* ${cmd.category}`);
            if (cmd.alias) arr.push(`*🧩 Alias:* ${cmd.alias}`);
            if (cmd.desc) arr.push(`*🧩 Description:* ${cmd.desc}`);
            if (cmd.use) arr.push(`*〽️ Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
            return await citel.reply(arr.join('\n'));
        } else {
            const cmds = {}
            commands.map(async(command, index) => {
                if (command.dontAddCommandList === false && command.pattern !== undefined) {
                    if (!cmds[command.category]) cmds[command.category] = []
                    cmds[command.category].push(command.pattern)
                }
            })
            const time = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/KOLKATA')
                .locale('id')
            const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
            let total = await sck1.countDocuments()
            let str = `╔══ ≪` + fancytext(Config.botname.split(' ')[0], 58) + `≫ ══╗\n\n`
            str +=
                `Konichiwa! *${citel.pushName} senpai👋*\n\n I'm *${Config.botname}* a WhatsApp Bot Created by *RONEN-BOTS* for your assistance.\n
_🎗️ My Prefix:_ *[ ${prefix} ]*
_🎐 My Owner:_ *${Config.ownername}*
_👤 My Usercount:_ *${total}*
_☘️ My Uptime:_ *${runtime(process.uptime())}*
_💾 My Memory:_ *${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}*
_⏳ Time:_ *${time}*
_🗓️ Date:_ *${date}*

*Here's the list of my commands:*`
            for (const category in cmds) {
                str += `🌟 *Owner* 
🌐 ᴘʟᴜɢɪɴꜱ, 🗑 ʀᴇᴍᴏᴠᴇ, ➕ ɪɴꜱᴛᴀʟʟ, 🤝 ᴊᴏɪɴ, 🔓 ᴜɴʙʟᴏᴄᴋ, 🆔 ᴜᴊɪᴅ, 🚫 ʙʟᴏᴄᴋ, 📝 ᴀᴅᴅɴᴏᴛᴇ, ♻️ ϙʀ, 🐚 ꜱʜᴇʟʟ, 🔄 ᴇᴠᴀʟ, 🗑 ᴅᴇʟɴᴏᴛᴇ, 🗑 ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ, 🚷 ʙᴀɴ, 📜 ᴀʟʟɴᴏᴛᴇꜱ, 

🌟 *Extra* 
📋 ᴘᴀꜱᴛᴇ, 📋 ᴘᴀꜱᴛᴇʙɪɴ, 

🌟 *Game* 
🎲 ᴅᴇʟᴛᴛᴛ, 🎲 ᴛᴛᴛ, 

🌟 *Fun* 
❤️ ꜱʜɪᴘ, 👋 ᴡᴀᴠᴇ, ❓ ϙᴜᴇꜱᴛɪᴏɴ, ❓ ᴛʀᴜᴛʜ, ❓ ᴅᴀʀᴇ, 💡 ꜰᴀᴄᴛ, 📜 ϙᴜᴏᴛᴇꜱ, 📚 ᴅᴇꜰɪɴᴇ, 

🌟 *General* 
🆘 ʜᴇʟᴘ, 🆘 ᴏᴡɴᴇʀ, 📁 ꜰɪʟᴇ, ℹ️ ɪɴꜰᴏ, 📈 ꜱᴛᴀᴛᴜꜱ, 📊 ʀᴇᴘᴏʀᴛ, 🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ, 📶 ᴘɪɴɢ, 👀 ᴀʟɪᴠᴇ, 

🌟 *Tools* 
🔄 ʀᴇꜱᴛᴀʀᴛ, 

💗 *Misc* 💗
🔄 ᴜᴘᴅᴀᴛᴇ, 🎐 ᴠᴠ, 🏵 ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ, 🌅 ꜱᴇᴛɢᴏᴏᴅʙʏᴇ, 📖 ʀᴇᴀᴅᴍᴏʀᴇ, 🕒 ᴜᴘᴛɪᴍᴇ, 📊 ᴡᴍ, 🎨 ᴘɪᴄᴋ, 🔄 ꜰʟɪᴘᴛᴇxᴛ, 🎥 ᴍᴘ4ꜰʀᴏᴍᴜʀʟ, 📚 ᴄʜᴀᴛʙᴏᴛ, 📥 ᴇʙɪɴᴀʀʏ, 📤 ᴅʙɪɴᴀʀʏ, 🤖 ʙᴏᴛ, 🔓 ᴜɴʙᴀɴ, 🔗 ᴜʀʟ, 🔍 ᴛʀ, 

💗 *Converter* 💗
⏱️ ᴛᴏɪᴍɢ, 🎀 ꜰᴀɴᴄʏ, 🔎 ᴛɪɴʏ, 🔊 ᴛᴏᴀᴜᴅɪᴏ, 

💗 *Sticker* 💗
⚪ ᴄɪʀᴄʟᴇ, 🔳 ᴄʀᴏᴘ, 🔘 ʀᴏᴜɴᴅ, 🔒 ꜱᴛᴇᴀʟ, 

💗 *Downloader* 💗
📷 ɪɴꜱᴛᴀ, 🎵 ᴛᴛꜱ, 🎥 ʏᴛꜱ, 🎬 ᴠɪᴅᴇᴏ, ▶️ ᴘʟᴀʏ, 📌 ᴘɪɴ, 📺 ᴍᴇᴅɪᴀꜰɪʀᴇ, 🔊 ᴀᴜᴅɪᴏ, ▶️ ʏᴛᴍᴘ4, ▶️ ʏᴛᴍᴘ3, 📄 ʏᴛᴅᴏᴄ, 📃 ᴘʟᴀʏʟɪꜱᴛ, 

💗 *Economy* 💗
💵 ᴅᴀɪʟʏ, 🔄 ʀᴇꜱᴇᴛᴡᴀʟʟᴇᴛ, 🏦 ᴄᴀᴘᴀᴄɪᴛʏ, 💰 ᴅᴇᴘᴏꜱɪᴛ, 🏛️ ʟʙ, 🔄 ᴛʀᴀɴꜱꜰᴇʀ, 🏦 ᴡᴀʟʟᴇᴛ, 🎁 ɢɪᴠᴇ, 🏦 ʙᴀɴᴋ, 👤 ʀᴏʙ, 💸 ᴡɪᴛʜᴅʀᴀᴡ, 🎰 ɢᴀᴍʙʟᴇ, 🎰 ꜱʟᴏᴛ2, 🎰 ꜱʟᴏᴛ, 

💗 *User* 💗
🖼️ ꜰᴜʟʟᴘᴘ, 

💗 *AI* 💗
💬 ᴄʜᴀᴛ, 🗣️ ᴅᴀʟʟᴇ, 

💗 *Group* 💗
🎭 ꜱᴛɪᴄᴋᴇʀ, 🛡️ ꜱᴜᴘᴘᴏʀᴛ, ⚠️ ᴡᴀʀɴ, 🏷️ ᴛᴀɢᴀʟʟ, 📥 ʀᴇᴛʀɪᴇᴠᴇ, 🔀 ʀᴡᴀʀɴ, 📊 ᴘᴏʟʟ, 👤 ᴘʀᴏꜰɪʟᴇ, 🏅 ʀᴀɴᴋ, 👤 ᴘʀᴏᴍᴏᴛᴇ, 🚫 ᴋɪᴄᴋ, 🖼️ ᴍᴇᴍᴇɢᴇɴ, 📸 ɢʀᴏᴜᴘ, 👥 ɢʀᴏᴜᴘᴘɪᴄ, 🚫 ʜɪᴅᴇᴛᴀɢ, ➕ ᴀᴅᴅ, 🆔 ɢᴇᴛᴊɪᴅꜱ, 📣 ᴅᴇᴍᴏᴛᴇ, 🗑 ᴅᴇʟ, 🔍 ᴄʜᴇᴄᴋᴡᴀʀɴ, 📣 ʙʀᴏᴀᴅᴄᴀꜱᴛ, 🚫 ᴀɴᴛɪʟɪɴᴋ, 👥 ᴀᴄᴛ, 👥 ᴅᴇᴀᴄᴛ, 

💗 *Search* 💗
🔍 ɴᴘᴍ, 🎥 ɪᴍᴅʙ, 🌦️ ᴡᴇᴀᴛʜᴇʀ, 🏯 ʜᴏʀᴏ, 🔍 ɢᴏᴏɢʟᴇ, 📷 ɪᴍᴀɢᴇ, 👫 ᴄᴏᴜᴘʟᴇᴘᴘ, 🔍 ꜱᴛᴀʟᴋ, 

💗 *Reaction* 💗
🦷 ʙɪᴛᴇ, 😊 ʙʟᴜꜱʜ, 👊 ᴘᴜɴᴄʜ, ✋ ᴘᴀᴛ, 💋 ᴋɪꜱꜱ, 💥 ᴋɪʟʟ, 😄 ʜᴀᴘᴘʏ, 💃 ᴅᴀɴᴄᴇ, 🔄 ʏᴇᴇᴛ, 😉 ᴡɪɴᴋ, 🤚 ꜱʟᴀᴘ, 🍌 ʙᴏɴᴋ, 😖 ʙᴜʟʟʏ, 😬 ᴄʀɪɴɢᴇ, 🤗 ᴄᴜᴅᴅʟᴇ, 

💗 *Moderation* 💗
🔇 ᴀᴍᴜᴛᴇ, 🔈 ᴀᴜɴᴍᴜᴛᴇ, 🔇 ᴅᴜɴᴍᴜᴛᴇ, 🔇 ᴅᴍᴜᴛᴇ,`
                

            }
            str += `\n\n\n*⭐️ Type:* _<${prefix}report>_ to report the developers about any issue you face in the bot\n\n*⭐ Type:* _<${prefix}help cmd name>_ to know more about a specific command.\n*Eg:* _${prefix}help attp_\n\n*🎐 RONEN-BOTS* `;
            let buttonMessaged = {
                video: { url: "https://graph.org/file/9b56e94de9d4f55aa6d50.mp4" },
                caption: str
            };
            return await Void.sendMessage(citel.chat, buttonMessaged);
        }
    } else {
        // Reply with a warning for PMs
        return await citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*`);
    }
});
   
    //---------------------------------------------------------------------------
/**Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )**/
    //---------------------------------------------------------------------------
Secktor.cmd({
    pattern: "owner",
    alias: ["dev", "mods", "mod"],
    desc: "To find owner number",
    category: "general",
    react: "💜",
    filename: __filename
}, async (Void, citel) => {
    if (citel.isGroup) {
        const Config = require('../config');
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD';
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel
        });
    } else {
        // Reply with a warning for PMs
        return await citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*`);
    }
});

Secktor.cmd({
  pattern: "file",
  desc: "to get exact name where that command is in repo.\nSo user can edit that.",
  category: "general",
  react: "✨",
  filename: __filename
},
async (citel, text) => {
  if (citel.isGroup) {
    const { commands } = require('../lib');
    let arr = [];
    const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
    if (!cmd) return await citel.reply("*❌ No Such commands.*");
    else arr.push(`*🍁 Command:* ${cmd.pattern}`);
    if (cmd.category) arr.push(`*🧩 Type:* ${cmd.category}`);
    if (cmd.filename) arr.push(`✨ FileName: ${cmd.filename}`);
    return citel.reply(arr.join('\n'));
  } else {
    // Reply with a warning for PMs
    return await citel.reply(`*⚠️WARNING⚠️*
  
_Don't text the Bot in pm._

*㊙️If you want to add this bot in your GC(GroupChat) then ask the Developer*

*〽️Developer:*
• wa.me/916000530073

*📛Our official Support GC: http://surl.li/eumln*

*💗Have a nice day💗*

_Mikasa💗 Powered by:_ *©️RONEN-BOTS*`);
  }
});

