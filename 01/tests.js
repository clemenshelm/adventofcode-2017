const assert = require('assert');
const { sumOfSubsequentDigits } = require('./index.js');

describe('sumOfSubsequentDigits', () => {
  it('calculates the sum for two subsequent digits', () => {
    const sum = sumOfSubsequentDigits(1122);
    assert.equal(sum, 3);
  });

  it('calculates the sum for for equal digits', () => {
    const sum = sumOfSubsequentDigits(1111);
    assert.equal(sum, 4);
  });

  it('calculates the sum for no subsequent digits', () => {
    const sum = sumOfSubsequentDigits(1234);
    assert.equal(sum, 0);
  });

  it('calculates the sum for only one subsequent digits', () => {
    const sum = sumOfSubsequentDigits(91212129);
    assert.equal(sum, 9);
  });
});
