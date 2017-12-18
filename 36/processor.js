const calculations = {
  set: (a, b) => b,
  add: (a, b) => a + b,
  mul: (a, b) => a * b,
  mod: (a, b) => a % b,
};

module.exports = function*(instructions, programId, queues) {
  const parsedInstructions = instructions
    .map(i => i.split(' '))
    .map(([command, arg1, arg2]) => ({ command, arg1, arg2 }) );
  const registers = { p: programId };

  const resolveRegisterValue = (register) => registers[register] || 0;

  const resolveValue = (value) => {
    const intValue = parseInt(value, 10);
    return isNaN(intValue) ? resolveRegisterValue(value) : intValue;
  }


  let sendCount = 0;
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
        queues[1 - programId].push(resolveValue(arg1));
        sendCount++;
        break;
      case 'rcv':
        if (queues[programId].length === 0) {
          i--; // stay receiving
        } else {
          registers[arg1] = queues[programId].shift();
        }
        break;
      case 'jgz':
        if (resolveValue(arg1) <= 0) {
          yield result;
          continue;
        }
        i += resolveValue(arg2) - 1; // - 1 compensates increment
        break;
      default: throw new Error(`Unknown command: ${command}`)
    }
    result = { lastCmd: command, registers: { ...registers }, sendCount };
    yield result;
  }
}
