const longRunClosestToOrigin = require('./longRunClosestToOrigin.js');
const [,, input,] = process.argv;

const vectorRegex = /<([^,]+),([^,]+),([^,]+)>/
const particles = input.split('\n')
  .map(line => line.match(new RegExp(vectorRegex, 'g')))
  .map(vectorGroups => {
    const [p, v, a] = vectorGroups.map(group => {
      const [, ...coordinates] = group.match(vectorRegex);
      const [x, y, z] = coordinates.map(c => parseInt(c, 10));
      return { x, y, z };
    });
    return { p, v, a };
  });

console.log(longRunClosestToOrigin(particles));
