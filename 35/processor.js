const calculations = {
  set: (a, b) => b,
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
  mod: (a, b) => a % b,
};

module.exports = function*(instructions) {
  const parsedInstructions = instructions
    .map(i => i.split(' '))
    .map(([command, arg1, arg2]) => ({ command, arg1, arg2 }) );
  const registers = {};

  const resolveRegisterValue = (register) => registers[register] || 0;

  const resolveValue = (value) => {
    const intValue = parseInt(value, 10);
    return isNaN(intValue) ? resolveRegisterValue(value) : intValue;
  }

  let sound = null;
  let result = {};
  for (let i = 0; i < instructions.length; i++) {
    const { command, arg1, arg2 } = parsedInstructions[i];

    switch (command) {
      case 'set':
      case 'add':
      case 'mul':
      case 'mod':
        registers[arg1] = calculations[command](resolveRegisterValue(arg1), resolveValue(arg2));
        break;
      case 'snd':
        sound = resolveValue(arg1);
        break;
      case 'rcv':
        if (resolveRegisterValue(arg1) === 0) {
          yield result;
          continue;
        }
        registers[arg1] = sound;
        break;
      case 'jgz':
        if (resolveRegisterValue(arg1) <= 0) {
          yield result;
          continue;
        }
        i += resolveValue(arg2) - 1; // - 1 compensates increment
        break;
      default: throw new Error(`Unknown command: ${command}`)
    }
    result = { lastCmd: command, registers: { ...registers }, sound };
    yield result;
  }
}
