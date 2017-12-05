module.exports = ({ index, offsets }) => {
  const newIndex = index + offsets[index];
  const newOffsets = [...offsets];
  newOffsets[index]++;
  return { index: newIndex, offsets: newOffsets };
}
