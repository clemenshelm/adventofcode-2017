const readPathLetters = require('./readPathLetters.js');
const [,, input,] = process.argv;

const path = input.split('\n').map(line => line.split(''));

console.log(readPathLetters(path).join(''));
