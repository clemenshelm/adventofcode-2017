const assert = require('assert');
const reallocate = require('./reallocate.js');

describe('reallocating memory', () => {
  it('distributes 7 blocks', () => {
    const reallocated = reallocate([0, 2, 7, 0]);
    assert.deepEqual(reallocated, [2, 4, 1, 2]);
  });

  it('distributes 4 blocks', () => {
    const reallocated = reallocate([2, 4, 1, 2]);
    assert.deepEqual(reallocated, [3, 1, 2, 3]);
  });

  it('uses the first block if there is a tie', () => {
    const reallocated = reallocate([3, 1, 2, 3]);
    assert.deepEqual(reallocated, [0, 2, 3, 4]);
  })
});
