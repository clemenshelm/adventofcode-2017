const processRegisterChange = require('./processRegisterChange.js');
const [,, input,] = process.argv;

let highestValue = 0;

const registers = input
  .split(/\n/)
  .reduce((registers, instruction) => {
    const newRegisters = processRegisterChange(registers, instruction);
    highestValue = Math.max(...Object.values(newRegisters), highestValue);
    return newRegisters;
  }, {});

console.log(highestValue);
