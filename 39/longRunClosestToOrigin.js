module.exports = (particles) => {
  const accelerations = particles
    .map(({ a }) => Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z));
  const minAcceleration = Math.min(...accelerations);
  return accelerations.indexOf(minAcceleration);
}
