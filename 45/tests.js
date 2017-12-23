const assert = require('assert');
const processor = require('./processor.js');

describe('executing a number of commands', () => {
  it('sets register a to 1', () => {
    const proc = processor(['set a 1']);
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1 } });
  });

  it('subtracts 2 from register a', () => {
    const proc = processor(['set a 3', 'sub a 2']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'sub', registers: { a: 1 } });
  });

  it('subtracts 1 from non-existing register a', () => {
    const proc = processor(['sub a 1']);
    assert.deepEqual(proc.next().value, { lastCmd: 'sub', registers: { a: -1 } });
  });

  it('multiplies a by 3', () => {
    const proc = processor(['set a 2', 'mul a 3']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 6 } });
  });

  it('squares a', () => {
    const proc = processor(['set a 4', 'mul a a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 16 } });
  });

  it('multiplies a by a non-existing register', () => {
    const proc = processor(['set a 2', 'mul a b']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 0 } });
  });

  it('sets register b to register a', () => {
    const proc = processor(['set a 1', 'set b a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, b: 1 } });
  });

  it('jumps if the register is greater than 0', () => {
    const proc = processor(['set a 4', 'sub a 1', 'jnz a -1']);
    proc.next();
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'sub', registers: { a: 2 } });
  });

  it('doesn’t jump if the given register is 0', () => {
    const proc = processor(['set a 0', 'jnz a -1', 'set a 1']);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1 } });
  });

  it('jumps if the given register is lower than 0', () => {
    const proc = processor(['set a -12', 'jnz a -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: -12 } });
  });

  it('jumps if the given number is lower than 0', () => {
    const proc = processor(['set a -12', 'jnz -2 -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: -12 } });
  });

  it('terminates when there are no more instructions', () => {
    const proc = processor(['set a 0'], 0, [[], []]);
    proc.next();
    assert(proc.next().done);
  })
});
