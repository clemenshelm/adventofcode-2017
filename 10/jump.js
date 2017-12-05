module.exports = ({ index, offsets }) => {
  const currentIndex = index;
  index += offsets[index];
  const offsetMod = offsets[currentIndex] < 3 ? 1 : -1;
  offsets[currentIndex] += offsetMod;
  return { index, offsets };
}
