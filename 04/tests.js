const assert = require('assert');
const matrixChecksum = require('./matrixChecksum.js');

describe('checksum', () => {
  it('calculates the whole quotient of row 5 9 2 8', () => {
    const matrix = [[5, 9, 2, 8]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 4);
  });

  it('calculates the whole quotient of row 9 4 7 3', () => {
    const matrix = [[9, 4, 7, 3]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 3);
  });

  it('calculates the sum of two rows', () => {
    const matrix = [[9, 4, 7, 3], [3, 8, 6, 5]];
    const checksum = matrixChecksum(matrix);
    assert.equal(checksum, 5);
  });
});
