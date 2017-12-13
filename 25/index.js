const catchPacket = require('./catchPacket.js');
const [,, input,] = process.argv;

const layerConfig = input.split('\n')
  .map(line => line.match(/^(\d+): (\d+)$/))
  .reduce((obj, [, depth, range]) => ({ ...obj, [depth]: parseInt(range, 10) }), {});

const catchingLayers = catchPacket(layerConfig);
const severity = catchingLayers.reduce((sum, depth) => sum + depth * layerConfig[`${depth}`]);
console.log(severity);
