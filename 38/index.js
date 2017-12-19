const countPathSteps = require('./countPathSteps.js');
const [,, input,] = process.argv;

const path = input.split('\n').map(line => line.split(''));

console.log(countPathSteps(path));
