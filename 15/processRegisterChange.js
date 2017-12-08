const compare = (variable, comparator, argument) => {
  switch (comparator) {
    case '>': return variable > argument;
    case '>=': return variable >= argument;
    case '<': return variable < argument;
    case '<=': return variable <= argument;
    case '==': return variable == argument;
    case '!=': return variable != argument;
    default: throw new Error(`Unknown comparator: ${comparator}`);
  }
}

const change = (variable, operator, argument) => {
  switch (operator) {
    case 'inc': return variable + argument;
    case 'dec': return variable - argument;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
}

module.exports = (registers, changeInstruction) => {
  const [, changeVar, op, opArg, condVar, comp, compArg] = changeInstruction
    .match(/^(.+) (inc|dec) (.+) if (.+) (.+) (.+)$/);

  const allRegisters = { [changeVar]: 0, [condVar]: 0, ...registers };

  if (compare(allRegisters[condVar], comp, parseInt(compArg, 10))) {
     const result = change(allRegisters[changeVar], op, parseInt(opArg, 10));
     return { ...allRegisters, [changeVar]: result };
  }

  return allRegisters;
}
