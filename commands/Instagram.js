const { cmd } = require('../lib');

cmd({
  pattern: ".",
  alias: ".",
  desc: "Kiyumi👘 is active! Type *.help* to get my command list!",
  react: "❌",
  category: "owner",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
  if (citel.isGroup) {
    const { Insta } = require('../lib');
    let ter = `Mikasa is active! Type *.help* to get my command list!`;
    let buttonMessaged = {
        caption: ter,
    };
if (!text) return await Void.sendMessage(citel.chat, buttonMessaged, {
        quoted: citel,	  
    });
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
• wa.me/+917086726371

*📛Our official Support GC: https://chat.whatsapp.com/J66CTiDheI94vkxx6nIyp2*

*💗Have a nice day💗*

Kiyumi👘 Powered by:_ *©️TIKU_BOTS*`);
  }
});
