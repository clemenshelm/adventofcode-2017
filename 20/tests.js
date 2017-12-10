const assert = require('assert');
const knotHash = require('./knotHash.js');

describe('knotting a hash', () => {
  it('reverses 2 elements at the beginning', () => {
    const knotted = knotHash({ list: [1, 2, 3, 4], position: 0, length: 2 } );
    assert.deepEqual(knotted, [2, 1, 3, 4]);
  });

  it('wraps the reverse window if the window exceeds the list length', () => {
    const knotted = knotHash({ list: [1, 2, 3, 4], position: 2, length: 3 } );
    assert.deepEqual(knotted, [3, 2, 1, 4]);
  });
})
