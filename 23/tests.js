const assert = require('assert');
const connectedNodes = require('./connectedNodes.js');

describe('finding a group of connected nodes for a node', () => {
  it('lists directly connected nodes', () => {
    const nodeMap = { 0: [2], 2: [0] };
    assert.deepEqual(connectedNodes(nodeMap, 0), [0, 2]);
  });

  it('lists indirectly connected nodes', () => {
    const nodeMap = { 0: [2], 2: [0, 3], 3: [2] };
    assert.deepEqual(connectedNodes(nodeMap, 0), [0, 2, 3]);
  });
})
