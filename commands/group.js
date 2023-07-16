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

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix, command, isCreator} = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd(async (Void, citel, text, { isCreator, isGroup }) => {
    if (!isGroup) {
        return citel.reply("⚠️You are not allowed to text in PM, you'll be blocked!");
    }
});
//---------------------------------------------------------------------------       
cmd({
            pattern: "join",
	react: "💠",
            desc: "joins group by link",
            category: "owner",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("🟩Joined Group"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
	react: "✴️",
            desc: "Makes sticker of replied image/video.",
            category: "group",
            use: '<reply to any image/video.>',
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
            if (!citel.quoted) return citel.reply(`*Mention any Image or video Sir.*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("Cannot fetch videos longer than *20 Seconds*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*Uhh,Please reply to any image or video*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "support",
	react: "⚜️",
        desc: "Sends official support group link.",
        category: "group",
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
        citel.reply(`*Check your Pm ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*🎀Group Name: Ronen-Bots Support*\n_The purpose of this group is to help the users using our bots. You can ask about any issue regarding any of our Bots in this group. If you want our Bots in your gc then you can text the Admin personally or tag them in the group, and don't forget to be respectful to everyone in this group._\n\n*🧧Group Link:* http://surl.li/eumln`,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "warn",
	react: "⚠️",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>', 
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!citel.isGroup) return citel.reply('This Command is only for group.')
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('This command is only for Admin.')
 const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unblock",
	react: "✔️",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {

            if (!citel.quoted) return citel.reply("Please reply to user");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ujid",
	    react: "🆔",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
	react: "🈷️",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
   🎀〘   *Tag All*   〙🎀

➲ *Message :* ${text ? text : "blank"}\n\n
➲ *Author:* ${citel.pushName} 🔖
`
        for (let mem of participants) {
            textt += `📍 @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "report",
	react: "🆗",
            desc: "Sends report to the main Bot developer.",
            category: "general",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${
        prefix + command
      } Hello dev please fix <command name>`);
            textt = `*|🔖 REPORT SENT 🔖|*`;
            teks1 = `\n\n*📌REPORTED BY* : _@${
    citel.sender.split("@")[0]}_\n*📝REPORT* : _${text}_\n\n*MIKASA💗*\n*POWERED BY: RONEN-BOTS*`;
            teks2 = `\n\n*Konichiwa!👋 _@${
    citel.sender.split("@")[0]},_ The report has been sent to my Developer*.\n*⚠️If it is a spam you might get blocked or ban*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
    pattern: "retrieve",
    react: "♻️",
    desc: "Copies and forwards viewonce message.",
    category: "group",
    filename: __filename,
    use: '<reply to a viewonce message.>',
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
    if (!citel.quoted) return citel.reply("Please reply to any message Image or Video!");
    let mime = citel.quoted.mimetype; // Corrected variable name
    if (/viewOnce/.test(mime)) {
        const mtype = Object.keys(citel.quoted.message)[0]; // Updated variable name
        delete citel.quoted.message[mtype].viewOnce;
        const msgs = proto.Message.fromObject({
            ...citel.quoted.message,
        });
        const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
        await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
    } else {
        await citel.reply("Please, reply to a viewOnce message.");
    }
});

    //---------------------------------------------------------------------------
cmd({
            pattern: "rwarn",
	react: "⛔",
            desc: "Deletes all previously given warns of quoted user.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.quoted) return citel.reply('Quote a user master.')
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            return citel.reply('User is now free as a bird.\n.')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "poll",
	react: "☢️",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2)
                return await citel.reply(
                    `${prefix}poll question;option1,option2,option3.....`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
	alias: ["p"],
	react: "👤",
            desc: "Shows profile of user.",
            category: "group",
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
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "New Born✨";
            if (lvpoints <= 2) {
                var role = "🏳Slime";
            } else if (lvpoints <= 4) {
                var role = "🧟Goblin";
            } else if (lvpoints <= 6) {
                var role = "👤Goblin Prime";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Goblin Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage Prime";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel Lord";
            } else if (lvpoints <= 20) {
                var role = "⚡Monster";
            } else if (lvpoints <= 22) {
                var role = "🎭Monster Prime";
            } else if (lvpoints <= 24) {
                var role = "🥇Monster lord";
            } else if (lvpoints <= 26) {
                var role = "🥈Hero";
            } else if (lvpoints <= 28) {
                var role = "🥉Elite Hero";
            } else if (lvpoints <= 30) {
                var role = "🎖Supreme Hero";
            } else if (lvpoints <= 32) {
                var role = "🏅King of Heroes";
            } else if (lvpoints <= 34) {
                var role = "🏆God of Heroes";
            } else if (lvpoints <= 36) {
                var role = "💍Devil";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Devil";
            } else if (lvpoints <= 40) {
                var role = "🔮Devil Lord";
            } else if (lvpoints <= 42) {
                var role = "🛡Demon";
            } else if (lvpoints <= 44) {
                var role = "🎍Supreme Demon";
            } else if (lvpoints <= 46) {
                var role = "⚔Demon King";
            } else if (lvpoints <= 55) {
                var role = "🐉Demon Lord";
		    } else if (lvpoints <= 100) {
                var role = "⚠️God of Multiverse";
            }
            let ttms = `${userq.xp}` / 99999;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤Username:* ${citel.pushName}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥 Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rank",
	react: "🎗️",
            desc: "Sends rank card of user.",
            category: "group",
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
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "New Born✨";
            if (lvpoints <= 2) {
                var role = "🏳Slime";
            } else if (lvpoints <= 4) {
                var role = "🧟Goblin";
            } else if (lvpoints <= 6) {
                var role = "👤Goblin Prime";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Goblin Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage Prime";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel Lord";
            } else if (lvpoints <= 20) {
                var role = "⚡Monster";
            } else if (lvpoints <= 22) {
                var role = "🎭Monster Prime";
            } else if (lvpoints <= 24) {
                var role = "🥇Monster lord";
            } else if (lvpoints <= 26) {
                var role = "🥈Hero";
            } else if (lvpoints <= 28) {
                var role = "🥉Elite Hero";
            } else if (lvpoints <= 30) {
                var role = "🎖Supreme Hero";
            } else if (lvpoints <= 32) {
                var role = "🏅King of Heroes";
            } else if (lvpoints <= 34) {
                var role = "🏆God of Heroes";
            } else if (lvpoints <= 36) {
                var role = "💍Devil";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Devil";
            } else if (lvpoints <= 40) {
                var role = "🔮Devil Lord";
            } else if (lvpoints <= 42) {
                var role = "🛡Demon";
            } else if (lvpoints <= 44) {
                var role = "🎍Supreme Demon";
            } else if (lvpoints <= 46) {
                var role = "⚔Demon King";
            } else if (lvpoints <= 55) {
                var role = "🐉Demon Lord";
		    } else if (lvpoints <= 100) {
                var role = "⚠️God of Multiverse";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 99999;
            textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaderboard",
	react: "🏆",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
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
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
  *-----☣️ LEADERBOARD ☣️-----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "New Born✨";
                if (lvpoints <= 2) {
                var role = "🏳Slime";
            } else if (lvpoints <= 4) {
                var role = "🧟Goblin";
            } else if (lvpoints <= 6) {
                var role = "👤Goblin Prime";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Goblin Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage Prime";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel Lord";
            } else if (lvpoints <= 20) {
                var role = "⚡Monster";
            } else if (lvpoints <= 22) {
                var role = "🎭Monster Prime";
            } else if (lvpoints <= 24) {
                var role = "🥇Monster lord";
            } else if (lvpoints <= 26) {
                var role = "🥈Hero";
            } else if (lvpoints <= 28) {
                var role = "🥉Elite Hero";
            } else if (lvpoints <= 30) {
                var role = "🎖Supreme Hero";
            } else if (lvpoints <= 32) {
                var role = "🏅King of Heroes";
            } else if (lvpoints <= 34) {
                var role = "🏆God of Heroes";
            } else if (lvpoints <= 36) {
                var role = "💍Devil";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Devil";
            } else if (lvpoints <= 40) {
                var role = "🔮Devil Lord";
            } else if (lvpoints <= 42) {
                var role = "🛡Demon";
            } else if (lvpoints <= 44) {
                var role = "🎍Supreme Demon";
            } else if (lvpoints <= 46) {
                var role = "⚔Demon King";
            } else if (lvpoints <= 55) {
                var role = "🐉Demon Lord";
		} else if (lvpoints <= 100) {
                var role = "⚠️God of Multiverse"; 	
            }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 99999
                leadtext += `*${i + 1}👤Name*: ${data.name}\n*🎐Level*: ${fetchlb[i].level}\n*⚜️Points*: ${fetchlb[i].xp}\n*📍Role*: ${role}\n*🔖Total messages*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "promote",
react: "🏅",

            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "kick",
react: "👟",

            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
    pattern: "memegen",
    react: "🧤",
    desc: "Write text on quoted image.",
    category: "group",
    filename: __filename,
    use: '<text>',
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
    let mime = citel.quoted ? citel.quoted.mtype : ''
    if (!citel.quoted || !/image/.test(mime)) {
        return citel.reply("Reply to Photo With Caption *text*")
    }
    mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
    mem = await TelegraPh(mee)
    meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
    let buttonMessage = {
        image: meme,
        caption: "Here we go",
        footer: tlang().footer,
        headerType: 4,
    };
    Void.sendMessage(citel.chat, buttonMessage, {
        quoted: citel,
    });
    await fs.unlinkSync(mee)
});

    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
react: "✔️",

            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
            if (text.split(" ")[0] === "close") {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => reply(`Group Chat Muted :)`))
                    .catch((err) => console.log(err));
            } else if (text.split(" ")[0] === "open") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => reply(`Group Chat Unmuted :)`))
                    .catch((err) => console.log(err));
            } else {

                return citel.reply(`Group Mode:\n${prefix}group open- to open\n${prefix}group close- to close`);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "grouppic",
react: "✔️",

            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "hidetag",
react: "🆗",

            alias: ["htag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply(tlang().admin);

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "add",
react: "✔️",

            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("Please provide me number.");
            if (!isCreator) return citel.reply(tlang().owner)
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",

react: "🆔",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "demote",
react: "🕯️",

        desc: "Demotes replied/quoted user from group",
        category: "group",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

        if (!isAdmins) return citel.reply(tlang().admin);
        if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        try {
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return;
            await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        } catch {
            //		citel.reply(tlang().botAdmin);

        }
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "del",
react: "🆗",

            alias: ["delete"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
                if (!isBotAdmins) return citel.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!citel.quoted) return citel.reply(`Please reply to any message. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "checkwarn",
react: "⚠️",

            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('This command is only for Group.')
            if (!citel.quoted) return citel.reply('Quote a user master.')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰Time:-* ${h[i].date}\n`
                teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
                teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "block",
react: "✔️",

            desc: "blocks that person",
            fromMe: true,
            category: "owner",
            filename: __filename,
            use: '<quote/reply user.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!citel.quoted) return citel.reply("Please reply to user");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "block")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));

        }
    )
    //---------------------------------------------------------------------------

  cmd({
    pattern: "broadcast",
    alias: ["bc"],
    desc: "Bot makes a broadcast in all groups",
    fromMe: true,
    category: "group",
    filename: __filename,
    use: '<text for broadcast.>',
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    let getGroups = await Void.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let anu = groups.map((v) => v.id);
    citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
        anu.length * 1.5
    } second`);
    for (let i of anu) {
        await sleep(1500);
        let txt = `--❗${tlang().title} Broadcast❗--\n\n 🍀Author: ${citel.pushName}\n\n${text}`;
        let buttonMessaged = {
            video: {
                url: "https://graph.org/file/9b56e94de9d4f55aa6d50.mp4",
            },
            caption: txt,
            footer: citel.pushName,
            headerType: 1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                externalAdReply: {
                    title: 'Broadcast by ' + citel.pushName,
                    body: tlang().title,
                    thumbnail: '',
                    mediaUrl: '',
                    mediaType: 3,
                    sourceUrl: gurl,
                    showAdAttribution: true,
                },
            },
        };
        await Void.sendMessage(i, buttonMessaged, { quoted: citel });
    }
    citel.reply(`Successful Sending Broadcast To ${anu.length} Group(s)`);
});

//---------------------------------------------------------------------------
if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
                var role = "🏳Slime";
            } else if (lvpoints <= 4) {
                var role = "🧟Goblin";
            } else if (lvpoints <= 6) {
                var role = "👤Goblin Prime";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️Goblin Lord";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻Mage";
            } else if (lvpoints <= 12) {
                var role = "🧜Mage Prime";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "🌬Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "❄Nobel";
            } else if (lvpoints <= 20) {
                var role = "⚡Monster";
            } else if (lvpoints <= 22) {
                var role = "🎭Monster Prime";
            } else if (lvpoints <= 24) {
                var role = "🥇Monster lord";
            } else if (lvpoints <= 26) {
                var role = "🥈Hero";
            } else if (lvpoints <= 28) {
                var role = "🥉Elite Hero";
            } else if (lvpoints <= 30) {
                var role = "🎖Supreme Hero";
            } else if (lvpoints <= 32) {
                var role = "🏅King of Heroes";
            } else if (lvpoints <= 34) {
                var role = "🏆God of Heroes";
            } else if (lvpoints <= 36) {
                var role = "💍Devil";
            } else if (lvpoints <= 38) {
                var role = "💎Supreme Devil";
            } else if (lvpoints <= 40) {
                var role = "🔮Devil Lord";
            } else if (lvpoints <= 42) {
                var role = "🛡Demon";
            } else if (lvpoints <= 44) {
                var role = "🎍Supreme Demon";
            } else if (lvpoints <= 46) {
                var role = "⚔Demon King";
            } else if (lvpoints <= 55) {
                var role = "🐉Demon Lord";
		} else if (lvpoints <= 100) {
                var role = "⚠️God of Multiverse";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `

 *Ayo,Someone just*
 *leveled Up huh⭐*
 *👤Name*: ${citel.pushName}
 *🎐Level*: ${sck1.level}🍭
 *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
 *📍Role*: *${role}*
 *Congrats 🎊*

`,
            }, {
                quoted: citel,
            });
        }
    }

})
}
