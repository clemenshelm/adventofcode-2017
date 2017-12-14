const denseHexHash = require('./denseHexHash.js');

module.exports = (inputString) => {
  const hexHash = denseHexHash(inputString);

  // JavaScript can't handle the whole hash hex as integer, so we split it
return [0, 8, 16, 24]
    .map(offset => parseInt(hexHash.substr(offset, 8), 16).toString(2))
    // make sure there are 32 bits
    .map(binary => [...new Array(31).fill('0'), binary].join('').slice(-32))
    .join('');
}
