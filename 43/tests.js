const assert = require('assert');
const { infect, UP, DOWN, LEFT, RIGHT } = require('./infect.js');

describe('infecting the grid', () => {
  it('infects the center node', () => {
    const infectedNodes = [{ x: -1, y: 0 }, { x: 1, y: -1 }];
    const result = infect({ infectedNodes, position: { x: 0, y: 0 }, direction: UP });
    assert.deepEqual(result, {
      infectedNodes: [...infectedNodes, { x: 0, y: 0 }],
      position: { x: -1, y: 0 },
      direction: LEFT,
    });
  });

  it('disinfects the node left to the center', () => {
    const infectedNodes = [{ x: -1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 0 }];
    const result = infect({ infectedNodes, position: { x: -1, y: 0 }, direction: LEFT });
    assert.deepEqual(result, {
      infectedNodes: [{ x: 1, y: -1 }, { x: 0, y: 0 }],
      position: { x: -1, y: -1 },
      direction: UP,
    });
  });
});
