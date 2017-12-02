const assert = require('assert');
const matrixChecksum = require('./matrixChecksum.js');

describe('checksum', () => {
  it('calculates the difference between largest and smallest value of  the row 5 1 9 5', () => {
    const matrix = [[5, 1, 9, 5]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 8);
  });

  it('calculates the difference between largest and smallest value of  the row 7 5 3', () => {
    const matrix = [[7, 5, 3]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 4);
  });

  it('calculates the sum of differences across two rows', () => {
    const matrix = [[7, 5, 3], [2, 4, 6, 8]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 10);
  });
});
