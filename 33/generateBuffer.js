module.exports = function*({ steps }) {
  const currentBuffer = [0];
  let currentPosition = 0;

  for (let i = 1; true; i++) {
    currentPosition = (currentPosition + steps + 1) % currentBuffer.length;
    currentBuffer.splice(currentPosition + 1, 0, i);
    yield { buffer: [...currentBuffer], currentElement: i };
  }
}
