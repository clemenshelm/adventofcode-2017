const denseBinaryHash = require('./denseBinaryHash.js');

module.exports = (inputString) =>
  denseBinaryHash(inputString).split('').filter(digit => digit === '1').length;
