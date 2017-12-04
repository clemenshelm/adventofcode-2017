const assert = require('assert');
const isPassphraseValid = require('./isPassphraseValid.js');

describe('passphrase', () => {
  it('is valid for abcde fghij', () => {
    const isValid = isPassphraseValid('abcde fghij');
    assert.equal(isValid, true);
  });

  it('is not valid for abcde xyz ecdab', () => {
    const isValid = isPassphraseValid('abcde xyz ecdab');
    assert.equal(isValid, false);
  });
});
