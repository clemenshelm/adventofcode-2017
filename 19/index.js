const knotHash = require('./knotHash.js');
const [,, input,] = process.argv;

const lengths = input.split(',').map((n) => parseInt(n, 10));
const initialList = new Array(256).fill(0).map((el, index) => index);

const { list } = lengths
  .reduce(({ list, position }, length, index) => {
    const skip = Math.max(index - 1, 0);
    const newList = knotHash({ list, position: (position + skip) % list.length, length });
    const newPosition = (position + length + skip) % list.length;
    return { list: newList, position: newPosition };
  }, { list: initialList, position: 0 });

console.log(list[0] * list[1]);
