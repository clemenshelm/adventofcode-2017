const assert = require('assert');
const fewestSteps = require('./fewestSteps.js');

describe('determining the fewest steps necessary', () => {
  it('returns the original path if it is already optimal', () => {
    const steps = fewestSteps(['ne', 'ne', 'ne']);
    assert.deepEqual(steps, ['ne', 'ne', 'ne']);
  });

  it('eliminates oposed steps', () => {
    const steps = fewestSteps(['ne', 'ne', 'sw', 'sw']);
    assert.deepEqual(steps, []);
  });

  it('handles south only steps', () => {
    const steps = fewestSteps(['ne', 'ne', 's', 's']);
    assert.deepEqual(steps, ['se', 'se']);
  });

  it('handles south only steps', () => {
    const steps = fewestSteps(['se', 'sw', 'se', 'sw', 'sw']);
    assert.deepEqual(steps, ['s', 's', 'sw']);
  });

  it('handles north and north-west', () => {
    const steps = fewestSteps(['nw', 'ne', 'nw']);
    assert.deepEqual(steps, ['n', 'nw']);
  });
})
