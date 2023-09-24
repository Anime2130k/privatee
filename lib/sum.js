const random_percent = [
  "
];

function percent() {
  const randomIndex = Math.floor(Math.random() * random_percent.length);
  const selectedPercent = random_percent[randomIndex];
  return selectedPercent;
}

module.exports = {
  percent
};
