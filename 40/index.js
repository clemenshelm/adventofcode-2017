const tick = require('./tick.js');
const [,, input,] = process.argv;

const vectorRegex = /<([^,]+),([^,]+),([^,]+)>/
let particles = input.split('\n')
  .map(line => line.match(new RegExp(vectorRegex, 'g')))
  .map(vectorGroups => {
    const [p, v, a] = vectorGroups.map(group => {
      const [, ...coordinates] = group.match(vectorRegex);
      const [x, y, z] = coordinates.map(c => parseInt(c, 10));
      return { x, y, z };
    });
    return { p, v, a };
  });

let lastParticleLength = 0;
let sameLengthCount = 0;
while (sameLengthCount < particles.length) {
  particles = tick(particles);
  sameLengthCount = particles.length === lastParticleLength ? sameLengthCount + 1 : 0;
  lastParticleLength = particles.length;
}

console.log(particles.length);
