const changePositions = (array, pos1, pos2) => {
  const result = [...array];
  result[pos1] = array[pos2];
  result[pos2] = array[pos1];
  return result;
};

module.exports = (dancers, move) => {
  const [, action, numStr1, numStr2] = move.match(/^(.)([^\/]+)(?:\/(.+))?$/);
  const [num1, num2] = [numStr1, numStr2].map(n => parseInt(n, 10));

  switch(action) {
    case 's': return [...dancers.slice(-num1), ...dancers.slice(0, -num1)];
    case 'x': return changePositions(dancers, num1, num2);
    case 'p':
      const [index1, index2] = [numStr1, numStr2].map(s => dancers.indexOf(s));
      return changePositions(dancers, index1, index2);
    default:
      throw new Error(`Unknown move "${move}"`);
  }
}
