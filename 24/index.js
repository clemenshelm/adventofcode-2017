const connectedNodes = require('./connectedNodes.js');
const [,, input,] = process.argv;

const nodeMap = input.split('\n')
  .map(line => line.match(/^(\d+) <-> (.+)$/))
  .map(([, key, values]) => [key, values.split(', ')])
  .reduce((obj, [key, values]) => ({ ...obj, [key]: values }), {});

const allNodes = Object.keys(nodeMap);
let visitedNodes = [];
let groupCount = 0;

while (allNodes.length > visitedNodes.length) {
  const unusedNode = allNodes.find(n => !visitedNodes.includes(n));
  const nodes = connectedNodes(nodeMap, unusedNode);
  groupCount++;
  visitedNodes = [...visitedNodes, ...nodes];
}

console.log(groupCount);
