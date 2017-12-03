const assert = require('assert');
const spiralSteps = require('./spiralSteps.js');

describe('spiralSteps', () => {
  it('calculates the number of steps for 1', () => {
    const steps = spiralSteps(1);
    assert.equal(steps, 0);
  });

  it('calculates the number of steps for 5', () => {
    const steps = spiralSteps(5);
    assert.equal(steps, 2);
  });

  it('calculates the number of steps for 12', () => {
    const steps = spiralSteps(12);
    assert.equal(steps, 3);
  });

  it('calculates the number of steps for 23', () => {
    const steps = spiralSteps(23);
    assert.equal(steps, 2);
  });

  it('calculates the number of steps for 1024', () => {
    const steps = spiralSteps(1024);
    assert.equal(steps, 31);
  });
});
