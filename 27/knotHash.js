module.exports = ({ list, position, length }) => {
  const endIndex = position + length;
  const endWindow = list.slice(position, endIndex);
  const startWindow = endWindow.length < length ? list.slice(0, endIndex % list.length) : [];

  const revWindow = [...endWindow, ...startWindow].reverse();

  const result = [...list];
  for (let i = 0; i < length; i++) {
    const resultIndex = (i + position) % result.length;
    result[resultIndex] = revWindow[i]
  }

  return result;
}
