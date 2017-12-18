const assert = require('assert');
const processor = require('./processor.js');

describe('executing a number of commands', () => {
  it('sets register a to 1', () => {
    const proc = processor(['set a 1'], 0, [[], []]);
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, p: 0 }, sendCount: 0 });
  });

  it('adds 2 to register a', () => {
    const proc = processor(['set a 1', 'add a 2'], 1, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 3, p: 1 }, sendCount: 0 });
  });

  it('adds 1 to non-existing register a', () => {
    const proc = processor(['add a 1'], 0, [[], []]);
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 1, p: 0 }, sendCount: 0 });
  });

  it('multiplies a by 3', () => {
    const proc = processor(['set a 2', 'mul a 3'], 0, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 6, p: 0 }, sendCount: 0 });
  });

  it('squares a', () => {
    const proc = processor(['set a 4', 'mul a a'], 0, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 16, p: 0 }, sendCount: 0 });
  });

  it('multiplies a by a non-existing register', () => {
    const proc = processor(['set a 2', 'mul a b'], 0, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mul', registers: { a: 0, p: 0 }, sendCount: 0 });
  });

  it('sets register b to register a', () => {
    const proc = processor(['set a 1', 'set b a'], 0, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, b: 1, p: 0 }, sendCount: 0 });
  });

  it('doubles a', () => {
    const proc = processor(['set a 4', 'add a a'], 0, [[], []]);
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'add', registers: { a: 8, p: 0 }, sendCount: 0 });
  });

  it('calculates the remainder of dividing a by b', () => {
    const proc = processor(['set a 4', 'set b 3', 'mod a b'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'mod', registers: { a: 1, b: 3, p: 0 }, sendCount: 0 });
  });

  it('sends a value from program 0 to program 1', () => {
    const queue0 = [];
    const queue1 = [];
    const proc = processor(['set a 7', 'snd a'], 0, [queue0, queue1]);
    proc.next();
    assert.deepEqual(proc.next().value.sendCount, 1);
    assert.deepEqual(queue0, []);
    assert.deepEqual(queue1, [7]);
  });

  it('sends a value from program 1 to program 0', () => {
    const queue0 = [];
    const queue1 = [];
    const proc = processor(['set a 5', 'snd a'], 1, [queue0, queue1]);
    proc.next();
    proc.next();
    assert.deepEqual(queue0, [5]);
    assert.deepEqual(queue1, []);
  });

  it('adds sent values to the end of the queue', () => {
    const queue0 = [];
    const queue1 = [];
    const proc = processor(['set a 5', 'snd a', 'snd p'], 1, [queue0, queue1]);
    proc.next();
    proc.next();
    proc.next();
    assert.deepEqual(queue0, [5, 1]);
    assert.deepEqual(queue1, []);
  })

  it('receives a value from program 1', () => {
    const proc = processor(['rcv a'], 0, [[2], []]);
    assert.deepEqual(proc.next().value, { lastCmd: 'rcv', registers: { a: 2, p: 0 }, sendCount: 0 });
  });

  it('receives a value from program 0', () => {
    const proc = processor(['rcv p'], 1, [[], [4]]);
    assert.deepEqual(proc.next().value, { lastCmd: 'rcv', registers: { p: 4 }, sendCount: 0 });
  });

  it('receives multiple values', () => {
    const proc = processor(['rcv a', 'rcv b', 'rcv c'], 1, [[], [7, 8, 9]]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'rcv', registers: { a: 7, b: 8, c: 9, p: 1 }, sendCount: 0 });
  });

  it('blocks if the queue is empty', () => {
    const queues = [[], []];
    const proc0 = processor(['rcv a', 'set b 2'], 0, queues);
    const proc1 = processor(['snd 5'], 1, queues);

    proc0.next();
    proc1.next();

    assert.deepEqual(proc0.next().value, { lastCmd: 'rcv', registers: { a: 5, p: 0 }, sendCount: 0 });
  })

  it('doesn’t jump if the given register is 0', () => {
    const proc = processor(['set a 0', 'jgz a -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, p: 0 }, sendCount: 0 });
  });

  it('jumps if the given value is greater than 0', () => {
    const proc = processor(['set a 0', 'jgz 1 -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 0, p: 0 }, sendCount: 0 });
  });

  it('doesn’t jump if the given register is lower than 0', () => {
    const proc = processor(['set a -12', 'jgz a -1', 'set a 1'], 0, [[], []]);
    proc.next();
    proc.next();
    assert.deepEqual(proc.next().value, { lastCmd: 'set', registers: { a: 1, p: 0 }, sendCount: 0 });
  });

  it('terminates when there are no more instructions', () => {
    const proc = processor(['set a 0'], 0, [[], []]);
    proc.next();
    assert(proc.next().done);
  })
});
