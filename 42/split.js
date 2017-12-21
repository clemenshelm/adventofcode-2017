module.exports = (grid) => {
  const tilesLength = grid.length % 2 ? 3 : 2;
  const tilesPerDirection = grid.length / tilesLength;

  const segments = [];
  for (let y = 0; y < tilesPerDirection; y++) {
    for (let x = 0; x < tilesPerDirection; x++) {
      const segment = new Array(tilesLength).fill([]).map((_, rowIndex) =>
        grid[y * tilesLength + rowIndex].slice(x * tilesLength, (x + 1) * tilesLength));
      segments.push(segment)
    }
  }

  return segments;
}
