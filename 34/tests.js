const assert = require('assert');
const generateBufferPosition1 = require('./generateBufferPosition1.js');

describe('generating a buffer of numbers', () => {
  it('inserts the number 1 with 3 steps', () => {
    const pos1Generator = generateBufferPosition1({ steps: 3 });
    assert.deepEqual(pos1Generator.next().value, { pos1: 1, currentElement: 1 });
  });

  it('inserts the number 2 with 3 steps', () => {
    const pos1Generator = generateBufferPosition1({ steps: 3 });
    pos1Generator.next();
    assert.deepEqual(pos1Generator.next().value, { pos1: 2, currentElement: 2 });
  });

  it('inserts the number 3 with 3 steps', () => {
    const pos1Generator = generateBufferPosition1({ steps: 3 });
    pos1Generator.next();
    pos1Generator.next();
    assert.deepEqual(pos1Generator.next().value, { pos1: 2, currentElement: 3 });
  });

  it('inserts the number 2 with 4 steps', () => {
    const pos1Generator = generateBufferPosition1({ steps: 4 });
    pos1Generator.next();
    assert.deepEqual(pos1Generator.next().value, { pos1: 1, currentElement: 2 });
  });
});
