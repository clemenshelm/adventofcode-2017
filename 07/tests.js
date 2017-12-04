const assert = require('assert');
const isPassphraseValid = require('./isPassphraseValid.js');

describe('passphrase', () => {
  it('is valid for aa bb cc dd ee', () => {
    const isValid = isPassphraseValid('aa bb cc dd ee');
    assert.equal(isValid, true);
  });

  it('is not valid for aa bb cc dd aa', () => {
    const isValid = isPassphraseValid('aa bb cc dd aa');
    assert.equal(isValid, false);
  });
});
