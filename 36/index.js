const processor = require('./processor.js');
const [,, input,] = process.argv;

const instructions = input.split('\n');
const queue0 = [];
const queue1 = [];
const queues = [queue0, queue1];
const proc0 = processor(instructions, 0, queues);
const proc1 = processor(instructions, 1, queues);

let currentSendCount = 0;
for (const { lastCmd, sendCount } of proc1) {
  const { lastCmd: lastCmd0 } = proc0.next().value;

  currentSendCount = sendCount;

  if (lastCmd === 'rcv' && queue1.length === 0 && lastCmd0 === 'rcv' && queue0.length === 0) {
    break;
  }
};

console.log(currentSendCount);
