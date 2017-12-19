const assert = require('assert');
const readPathLetters = require('./readPathLetters.js');

describe('reading the letters on a path', () => {
  it('reads a straight path', () => {
    const path = [
      [' ', '|', ' '],
      [' ', 'C', ' '],
      [' ', '|', ' '],
      [' ', 'D', ' '],
      [' ', ' ', ' '],
    ];
    assert.deepEqual(readPathLetters(path), ['C', 'D']);
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
    assert.deepEqual(readPathLetters(path), ['X', 'P', 'O']);
  });
});
