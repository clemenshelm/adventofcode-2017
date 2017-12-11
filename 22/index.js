const fewestSteps = require('./fewestSteps.js');
const [,, input,] = process.argv;

const steps = input.split(',');
const distances = steps.map((step, index) => fewestSteps(steps.slice(0, index + 1)).length);

console.log(Math.max(...distances));
