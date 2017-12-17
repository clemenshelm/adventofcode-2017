const assert = require('assert');
const generateBuffer = require('./generateBuffer.js');

describe('generating a buffer of numbers', () => {
  it('inserts the number 1 with 3 steps', () => {
    const bufferGenerator = generateBuffer({ steps: 3 });
    assert.deepEqual(bufferGenerator.next().value, { buffer: [0, 1], currentElement: 1 });
  });

  it('inserts the number 2 with 3 steps', () => {
    const bufferGenerator = generateBuffer({ steps: 3 });
    bufferGenerator.next();
    assert.deepEqual(bufferGenerator.next().value, { buffer: [0, 2, 1], currentElement: 2 });
  });

  it('inserts the number 3 with 3 steps', () => {
    const bufferGenerator = generateBuffer({ steps: 3 });
    bufferGenerator.next();
    bufferGenerator.next();
    assert.deepEqual(bufferGenerator.next().value, { buffer: [0, 2, 3, 1], currentElement: 3 });
  });

  it('inserts the number 2 with 4 steps', () => {
    const bufferGenerator = generateBuffer({ steps: 4 });
    bufferGenerator.next();
    assert.deepEqual(bufferGenerator.next().value, { buffer: [0, 1, 2], currentElement: 2 });
  });
});
