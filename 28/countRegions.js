const markRegion = (matrix, row, col, label) => {
  if (!matrix[row] || matrix[row][col] !== 1) {
    return false;
  }

  matrix[row][col] = label;
  markRegion(matrix, row - 1, col, label);
  markRegion(matrix, row + 1, col, label);
  markRegion(matrix, row, col - 1, label);
  markRegion(matrix, row, col + 1, label);

  return true;
}

module.exports = (matrix) => {
  const regionMatrix = matrix.map(row => [...row]); // clone
  let regionCount = 0;

  for (let row = 0; row < regionMatrix.length; row++) {
    for (let col = 0; col < regionMatrix[row].length; col ++) {
      const label = regionCount + 2;
      const wasMarked = markRegion(regionMatrix, row, col, label);
      if (wasMarked) {
        regionCount++;
      }
    }
  };

  return regionCount;
}
