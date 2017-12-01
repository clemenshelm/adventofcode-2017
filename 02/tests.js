const assert = require('assert');
const sumOfEqualHalfwayThroughDigits = require('./sumOfEqualHalfwayThroughDigits.js');

describe('sumOfEqualHalfwayThroughDigits', () => {
  it('calculates the sum for all matching digits', () => {
    const sum = sumOfEqualHalfwayThroughDigits(1212);
    assert.equal(sum, 6);
  });

  it('calculates the sum for no matching digits', () => {
    const sum = sumOfEqualHalfwayThroughDigits(1221);
    assert.equal(sum, 0);
  });

  it('calculates the sum for one matching digit', () => {
    const sum = sumOfEqualHalfwayThroughDigits(123425);
    assert.equal(sum, 4);
  });

  it('calculates the sum for 123123', () => {
    const sum = sumOfEqualHalfwayThroughDigits(123123);
    assert.equal(sum, 12);
  });

  it('calculates the sum for 12131415', () => {
    const sum = sumOfEqualHalfwayThroughDigits(12131415);
    assert.equal(sum, 4);
  });
});
