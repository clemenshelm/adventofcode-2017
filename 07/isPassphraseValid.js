module.exports = (passphrase) => {
  const words = passphrase.split(' ');
  const wordsSet = new Set(words);
  return words.length === wordsSet.size;
}
