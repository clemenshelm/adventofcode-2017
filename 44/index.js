// CAUTION: Almost everything here will be mutated in a function for performance reasons.
const { infect, UP, INFECTED } = require('./infect.js');
const [,, input,] = process.argv;

const affectedNodes = {};
const lines = input.split('\n');
const totalY = lines.length;
lines.forEach((line, yIndex) => {
  const totalX = line.length;
  line.split('').forEach((c, xIndex) => {
    if (c === '#') {
      const x = xIndex - Math.floor(totalX / 2);
      const y = yIndex - Math.floor(totalY / 2);
      const id = `${x}|${y}`;
      affectedNodes[id] = { x, y, status: INFECTED };
    }
  })
});

let currentState = {
  affectedNodes,
  position: { x: 0, y: 0 },
  direction: UP,
};
let numInfections = 0;

for (let i = 0; i < 10000000; i++) {
  const { newStatus, ...result } = infect(currentState);
  if (newStatus === INFECTED) {
    numInfections++;
  }
  currentState = result;
}

console.log(numInfections);
