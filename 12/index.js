const reallocate = require('./reallocate.js');
const [,, input,] = process.argv;

const bank = input.split(/\s/).map(num => parseInt(num, 10));

function circleSize(bank) {
  const previousSnapshots = [];
  let currentBank = bank;
  for (let steps = 1; true; steps++) {
    previousSnapshots.push(currentBank.join(''));
    currentBank = reallocate(currentBank);
    const previousIndex =  previousSnapshots.indexOf(currentBank.join(''));
    if (previousIndex !== -1) {
      return steps - previousIndex;
    }
  }
}

console.log(circleSize(bank));
