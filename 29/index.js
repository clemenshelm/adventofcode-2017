const numberGenerator = require('./numberGenerator.js');
const [,, input,] = process.argv;

const [seedA, seedB] = input.split('\n')
  .map(line => line.match(/ (\d+)$/)[1])
  .map(seedStr => parseInt(seedStr, 10));

const generatorA = numberGenerator(seedA, 16807);
const generatorB = numberGenerator(seedB, 48271);
const comparisonBitmap = 2 ** 16 - 1;

let matchingCount = 0;
for (let i = 0; i < 40000000; i++) {
  const [valueA, valueB] = [generatorA, generatorB].map(g => g.next().value & comparisonBitmap);
  if (valueA === valueB) {
    matchingCount++;
  }
}

console.log(matchingCount);
