module.exports = (path) => {
  let position = [0, path[0].indexOf('|')];
  let direction = [1, 0];
  const letters = [];

  const nextPosition = (dir) => position.map((p, i) => p + dir[i])
  const elementAt = (pos) => path[pos[0]][pos[1]]
  const move = () => position = nextPosition(direction);

  while(true) {
    const currentElement = elementAt(position);
    switch (currentElement) {
      case '|':
      case '-':
        break;
      case '+':
        const possibleDirections = [1, -1].map(inc => direction.map(d => (d + inc) % 2));
        direction = possibleDirections.find(dir => elementAt(nextPosition(dir)) !== ' ');
        break;
      case ' ':
        return letters;
      default:
        letters.push(currentElement);
    }
    move();
  }
}
