const assert = require('assert');
const dance = require('./dance.js');

describe('dancing', () => {
  it('spins once for move s1', () => {
    const result = dance(['a', 'b', 'c', 'd'], 's1');
    assert.deepEqual(result, ['d', 'a', 'b', 'c']);
  });

  it('spins twice for move s2', () => {
    const result = dance(['a', 'b', 'c'], 's2');
    assert.deepEqual(result, ['b', 'c', 'a']);
  });

  it('exchanges positions 1 and 3 for move x1/3', () => {
    const result = dance(['a', 'b', 'c', 'd'], 'x1/3');
    assert.deepEqual(result, ['a', 'd', 'c', 'b']);
  });

  it('exchanges positions 10 and 11 for move x10/11', () => {
    const result = dance(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 'x10/11');
    assert.deepEqual(result, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'k']);
  });

  it('exchanges programs c and e for move pc/e', () => {
    const result = dance(['d', 'e', 'f', 'c'], 'pc/e');
    assert.deepEqual(result, ['d', 'c', 'f', 'e']);
  });
});
