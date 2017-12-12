const connectedNodes = require('./connectedNodes.js');
const [,, input,] = process.argv;

const nodeMap = input.split('\n')
  .map(line => line.match(/^(\d+) <-> (.+)$/))
  .map(([, key, values]) => [key, values.split(', ')])
  .reduce((obj, [key, values]) => ({ ...obj, [key]: values }), {});

console.log(connectedNodes(nodeMap, 0).length);
