const { cmd } = require('../lib');

cmd({
  pattern: ".",
  alias: ".",
  desc: "Mikasa is active! Type *.help* to get my command list!",
  react: "❌",
  category: "owner",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
  if (citel.isGroup) {
    const { Insta } = require('../lib');
    if (!text) return citel.reply('Mikasa is active! Type *.help* to get my command list!');
    let response = 'Mikasa is active! Type *.help* to get my command list!';
    for (let i = 0; i < response.length; i++) {
      await Void.sendFileUrl(citel.chat, response[i], `*Mikasa is active! Type *.help* to get my command list!*`, citel);
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
