module.exports = (path) => {
  let position = [0, path[0].indexOf('|')];
  let direction = [1, 0];
  let moves = 0;

  const nextPosition = (dir) => position.map((p, i) => p + dir[i])
  const elementAt = (pos) => path[pos[0]][pos[1]]
  const move = () => {
    position = nextPosition(direction);
    moves++;
  };

  while(true) {
    switch (elementAt(position)) {
      case '+':
        const possibleDirections = [1, -1].map(inc => direction.map(d => (d + inc) % 2));
        direction = possibleDirections.find(dir => elementAt(nextPosition(dir)) !== ' ');
        break;
      case ' ':
        return moves;
    }
    move();
  }
}
