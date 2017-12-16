const dance = require('./dance.js');
const [,, input,] = process.argv;

const programsString = 'abcdefghijklmnop';
const programs = programsString.split('');
const moves = input.split(',');

const dancesUntilCycle = () => {
  let programOrder = programs;
  for (let i = 1; i <= 1000000000; i++) {
    programOrder = moves.reduce(dance, programOrder);
    if (programOrder.join('') === programsString) {
      return i;
    }
  }
}

const remainingDances = 1000000000 % dancesUntilCycle();

let programOrder = programs;
for (let i = 0; i < remainingDances; i++) {
  programOrder = moves.reduce(dance, programOrder);
}

console.log(programOrder.join(''));
