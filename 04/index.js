const matrixChecksum = require('./matrixChecksum.js');
const [,, input,] = process.argv;

const matrix = input.split('\n').map(line => line.split(/\s/));

console.log(matrixChecksum(matrix));
