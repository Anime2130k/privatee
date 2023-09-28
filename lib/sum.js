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


 "Every tear has a purpose; embrace the healing they bring.",

 "Sadness may linger, but so does strength; find it within.",

 "In the storm of sorrow, you'll find your strength.",
  
 "Sadness is a passing cloud; let the sun of hope shine through.",

 "Tears cleanse the soul; let them nourish your growth.",

 "From sadness blooms resilience; let it fuel your comeback.",

 "Rainbows follow storms; let your sadness be the rain.",

 "Sadness may bend you, but it won't break you.",

 "When sadness whispers, let resilience roar.",

 "In the dance of life, sadness is just one step; keep dancing.",

 "Healing begins with acknowledging the pain, not denying it.",

 "Your scars tell a story of survival; wear them proudly.",

 "In the darkest moments, you discover your brightest light.",

 "Turn your tears into determination; let them water your dreams.",

 "Sadness is a canvas; paint it with the colors of hope.",

 "Let the pain of today be the strength of tomorrow.",

 "The sun sets to rise again; let your hope never fade.",

 "You're stronger than the sadness that tries to shatter you.",

 "Even in the rain, there's beauty; even in sadness, there's growth.",

 "Allow sadness to be a stepping stone toward happiness.",

 "Wounds heal, scars fade, and so does sadness.",

 "With each tear shed, you wash away a piece of pain.",

 "In the face of sadness, find the warrior within.",

 "Your heart may be heavy now, but it will learn to soar.",

 "Gather the pieces of your broken heart and build a masterpiece.",

 "Sorrow is temporary; your strength is enduring.",,

 "Sadness may knock you down, but determination will lift you up.",

 "Plant hope in the soil of your sorrow; watch it bloom.",

 "Cry, but let those tears water the seeds of your resilience.",

 "The darkest nights produce the brightest stars.",

 "Wipe away the tears and let your smile be your armor.",

 "Sadness teaches you compassion; use it to heal.",

 "From the ashes of sadness, rise like a phoenix.",

 "A storm of sadness can't extinguish the fire in your heart.",

 "Let your pain fuel your purpose; turn tears into triumph.",

 "Sadness is a storm, but you are the calm after it.",

 "Behind every cloud of sadness, the sun still shines.",

 "Suffering is a teacher; let it guide you to strength.",

 "Healing starts with self-love; embrace your scars.",

 "Sadness is a temporary visitor; joy is your home.",

 "In the depths of sorrow, find the heights of your strength.",

 "Your resilience is a shield; let sadness make it stronger.",

 "Climb out of the valley of sadness; conquer the peak of happiness.",

 "You're the author of your story; turn sadness into a plot twist.",

 "Like a phoenix, rise from the ashes of despair.",

 "Embrace the rain of sadness; it nourishes the seeds of hope.",

 "With each tear, let go of pain; with each smile, welcome joy.",

 "Sadness is a chapter, not the whole book of your life.",

 "In the face of sorrow, find the courage to rebuild.",

 "Your heart may be bruised, but it's still beating with strength.",
];

function sad() {
  const randomIndex = Math.floor(Math.random() * random_sad.length);
  const selectedsad = random_sad[randomIndex];
  return selectedsad;
}

const random_angry = [
  

"Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
"Don't let anger control you; control your anger and channel it into positive actions.",
"In the face of anger, choose peace. In the face of hate, choose love.",
"Anger is a fire that burns within, but only you have the power to extinguish it.",
"Stay calm and rise above the anger. You're stronger than you think.",
"Turn your anger into determination and watch how it fuels your success.",
"Your power lies in your ability to keep calm in the midst of chaos.",
"Don't let anger steal your joy. Choose happiness and let it prevail.",
"Rise above the storm, and you'll find the sunshine awaiting you.",
"Every challenge you face is an opportunity to grow stronger, even anger.",
"Holding onto anger is like drinking poison and expecting the other person to die.",
"Choose to be powerful, not angry. Channel your energy into positive change.",
"In the midst of anger, find the strength to forgive and let go.",
"Anger is a brief madness; choose clarity over chaos.",
"Respond with kindness even in the face of anger. Your kindness can change the world.",
"Don't let anger be your default. Choose peace, choose love, and choose happiness.",
"Your strength lies in how you handle the storms, not in avoiding them.",
 "Anger is an obstacle; perseverance is the way to conquer it.",
"Embrace the power of positivity and watch how anger loses its grip on you.",
"Your life is too precious to be spent on anger. Choose happiness instead.",
"Release the anger, hold onto the lessons. Grow stronger, not bitter.",
"In the darkest moments, find your light within. Let it guide you through the anger.",
"Rage can blind you; let love open your eyes to a brighter path.",
"Your journey is about growth, not grudges. Choose growth over anger.",
"Reacting in anger is giving away your power. Choose your responses wisely.",
"Anger is a storm that will pass. Hold on, and you'll see the clear skies ahead.",
"Stay patient and trust the journey, even when anger tries to derail you.",
"You have the strength to overcome any anger that comes your way.",
"Don't let anger consume your soul; let compassion and understanding prevail.",
"You are stronger than the anger that tries to weigh you down.",
"When angry, take a step back and breathe. Respond, don't react.",
"Choose love as your weapon against anger; it's the strongest one you have.",
"Let go of the past anger and embrace the present peace.",
 "Anger can't drive out anger; only love can do that.",
 "In the face of anger, be a beacon of calmness and understanding.",
"Hold on to hope even when anger tries to dim your light.",
"Anger may knock at your door, but you choose whether to let it in or keep it out.",
"You're too powerful to be ruled by anger. Rise above it.",
"Choose forgiveness over fury; it's a path to inner peace.",
"Your inner peace is too valuable to be disturbed by anger. Protect it.",
"Anger is temporary; the peace you choose is everlasting.",
 "Let your actions speak louder than your anger.",
"Choose grace over grudges; it's a higher road to walk on.",
"You're more than the anger you feel. Rise to the greatness within you.",
"In the face of anger, be the calm in the storm.",
"Anger weakens, forgiveness strengthens. Choose strength.",
"Use your anger as a catalyst for positive change, not destruction.",
"Don't let anger hold you hostage; break free and find peace.",
"Choose to be the change you wish to see in the world, even when anger tries to divert you.",
 "Believe in your ability to overcome anger and choose a life filled with love and joy.",
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

