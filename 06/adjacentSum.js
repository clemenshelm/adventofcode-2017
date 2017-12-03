const firstNumberOnCircle = (circleNum) =>
  circleNum === 1 ? 1 : Math.pow(1 + ((circleNum - 2) * 2), 2) + 1;

const lastNumberOnCircle = (circleNum) => Math.pow(1 + ((circleNum - 1) * 2), 2)

const edgeNumbers = (circleNum) => {
  const stepsToEdge =  circleNum - 1;

  const lastEdgeNumber = lastNumberOnCircle(circleNum) - stepsToEdge;
  return [0, 1, 2, 3].map(num => lastEdgeNumber - num * stepsToEdge * 2);
}

const cornerNumbers = (circleNum) => edgeNumbers(circleNum).map(edgeNum => edgeNum + circleNum - 1);

const adjacentNumbers = (inputInt) => {
  if (inputInt === 1) {
    return [];
  }

  // previous number is always adjacent
  const sameCircleElements = new Set([inputInt - 1]);

  const circleNum = Math.ceil((Math.sqrt(inputInt) + 1) / 2)
  const [edgeIndex, stepsToEdgeNumber] = edgeNumbers(circleNum)
    .map((n, index) => [index, n - inputInt])
    .sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0];

  // add number before previous corner
  const distanceToCorner = circleNum - stepsToEdgeNumber - 1;
  if (distanceToCorner === 1 && inputInt !== firstNumberOnCircle(circleNum)) {
    const aroundThePreviousCornerElement = inputInt - 2;
    sameCircleElements.add(aroundThePreviousCornerElement);
  }

  // add number after last corner
  const lastNum = lastNumberOnCircle(circleNum)
  if ([lastNum - 1, lastNum].includes(inputInt)) {
    const aroundTheLastCornerElement = firstNumberOnCircle(circleNum);
    sameCircleElements.add(aroundTheLastCornerElement);
  }

  // inner adjacent numbers
  const maxInnerEdgeDistance = circleNum - 2;
  const innerEdgeDistances = [-1, 0, 1].map(i => i - stepsToEdgeNumber)
    .filter(d => Math.abs(d) <= maxInnerEdgeDistance)
  const innerEdgeNumber = edgeNumbers(circleNum - 1)[edgeIndex];
  const firstInnerNum = firstNumberOnCircle(circleNum - 1);
  const lastInnerNum = lastNumberOnCircle(circleNum - 1);
  const innerElements = innerEdgeDistances.map(d => {
      const innerElement = innerEdgeNumber + d;
      return innerElement >= firstInnerNum ? innerElement : lastInnerNum;
    })
    .filter(e => e >= firstInnerNum);

  return [...new Set([...sameCircleElements, ...innerElements])];
}

const adjacentSum = (input) => {
  const inputInt = parseInt(input, 10);

  const adjacents = adjacentNumbers(inputInt);

  if (adjacents.length === 0) {
    return 1;
  }

  const sums = adjacents
    .map(adjacentSum)
  return sums.reduce((sum, num) => sum + num, 0);
}

module.exports = adjacentSum;
