const adjacentSum = require('./adjacentSum.js');
const [,, input,] = process.argv;

const firstSumLargerThan = (lowerBound) => {
  for(let i = 1; true; i++) {
    const sum = adjacentSum(i);
    if (sum > lowerBound) {
      return sum;
    }
  }
}

console.log(firstSumLargerThan(input));
