const dance = require('./dance.js');
const [,, input,] = process.argv;

const programs = 'abcdefghijklmnop'.split('');
const moves = input.split(',');

const finalOrder = moves.reduce(dance, programs);

console.log(finalOrder.join(''));
