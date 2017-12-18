const assert = require('assert');
const processor = require('./processor.js');

describe('executing a number of commands', () => {
  it('sets register a to 1', () => {
    const proc = processor(['set a 1']);
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1 }, sound: null });
  });

  it('adds 2 to register a', () => {
    const proc = processor(['set a 1', 'add a 2']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 3 }, sound: null });
  });

  it('adds 1 to non-existing register a', () => {
    const proc = processor(['add a 1']);
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 1 }, sound: null });
  });

  it('multiplies a by 3', () => {
    const proc = processor(['set a 2', 'mul a 3']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 6 }, sound: null });
  });

  it('squares a', () => {
    const proc = processor(['set a 4', 'mul a a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 16 }, sound: null });
  });

  it('multiplies a by a non-existing register', () => {
    const proc = processor(['set a 2', 'mul a b']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 0 }, sound: null });
  });

  it('sets register b to register a', () => {
    const proc = processor(['set a 1', 'set b a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, b: 1 }, sound: null });
  });

  it('doubles a', () => {
    const proc = processor(['set a 4', 'add a a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 8 }, sound: null });
  });

  it('calculates the remainder of dividing a by b', () => {
    const proc = processor(['set a 4', 'set b 3', 'mod a b']);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mod', registers: { a: 1, b: 3 }, sound: null });
  });

  it('plays a sound', () => {
    const proc = processor(['set a 7', 'snd a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'snd', registers: { a: 7 }, sound: 7 });
  });

  it('recovers the sound frequency', () => {
    const proc = processor(['set a 7', 'snd 4', 'rcv a']);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'rcv', registers: { a: 4 }, sound: 4 });
  });

  it('doesn’t recover the sound frequency if the register is 0', () => {
    const proc = processor(['set a 0', 'snd 4', 'rcv a']);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'snd', registers: { a: 0 }, sound: 4 });
  });

  it('doesn’t recover the sound frequency if the register is not set', () => {
    const proc = processor(['snd 4', 'rcv a']);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'snd', registers: {}, sound: 4 });
  });

  it('recovers the sound frequency if the register is set before a jump back', () => {
    const proc = processor(['snd 4', 'rcv a', 'set a 7', 'jgz a -2']);
    proc.next();
    proc.next();
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'rcv', registers: { a: 4 }, sound: 4 });
  });

  it('doesn’t jump if the given register is 0', () => {
    const proc = processor(['set a 0', 'jgz a -1', 'set a 1']);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1 }, sound: null });
  });

  it('doesn’t jump if the given register is lower than 0', () => {
    const proc = processor(['set a -12', 'jgz a -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1 }, sound: null });
  });

  it('terminates when there are no more instructions', () => {
    const proc = processor(['set a 0'], 0, [[], []]);
    proc.next();
    assert(proc.next().done);
  })
});
