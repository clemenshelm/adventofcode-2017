// Copied from example 20
const knotHash = require('./knotHash.js');

module.exports = (input) => {
  const lengths = input.split('').map((n) => n.charCodeAt(0));
  const saltedLengths = [...lengths, 17, 31, 73, 47, 23];
  const allLengths = new Array(64 * saltedLengths.length).fill(0)
    .map((el, index) => saltedLengths[index % saltedLengths.length]);

  const initialList = new Array(256).fill(0).map((el, index) => index);

  const { list } = allLengths
    .reduce(({ list, position }, length, index) => {
      const skip = Math.max(index - 1, 0);
      const newList = knotHash({ list, position: (position + skip) % list.length, length });
      const newPosition = (position + length + skip) % list.length;
      return { list: newList, position: newPosition };
    }, { list: initialList, position: 0 });

  const denseHash = new Array(16).fill(0)
    .map((el, index) => list.slice(index * 16, (index + 1) * 16).reduce((xored, cur) => xored ^ cur));
  return denseHash.map(num => `0${num.toString(16)}`.slice(-2)).join('');
}
