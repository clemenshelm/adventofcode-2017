const { garbageScore } = require('./streamScores.js');
const [,, input,] = process.argv;

console.log(garbageScore(input));
