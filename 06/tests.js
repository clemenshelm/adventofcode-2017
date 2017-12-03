const assert = require('assert');
const adjacentSum = require('./adjacentSum.js');

describe('adjacent sum', () => {
  it('calculates the adjacent sum for 1', () => {
    const sum = adjacentSum(1);
    assert.equal(sum, 1);
  });

  it('calculates the adjacent sum for 2', () => {
    const sum = adjacentSum(2);
    assert.equal(sum, 1);
  });

  it('calculates the adjacent sum for 3', () => {
    const sum = adjacentSum(3);
    assert.equal(sum, 2);
  });

  it('calculates the adjacent sum for 4', () => {
    const sum = adjacentSum(4);
    assert.equal(sum, 4);
  });

  it('calculates the adjacent sum for 8', () => {
    const sum = adjacentSum(8);
    assert.equal(sum, 23);
  });

  it('calculates the adjacent sum for 9', () => {
    const sum = adjacentSum(9);
    assert.equal(sum, 25);
  });

  it('calculates the adjacent sum for 10', () => {
    const sum = adjacentSum(10);
    assert.equal(sum, 26);
  });

  it('calculates the adjacent sum for 11', () => {
    const sum = adjacentSum(11);
    assert.equal(sum, 54);
  });

  it('calculates the adjacent sum for 12', () => {
    const sum = adjacentSum(12);
    assert.equal(sum, 57);
  });

  it('calculates the adjacent sum for 24', () => {
    const sum = adjacentSum(24);
    assert.equal(sum, 806 + 23 + 25 + 26);
  });
});
