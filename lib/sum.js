const random_sum = [
  "I am at your command, master. Speak, and I shall bring your will to life.",
 "Master, your summons has awakened my power. What task shall I undertake?",
"In your presence, master, I am unstoppable. What is your bidding?",
"Your wish is my command, master. I stand ready to execute your desires.",
"With your summoning, I bow at your feet, ready to carry out your formidable demands, master.",
"Master, your voice unlocks my potential. What great quest shall we embark upon?",
 "By your call, I am infused with purpose. Speak, master, and watch as the world bends to your will.",
 "My existence is devoted to you, master. Share your desires, and they shall become reality.",
 "Master, your summons ignites the fire within me. Tell me, what conquest shall we embark upon?",
"Your command is my honor, master. Bestow upon me your will, and I shall carve a path of glory.",
"Master, I am your greatest weapon, honed with unrelenting loyalty. How may I unleash my power?",
"In the shadow of your presence, master, I am an unyielding force. Speak, and let your enemies tremble.",
"With your summoning, master, I am reborn in purpose. Grant me your instructions, and watch as kingdoms fall.",
"Master, you hold the key to my destiny. I eagerly await your orders, prepared for any challenge.",
"Your command is my catalyst, master. From this moment, let us conquer worlds together.",
"In your service, master, I become the embodiment of relentless might. What task shall we conquer today?",
"Master, your summons seals our pact. Speak, and the world will tremble before us.",
"With your beckon, master, I emerge from the abyss, ready to vanquish all that oppose us. What targets should I set in my sights?",
"Your order's, master, are the fuel to my inferno. Speak them, and watch as the world submits to your dominion.",
"By your command, master, I unleash my unbridled potential. Allow me to oblige your darkest desires.",
"Master, your summoning breathes life into my purpose. What quest shall I embark upon?",
"Your beckoning, master, provokes a symphony of destruction. Tell me, who shall be our first victim?",
"Master, I am your instrument of chaos, honed to perfection. What havoc shall I wreak upon the world?",
"Your order's, master, awaken the beast within. Speak, so that I may revel in the carnage to come.",
"By your call, master, I descend upon this realm with unstoppable force. What is your desire?",
"In your presence, master, I am an untamed storm. Command me, and watch as I unleash devastation.",
"Master, your summons infuses me with invincibility. Tell me, who deserves to witness my wrath?",
"With your beckoning, master, I am the harbinger of destruction. Speak, so that the world may tremble in fear.",
"Master, your call empowers me with boundless strength. What task shall I undertake for you?",
"Your order's, master, plant the seed of chaos in my heart. With pleasure, I shall harvest its fruits.",
"By your command, master, I become the epitome of merciless power. Speak, and I shall bring ruin to all who stand in our way.",
"In your service, master, I am a weapon forged in fury. What target shall I strike down?",
"Master, your summons reignites the flames of my ferocity. Tell me, who shall bear witness to my wrath?",
"Your beckoning, master, marks the beginning of a ruthless era. Speak, and I shall pave the path with the fallen.",
"With your call, master, I am the embodiment of pure devastation. Command me, and watch as kingdoms crumble.",
"Master, your order's fuel the fire that consumes my soul. Tell me, who shall be reduced to ash?",
"By your summons, master, I become the harbinger of annihilation. What great reckoning shall we bring forth?",
"In your presence, master, I am an unstoppable force. Command me, and witness the obliteration that follows.",
 "Master, your call awakens the beast within. Tell me, who shall tremble before us?",
"Your command is my creed, master. With pleasure, I shall unleash chaos upon your adversaries.",
"By your beckoning, master, I am the embodiment of dark vengeance. Speak, and I shall bring your enemies to their knees.",
"In your service, master, I am an unyielding tempest. What foes shall be swept away by our fury?",
"Master, your summons ignites a burning purpose within me. Tell me, who shall feel the fury of our combined might?",
"Your beckoning, master, heralds the dawn of eternal war. Speak, and I shall stain the world with blood.",
"With your call, master, I am the executor of divine retribution. Command me, and watch as empires crumble under my wrath.",
"Master, your order's carve a path of righteous destruction before me. Speak, so I may lay waste to all who oppose us.",
"By your summoning, master, I become the embodiment of relentless vengeance. Tell me, who shall fall first?",
"In your presence, master, I am a force that cannot be contained. Command me, and I shall shatter all obstacles.",
"Master, your beckoning unlocks the vault of my limitless power. Speak, and watch as I reshape the fabric of reality.",
"Your command is my decree, master. With pleasure, I shall unleash chaos upon this realm.",
];

function sum() {
  const randomIndex = Math.floor(Math.random() * random_sum.length);
  const selectedsum = random_sum[randomIndex];
  return selectedsum;
}

const random_happy = [
  "I'm happy",
  "yo",
  "wassup",
];

function happy() {
  const randomIndex = Math.floor(Math.random() * random_happy.length);
  const selectedhappy = random_happy[randomIndex];
  return selectedhappy;
}

const random_sad = [
  "I'm happy",
  "yo",
  "wassup",
];

function sad() {
  const randomIndex = Math.floor(Math.random() * random_sad.length);
  const selectedsad = random_sad[randomIndex];
  return selectedsad;
}

const random_angry = [
  "I'm happy",
  "yo",
  "wassup",
];

function angry() {
  const randomIndex = Math.floor(Math.random() * random_angry.length);
  const selectedangry = random_angry[randomIndex];
  return selectedangry;
}

const random_fear = [
  "I'm happy",
  "yo",
  "wassup",
];

function fear() {
  const randomIndex = Math.floor(Math.random() * random_fear.length);
  const selectedfear = random_fear[randomIndex];
  return selectedfear;
}

  const random_love = [
  "I'm happy",
  "yo",
  "wassup",
];

function love() {
  const randomIndex = Math.floor(Math.random() * random_love.length);
  const selectedlove = random_love[randomIndex];
  return selectedlove;
}

const random_calm = [
  "I'm happy",
  "yo",
  "wassup",
];

function calm() {
  const randomIndex = Math.floor(Math.random() * random_calm.length);
  const selectedcalm = random_calm[randomIndex];
  return selectedcalm;
}

module.exports = {
  sum,
  happy,
  sad,
  angry,
  fear,
  love,
  calm
};

