
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
//---------------------------------------------------------------------------
const { cmd } = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
    pattern: "paste",
    react: "🌸",
    desc: "create paste of text.",
    category: "extra",
    filename: __filename,
},
async (Void, citel, text) => {
    if (citel.isGroup) {
        let a = citel.quoted ? citel.quoted.text : citel.text;
        let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Mikasa+Bot&author_name=Ronen-Bots&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
        return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`);
    } else {
        // Reply with a warning for PMs
        return await citel.reply("*⚠️ This bot does not accept commands in personal messages. Please use it in a group chat.*");
    }
});
