const applyStep = ({ southSteps, westSteps }, step) => {
  switch (step) {
    case 'n': return { southSteps: southSteps - 2, westSteps };
    case 'ne': return { southSteps: southSteps - 1, westSteps: westSteps - 1};
    case 'se': return { southSteps: southSteps + 1, westSteps: westSteps - 1};
    case 's': return { southSteps: southSteps + 2, westSteps };
    case 'sw': return { southSteps: southSteps + 1, westSteps: westSteps + 1};
    case 'nw': return { southSteps: southSteps - 1, westSteps: westSteps + 1};
    default: throw new Error(`Unknown direction ${step}`);
  }
}

const shortestPath = ({ southSteps, westSteps }) => {
  const resultSteps = [];
  while (southSteps !== 0 || westSteps !== 0) {
    const bestMove = ['ne', 'se', 's', 'sw', 'nw', 'n']
      .map(step => ({ step, ...applyStep({ southSteps, westSteps }, step) }))
      .map(s => ({ ...s, distance: Math.abs(s.southSteps) + Math.abs(s.westSteps) }))
      .sort((a, b) => a.distance - b.distance)[0];
    resultSteps.push(bestMove.step);
    southSteps = bestMove.southSteps;
    westSteps = bestMove.westSteps;
  }

  return resultSteps;
}

module.exports = (originalSteps) => {
  let { southSteps, westSteps} = originalSteps
    .reduce(({ southSteps, westSteps }, step) =>
      applyStep({ southSteps, westSteps }, step), { southSteps: 0, westSteps: 0});

  return shortestPath({ southSteps: southSteps * -1, westSteps: westSteps * -1 })
}
