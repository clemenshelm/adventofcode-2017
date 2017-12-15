const assert = require('assert');
const numberGenerator = require('./numberGenerator.js');

describe('generating a sequence', () => {
  it('uses the seed 65 for the first result', () => {
    const generator = numberGenerator(65, 16807);
    assert.equal(generator.next().value, 1092455);
  });

  it('uses the seed 8921 for the first result', () => {
    const generator = numberGenerator(8921, 48271);
    assert.equal(generator.next().value, 430625591);
  });

  it('uses the first result for the second result', () => {
    const generator = numberGenerator(65, 16807);
    generator.next();
    assert.equal(generator.next().value, 1181022009);
  });

  it('only generates multiples of 4', () => {
    const generator = numberGenerator(65, 16807, 4);
    assert.equal(generator.next().value, 1352636452);
  })
});
