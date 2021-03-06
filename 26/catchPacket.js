module.exports = (layerConfig, delay = 0) => {
  const totalStepsConfig = Object.keys(layerConfig)
    .map(depth => {
      const totalSteps = Math.max(layerConfig[depth] * 2 - 2, 1)
      return [parseInt(depth, 10), totalSteps];
    });

  const catchingWalls = totalStepsConfig
    .filter(([depth, steps]) => (depth + delay) % steps === 0)
    .map(([depth,]) => depth);

  return catchingWalls;
};
