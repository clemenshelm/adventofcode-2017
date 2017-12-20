const add = (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z });

module.exports = (particles) => {
  const movedParticles = particles
    .map(({ p, v, a }) => ({ p, v: add(v, a), a }))
    .map(({ p, v, a }) => ({ p: add(p, v), v, a }));

  const remainingParticles = [];
  movedParticles.forEach(particle => {
    const particlesAtPosition = movedParticles
      .filter(p => p.p.x === particle.p.x && p.p.y === particle.p.y && p.p.z === particle.p.z);

    if (particlesAtPosition.length === 1) {
      remainingParticles.push(particle);
    }
  })

  return remainingParticles;
}
