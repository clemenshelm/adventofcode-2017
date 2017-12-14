const denseBinaryHash = require('./denseBinaryHash.js');
const countRegions = require('./countRegions.js');
const [,, input,] = process.argv;

const binaryHashMatrix = new Array(128).fill(0)
  .map((zero, index) => denseBinaryHash(`${input}-${index}`).split('').map(d => parseInt(d, 10)));

console.log(countRegions(binaryHashMatrix));
