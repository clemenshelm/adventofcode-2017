const assert = require('assert');
const streamGroupScore = require('./streamGroupScore.js');

describe('total group score', () => {
  it('is 1 for an empty group', () => {
    const score = streamGroupScore('{}');
    assert.equal(score, 1);
  });

  it('is 3 for a nested group', () => {
    const score = streamGroupScore('{{}}');
    assert.equal(score, 3);
  });

  it('is 5 for a two groups nested in the first one', () => {
    const score = streamGroupScore('{{},{}}');
    assert.equal(score, 5);
  });

  it('is 1 for a a group with four pieces of garbage', () => {
    const score = streamGroupScore('{<a>,<a>,<a>,<a>}');
    assert.equal(score, 1);
  });

  it('is 1 for a a group with one nested group with misleading gargabe', () => {
    const score = streamGroupScore('{{<a!>},{<a!>},{<a!>},{<ab>}}');
    assert.equal(score, 3);
  });
});
