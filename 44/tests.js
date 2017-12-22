const assert = require('assert');
const { infect, UP, DOWN, LEFT, RIGHT, INFECTED, WEAKENED, FLAGGED, CLEAN } = require('./infect.js');

describe('infecting the grid', () => {
  it('weakens a clean node', () => {
    const infectedNodes = {
      '-1|0': { x: -1, y: 0, status: INFECTED },
      '1|-1': { x: 1, y: -1, status: INFECTED }
    };
    const result = infect({ affectedNodes: infectedNodes, position: { x: 0, y: 0 }, direction: UP });
    assert.deepEqual(result, {
      affectedNodes: {
        '-1|0': { x: -1, y: 0, status: INFECTED },
        '1|-1': { x: 1, y: -1, status: INFECTED },
        '0|0': { x: 0, y: 0, status: WEAKENED },
      },
      position: { x: -1, y: 0 },
      direction: LEFT,
      newStatus: WEAKENED,
    });
  });

  it('flags an infected node', () => {
    const affectedNodes = {
      '-1|0': { x: -1, y: 0, status: INFECTED },
      '1|-1': { x: 1, y: -1, status: INFECTED },
      '0|0': { x: 0, y: 0, status: WEAKENED },
    };
    const result = infect({ affectedNodes, position: { x: -1, y: 0 }, direction: LEFT });
    assert.deepEqual(result, {
      affectedNodes: {
        '-1|0': { x: -1, y: 0, status: FLAGGED },
        '1|-1': { x: 1, y: -1, status: INFECTED },
        '0|0': { x: 0, y: 0, status: WEAKENED },
      },
      position: { x: -1, y: -1 },
      direction: UP,
      newStatus: FLAGGED,
    });
  });

  it('infects a weakened node', () => {
    const affectedNodes = {
      '-1|0': { x: -1, y: 0, status: INFECTED },
      '1|-1': { x: 1, y: -1, status: WEAKENED }
    };
    const result = infect({ affectedNodes, position: { x: 1, y: -1 }, direction: RIGHT });
    assert.deepEqual(result, {
      affectedNodes: {
        '-1|0': { x: -1, y: 0, status: INFECTED },
        '1|-1': { x: 1, y: -1, status: INFECTED }
      },
      position: { x: 2, y: -1 },
      direction: RIGHT,
      newStatus: INFECTED,
    });
  });

  it('cleans a flagged node', () => {
    const affectedNodes = {
      '-1|0': { x: -1, y: 0, status: FLAGGED },
      '1|-1': { x: 1, y: -1, status: INFECTED },
    };
    const result = infect({ affectedNodes, position: { x: -1, y: 0 }, direction: UP });
    assert.deepEqual(result, {
      affectedNodes: { '1|-1': { x: 1, y: -1, status: INFECTED } },
      position: { x: -1, y: 1 },
      direction: DOWN,
      newStatus: CLEAN,
    });
  });
});
