const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://whatyo435:bc31443f@cluster0.mo4uyuc.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = ''
global.github = 'https://github.com/Ronen6999'
global.location = 'INDIA'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '994402261750';
global.devs = '916000530073','994402261750';
global.website = 'wa.me/994402261750' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://wallpaperaccess.com/full/1309130.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Mikasa💗' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Ronen🎐' : process.env.OWNER_NAME,
  sessionName:  proefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'Mikasa;Ronen-Bots' : process.env.PACK_INFO.split(";")[' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.envm_PM,
  levelupmessage:  process.e_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Konichiwa! I am Mikasa💗 a WhatsApp Bot created by *©️RONEN-BOTS*' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO e : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
