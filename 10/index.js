const jump = require('./jump.js');
const [,, input,] = process.argv;

const offsets = input.split('\n').map(num => parseInt(num, 10));

const numJumps = ({ offsets, index }) => {
  let mutIndex = index;
  let num;
  for (num = 0; true; num++) {
    if (mutIndex < 0 || mutIndex >= offsets.length) {
      return num;
    }

    // offsets will be mutated in jump function deliberately
    // for performance reasons
    const jumpResult = jump({ offsets, index: mutIndex });
    mutIndex = jumpResult.index;
  }
}

console.log(numJumps({ offsets, index: 0 }));
