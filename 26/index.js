const catchPacket = require('./catchPacket.js');
const [,, input,] = process.argv;

const layerConfig = input.split('\n')
  .map(line => line.match(/^(\d+): (\d+)$/))
  .reduce((obj, [, depth, range]) => ({ ...obj, [depth]: parseInt(range, 10) }), {});

let delay = 0;
for (; catchPacket(layerConfig, delay).length !== 0; delay++) {}

console.log(delay);
