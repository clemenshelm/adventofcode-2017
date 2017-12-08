const assert = require('assert');
const processRegisterChange = require('./processRegisterChange.js');

describe('getting the root element', () => {
  it('increases b if a is greater than 1', () => {
    const result = processRegisterChange({ a: 2 }, 'b inc 5 if a > 1');
    assert.deepEqual(result, { b: 5, a: 2 });
  });

  it('doesn’t increase b if a is not set', () => {
    const result = processRegisterChange({}, 'b inc 5 if a > 1');
    assert.deepEqual(result, { b: 0, a: 0 });
  });

  it('increases a even if b is not set', () => {
    const result = processRegisterChange({}, 'a inc 1 if b < 5');
    assert.deepEqual(result, { b: 0, a: 1 });
  });

  it('decreases c if a is 1', () => {
    const result = processRegisterChange({ a: 1 }, 'c dec -10 if a >= 1');
    assert.deepEqual(result, { c: 10, a: 1 });
  });

  it('decreases c if a is 2', () => {
    const result = processRegisterChange({ abcd: 2 }, 'c dec -10 if abcd >= 1');
    assert.deepEqual(result, { c: 10, abcd: 2 });
  });

  it('increases c if c is 10', () => {
    const result = processRegisterChange({ c: 10 }, 'c inc -20 if c == 10');
    assert.deepEqual(result, { c: -10 });
  });

  it('increases d if c is 10', () => {
    const result = processRegisterChange({ c: 10 }, 'd inc 10 if c <= 10');
    assert.deepEqual(result, { d: 10, c: 10 });
  });

  it('increases d if c is 9', () => {
    const result = processRegisterChange({ c: 9 }, 'ddd inc 10 if c <= 10');
    assert.deepEqual(result, { ddd: 10, c: 9 });
  });

  it('increases a if c is not 10', () => {
    const result = processRegisterChange({ c: 9 }, 'd inc 10 if c != 4');
    assert.deepEqual(result, { d: 10, c: 9 });
  });
});
