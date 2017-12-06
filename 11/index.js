const reallocate = require('./reallocate.js');
const [,, input,] = process.argv;

const bank = input.split(/\s/).map(num => parseInt(num, 10));

function numberOfReallocationsToCircle(bank) {
  const previousSnapshots = new Set();
  let currentBank = bank;
  for (let steps = 1; true; steps++) {
    previousSnapshots.add(currentBank.join(''));
    currentBank = reallocate(currentBank);
    if (previousSnapshots.has(currentBank.join(''))) {
      return steps;
    }
  }
}

console.log(numberOfReallocationsToCircle(bank));
