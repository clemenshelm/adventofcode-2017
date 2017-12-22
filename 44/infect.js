const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };
const UP = { x: 0, y: -1 };
const DOWN = { x: 0, y: 1 };
const INFECTED = 'I';
const WEAKENED = 'W';
const FLAGGED = 'F';
const CLEAN = 'C';
const directions = [UP, RIGHT, DOWN, LEFT];

const turnDirections = {
  [CLEAN]: -1,
  [WEAKENED]: 0,
  [INFECTED]: 1,
  [FLAGGED]: 2,
};

const matches = (matchPartner) => ({ x, y }) => matchPartner.x === x && matchPartner.y === y;

const turn = (direction, status) => {
  const currentDirection = directions.find(matches(direction));
  const newDirectionIndex = (directions.indexOf(currentDirection) + turnDirections[status] + 4) % 4;
  return directions[newDirectionIndex];
};

const statusForNode = (node) => {
  return node ? node.status : CLEAN;
}

const applyNewStatus = (affectedNodes, position, status) => {
  const id = `${position.x}|${position.y}`;
  switch (status) {
    case CLEAN:
      affectedNodes[id] = { ...position, status: WEAKENED };
      return WEAKENED;
      break;
    case WEAKENED:
      affectedNodes[id].status = INFECTED;
      return INFECTED;
      break;
    case INFECTED:
      affectedNodes[id].status = FLAGGED;
      return FLAGGED;
      break;
    case FLAGGED:
      delete affectedNodes[id];
      return CLEAN;
      break;
    default: throw new Error(`Unknown status: ${status}`);
  }
}

module.exports = {
  infect({ affectedNodes, position, direction }) {
    const id = `${position.x}|${position.y}`;
    const node = affectedNodes[id];
    const status = statusForNode(node);

    const newDirection = turn(direction, status);
    const newStatus = applyNewStatus(affectedNodes, position, status);
    const newPosition = { x: position.x + newDirection.x, y: position.y + newDirection.y };

    return {
      affectedNodes,
      position: newPosition,
      direction: newDirection,
      newStatus,
    };
  },
  UP,
  RIGHT,
  DOWN,
  LEFT,
  INFECTED,
  WEAKENED,
  FLAGGED,
  CLEAN,
}
