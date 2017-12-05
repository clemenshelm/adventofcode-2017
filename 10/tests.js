const assert = require('assert');
const jump = require('./jump.js');

describe('jumping in the instruction', () => {
  it('does not move for 0', () => {
    const { index, offsets } = jump({ offsets: [0, 3, 0, 1, -3], index: 0 });
    assert.equal(index, 0);
    assert.deepEqual(offsets, [1, 3, 0, 1, -3]);
  });

  it('moves one step for 1', () => {
    const { index, offsets } = jump({ offsets: [1, 3, 0, 1, -3], index: 0 });
    assert.equal(index, 1);
    assert.deepEqual(offsets, [2, 3, 0, 1, -3]);
  });

  it('decreases the offset for 3', () => {
    const { index, offsets } = jump({ offsets: [2, 3, 0, 1, -3], index: 1 });
    assert.equal(index, 4);
    assert.deepEqual(offsets, [2, 2, 0, 1, -3]);
  });
});
