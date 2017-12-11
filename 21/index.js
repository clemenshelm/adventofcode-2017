const fewestSteps = require('./fewestSteps.js');
const [,, input,] = process.argv;

const steps = input.split(',');

console.log(fewestSteps(steps).length);
