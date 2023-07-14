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
    return await citel.reply("*⚠️ This bot does not accept commands in personal messages. Please use it in a group chat.*");
  }
});
