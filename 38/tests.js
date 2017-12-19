const assert = require('assert');
const countPathSteps = require('./countPathSteps.js');

describe('reading the letters on a path', () => {
  it('counts the steps of a straight path', () => {
    const path = [
      [' ', '|', ' '],
      [' ', 'C', ' '],
      [' ', '|', ' '],
      [' ', 'D', ' '],
      [' ', ' ', ' '],
    ];
    assert.equal(countPathSteps(path), 4);
  });

  it('follows the path around corners', () => {
    const path = [
      [' ', ' ', ' ', '|', ' ', ' ', ' '],
      [' ', '+', '-', '+', ' ', 'O', ' '],
      [' ', 'X', ' ', ' ', ' ', '|', ' '],
      [' ', '|', ' ', ' ', '+', '+', ' '],
      [' ', '+', '-', 'P', '+', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];
    assert.equal(countPathSteps(path), 14);
  });
});
