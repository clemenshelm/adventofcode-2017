const assert = require('assert');
const countHashBits = require('./countHashBits.js');

describe('counting 1 bits of a hash', () => {
  it('counts the 1 bits of hash flqrgnkx-0', () => {
    const numHashBits = countHashBits('flqrgnkx-0');
    assert.equal(numHashBits, 74);
  });

  it('counts the 1 bits of hash flqrgnkx-1', () => {
    const numHashBits = countHashBits('flqrgnkx-1');
    assert.equal(numHashBits, 72);
  });
})
