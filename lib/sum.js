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
  

"Happiness is a journey, not a destination.",
"The key to happiness is finding your passion.",
"Choose happiness every day, no matter the circumstances.",
"Happiness comes from within; it's a state of mind.",
"Don't wait for happiness to come to you; create it.",
"The happiest people don't have the best of everything; they make the best of everything.",
"Happiness is not something ready-made. It comes from your own actions.",
"Success is not the key to happiness; happiness is the key to success.",
"Find joy in the ordinary.",
"Happiness is a choice, not a result.",
"Count your blessings, not your problems.",
"Happiness is the highest form of success.",
"Smile, and the world smiles with you.",
"Happiness is not in the pursuit of more, but in the appreciation of what you have.",
"The purpose of our lives is to be happy.",
"Happiness is not having what you want but wanting what you have.",
"The secret of being happy is accepting where you are in life and making the most out of everyday.",
"The best way to cheer yourself up is to try to cheer somebody else up.",
"Happiness is found in the moments you stop to appreciate.",
"Your happiness is in your own hands.",
"Happiness is not determined by what's happening around you but rather what's happening within you.",
"The pursuit of happiness is the source of all unhappiness.",
"Gratitude is the key to a happy life.",
"Happiness is a state of mind; it's just according to the way you look at things.",
"Be so happy that when others look at you, they become happy too.",
"The greatest happiness you can have is knowing that you do not necessarily require happiness.",
"Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is.",
"Find joy in the little things.",
"Happiness is an inside job.",
"Choose to shine and let your happiness be your light.",
"Happiness is not based on external circumstances; it's an internal choice.",
"The more you praise and celebrate your life, the more there is in life to celebrate.",
"Happiness is not about getting all you want; it's about enjoying all you have.",
"Happiness is a byproduct of living with purpose.",
"Your time is limited, don't waste it being unhappy.",
"The pursuit of happiness begins and ends with gratitude.",
"True happiness is not found in material possessions but in the warmth of human connections.",
"Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
"Happiness is not the absence of problems but the ability to deal with them.",
"Happiness is a state of being, not a destination.",
"Life is too short to be anything but happy.",
"The happiest people are those who have learned to embrace their imperfections.",
"Happiness is not something you postpone for the future; it's something you design for the present.",
"Be the reason someone smiles today.",
"The happiness of your life depends on the quality of your thoughts.",
"Happiness is a choice, and you can choose it every day.",
"The pursuit of happiness is the source of all happiness.",
"Happiness is not found in comparing yourself to others but in celebrating your uniqueness.",
"The secret to being happy is accepting where you are in life and making the most out of it.",
"Happiness is a state of mind, a choice, a way of living; it is not something to be achieved, it is something to be experienced.",


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

