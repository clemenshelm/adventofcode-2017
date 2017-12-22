const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };
const UP = { x: 0, y: -1 };
const DOWN = { x: 0, y: 1 };
const directions = [UP, RIGHT, DOWN, LEFT];

const matches = (matchPartner) => ({ x, y }) => matchPartner.x === x && matchPartner.y === y;

const turn = (direction, isInfected) => {
  const currentDirection = directions.find(matches(direction));
  const directionChange = isInfected ? 1 : -1;
  const newDirectionIndex = (directions.indexOf(currentDirection) + directionChange + 4) % 4;
  return directions[newDirectionIndex];
};

const toggleInfection = (infectedNodes, position) => {
  const isInfected = infectedNodes.some(matches(position));
  if (isInfected) {
    return infectedNodes.filter(({ x, y }) => !(position.x === x && position.y === y));
  } else {
    return [...infectedNodes, position];
  }
}

module.exports = {
  infect({ infectedNodes, position, direction }) {
    const isInfected = infectedNodes.some(matches(position));

    const newDirection = turn(direction, isInfected);
    const newInfectedNodes = toggleInfection(infectedNodes, position);
    const newPosition = { x: position.x + newDirection.x, y: position.y + newDirection.y };

    return {
      infectedNodes: newInfectedNodes,
      position: newPosition,
      direction: newDirection,
    };
  },
  LEFT,
  UP,
}
