const matchesExactly = (square, pattern) =>
  square.reduce((rowMatch, row, rowIndex) =>
      rowMatch && row.reduce((colMatch, col, colIndex) =>
        colMatch && col === pattern[rowIndex][colIndex], true), true);

const matches = (square, pattern) => {
  const transpose = (sq) => sq.map((row, rowIndex) =>
    row.map((col, colIndex) => sq[colIndex][rowIndex]));

  const flipX = (sq) => sq.map((row, rowIndex) =>
    row.map((col, colIndex) => sq[sq.length - rowIndex - 1][colIndex]));

  const flipY = (sq) => sq.map((row, rowIndex) =>
    row.map((col, colIndex) => sq[rowIndex][row.length - colIndex - 1]));

  const transposedSquares = [square, transpose(square)];
  const xFlippedSquares = transposedSquares.map(sq => flipX(sq));
  const yFlippedSquares = transposedSquares.map(sq => flipY(sq));
  const xyFlippedSquares = xFlippedSquares.map(sq => flipY(sq));
  const allSquares = [...transposedSquares, ...xFlippedSquares, ...yFlippedSquares, ...xyFlippedSquares];

  return !!allSquares.find(sq => matchesExactly(sq, pattern));
}

module.exports = (square, fractal) => {
  if(matches(square, fractal.pattern)) {
    return fractal.enhancement;
  }
  return null;
}
