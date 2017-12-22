const { infect, UP } = require('./infect.js');
const [,, input,] = process.argv;

const infectedNodes = [];
const lines = input.split('\n');
const totalY = lines.length;
lines.forEach((line, yIndex) => {
  const totalX = line.length;
  line.split('').forEach((c, xIndex) => {
    if (c === '#') {
      const x = xIndex - Math.floor(totalX / 2);
      const y = yIndex - Math.floor(totalY / 2);
      infectedNodes.push({ x, y });
    }
  })
});

let currentState = {
  infectedNodes,
  position: { x: 0, y: 0 },
  direction: UP,
};
let numInfections = 0;

for (let i = 0; i < 10000; i++) {
  const result = infect(currentState);
  if (result.infectedNodes.length > currentState.infectedNodes.length) {
    numInfections++;
  }
  currentState = result;
}

console.log(numInfections);
