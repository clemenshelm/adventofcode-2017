const processor = require('./processor.js');
const [,, input,] = process.argv;

const instructions = input.split('\n');
const proc = processor(instructions);

let mulCount = 0;
for (const { lastCmd, sound } of proc) {
  if (lastCmd === 'mul') {
    mulCount++;
  }
}

console.log(mulCount);
