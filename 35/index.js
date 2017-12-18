const processor = require('./processor.js');
const [,, input,] = process.argv;

const instructions = input.split('\n');
const proc = processor(instructions);

const firstRestoredSound = () => {
  for (const { lastCmd, sound } of proc) {
    if (lastCmd === 'rcv') {
      return sound;
    }
  }
};

console.log(firstRestoredSound());
