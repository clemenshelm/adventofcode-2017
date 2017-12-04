const isPassphraseValid = require('./isPassphraseValid.js');
const [,, input,] = process.argv;

const passphrases = input.split('\n');
const validPhrases = passphrases.filter(p => isPassphraseValid(p));

console.log(validPhrases.length);
