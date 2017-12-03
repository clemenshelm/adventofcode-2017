module.exports = (input) => {
  const inputInt = parseInt(input, 10)

  const circleNum = Math.ceil((Math.sqrt(inputInt) + 1) / 2)
  const stepsToEdge =  circleNum - 1;

  const circleBase = (circleNum * 2 - 1);
  const lastNumberInCircle = circleBase * circleBase;
  const lastEdgeNumber = lastNumberInCircle - stepsToEdge;
  const edgeNumbers = [0, 1, 2, 3].map(num => lastEdgeNumber - num * stepsToEdge * 2);

  const stepsToEdgeNumber = edgeNumbers
    .map(n => Math.abs(n - inputInt))
    .sort((a, b) => a - b)[0];

  return stepsToEdge + stepsToEdgeNumber;
}
