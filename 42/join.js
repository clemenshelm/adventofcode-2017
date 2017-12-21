module.exports = (segments) => {
  const numSegments = segments.length;
  const segmentsPerDimension = Math.sqrt(numSegments);
  const segmentLength = segments[0].length;
  const gridLength = segmentsPerDimension * segmentLength;

  const grid = new Array(gridLength).fill([]).map((_, rowIndex) => {
    const firstIndex = Math.floor(rowIndex / segmentLength) * segmentsPerDimension;
    const relevantSegments = segments.slice(firstIndex, firstIndex + segmentsPerDimension);
    return relevantSegments
      .map(segment => segment[rowIndex % segmentLength])
      .reduce((arr, segmentPart) => [...arr, ...segmentPart]);
  });

  return grid;
}
