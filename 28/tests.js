const assert = require('assert');
const countHashBits = require('./countHashBits.js');
const countRegions = require('./countRegions.js');
const denseBinaryHash = require('./denseBinaryHash.js');

describe('counting 1 bits of a hash', () => {
  it('counts the 1 bits of hash flqrgnkx-0', () => {
    const numHashBits = countHashBits('flqrgnkx-0');
    assert.equal(numHashBits, 74);
  });

  it('counts the 1 bits of hash flqrgnkx-1', () => {
    const numHashBits = countHashBits('flqrgnkx-1');
    assert.equal(numHashBits, 72);
  });
});

describe('generating a dense binary hash', () => {
  it('generates a binary string with leading zeros', () => {
    const binaryHash = denseBinaryHash('flqrgnkx-1');
    assert.equal(binaryHash.length, 128);
    assert.equal(binaryHash.charAt(0), '0');
  })
})

describe('counting regions of ones', () => {
  it('identifies 2 regions', () => {
    const matrix = [
      [1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1],
    ];

    assert.equal(countRegions(matrix), 2);
  });

  it('identifies 4 regions', () => {
    const matrix = [
      [0, 1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 1],
    ];

    assert.equal(countRegions(matrix), 4);
  });
});
