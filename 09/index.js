const jump = require('./jump.js');
const [,, input,] = process.argv;

const offsets = input.split('\n').map(num => parseInt(num, 10));

const numJumps = ({ offsets, index }) => {
  let mutOffsets = offsets;
  let mutIndex = index;
  let num;
  for (num = 0; true; num++) {
    if (mutIndex < 0 || mutIndex >= offsets.length) {
      return num;
    }

    const jumpResult = jump({ offsets: mutOffsets, index: mutIndex });
    mutOffsets = jumpResult.offsets;
    mutIndex = jumpResult.index;
  }
}

console.log(numJumps({ offsets, index: 0 }));
