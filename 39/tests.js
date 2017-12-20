const assert = require('assert');
const longRunClosestToOrigin = require('./longRunClosestToOrigin.js');

describe('finding the particle closest to the origin on the long run', () => {
  it('selects the particle with the smallest acceleration', () => {
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
    assert.equal(longRunClosestToOrigin(particles), 1);
  });

  it('selects the particle with the smallest absolute acceleration', () => {
    const particles = [
      {
        p: { x: -181, y: -26, z: 548 },
        v: { x: 11, y: 73, z: -8 },
        a: { x: 0, y: -7, z: -2 },
      },
      {
        p: { x: -671, y: 1794, z: -1062 },
        v: { x: 46, y: 87, z: 41 },
        a: { x: -1, y: -17, z: 1 },
      },
    ];
    assert.equal(longRunClosestToOrigin(particles), 0);
  });
});
