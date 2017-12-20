const assert = require('assert');
const tick = require('./tick.js');

describe('moving particles', () => {
  it('moves particles', () => {
    const particles = [
      {
        p: { x: -1021, y: -2406, z: 1428 },
        v: { x: 11, y: 24, z: -73 },
        a: { x: 4, y: 9, z: 0 },
      },
      {
        p: { x: -181, y: -26, z: 548 },
        v: { x: 11, y: 73, z: -8 },
        a: { x: 0, y: -7, z: -2 },
      },
    ];
    const resultParticles = tick(particles);
    const expectedParticles = [
      {
        p: { x: -1006, y: -2373, z: 1355 },
        v: { x: 15, y: 33, z: -73 },
        a: { x: 4, y: 9, z: 0 },
      },
      {
        p: { x: -170, y: 40, z: 538 },
        v: { x: 11, y: 66, z: -10 },
        a: { x: 0, y: -7, z: -2 },
      },
    ];
    assert.deepEqual(resultParticles, expectedParticles);
  });

  it('removes colliding particles', () => {
    const particles = [
      {
        p: { x: -3, y: 0, z: 0 },
        v: { x: 3, y: 0, z: 0 },
        a: { x: 0, y: 0, z: 0 },
      },
      {
        p: { x: -2, y: 0, z: 0 },
        v: { x: 2, y: 0, z: 0 },
        a: { x: 0, y: 0, z: 0 },
      },
      {
        p: { x: -1, y: 0, z: 0 },
        v: { x: 1, y: 0, z: 0 },
        a: { x: 0, y: 0, z: 0 },
      },
      {
        p: { x: 2, y: 0, z: 0 },
        v: { x: -1, y: 0, z: 0 },
        a: { x: 0, y: 0, z: 0 },
      },
    ];
    const resultParticles = tick(particles);
    const expectedParticles = [
      {
        p: { x: 1, y: 0, z: 0 },
        v: { x: -1, y: 0, z: 0 },
        a: { x: 0, y: 0, z: 0 },
      },
    ];
    assert.deepEqual(resultParticles, expectedParticles);
  })
});
