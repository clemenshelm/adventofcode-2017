const processRegisterChange = require('./processRegisterChange.js');
const [,, input,] = process.argv;

const registers = input
  .split(/\n/)
  .reduce(processRegisterChange, {});

console.log(Math.max(...Object.values(registers)));
