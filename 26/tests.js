const assert = require('assert');
const catchPacket = require('./catchPacket.js');

describe('catching a packet', () => {
  it('catches a packet at layer 0 and 6', () => {
    const caughtAt = catchPacket({ 0: 3, 1: 2, 4: 4, 6: 4});
    assert.deepEqual(caughtAt, [0, 6]);
  });

  it('catches a packet at layer 1 and 4', () => {
    const caughtAt = catchPacket({ 1: 1, 2: 3, 4: 3, 6: 3});
    assert.deepEqual(caughtAt, [1, 4]);
  });

  it('catches a packet on a later scan run', () => {
    const caughtAt = catchPacket({ 1: 2, 3: 2, 4: 2, 6: 2});
    assert.deepEqual(caughtAt, [4, 6]);
  });

  it('doesn’t catch a packet at layer 0 and 6 if delayed for 10 picoseconds', () => {
    const caughtAt = catchPacket({ 0: 3, 1: 2, 4: 4, 6: 4}, 10);
    assert.deepEqual(caughtAt, []);
  });
})
