module.exports = (passphrase) => {
  const words = passphrase.split(' ');
  const sortedWords = words.map(w => w.split('').sort().join(''))
  const wordsSet = new Set(sortedWords);
  return words.length === wordsSet.size;
}
