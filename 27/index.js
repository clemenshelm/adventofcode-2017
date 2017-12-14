const countHashBits = require('./countHashBits.js');
const [,, input,] = process.argv;

const rowKeys = new Array(128).fill(0).map((zero, index) => `${input}-${index}`);

const usedNumber = rowKeys.reduce((sum, key) => sum + countHashBits(key), 0);
console.log(usedNumber);
