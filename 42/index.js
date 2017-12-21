const applyFractal = require('./applyFractal.js');
const split = require('./split.js');
const join = require('./join.js');
const [,, input,] = process.argv;

const fractals = input.split('\n').map(rule => {
  const gridStrings = rule.split(' => ');
  const [pattern, enhancement] = gridStrings.map(gridStr =>
    gridStr.split('/').map(line => line.split('').map(c => c === '#' ? 1 : 0)));
  return { pattern, enhancement }
});

let grid = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
]

for (let i = 0; i < 18; i++) {
  const segments = split(grid);
  const enhancements = segments.map(s => fractals.find(f => applyFractal(s, f)).enhancement);
  grid = join(enhancements);
}

const add = (sum, num) => sum + num;
const numOnPixels = grid.map(row => row.reduce(add)).reduce(add);
console.log(numOnPixels);
