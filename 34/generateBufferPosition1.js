module.exports = function*({ steps }) {
  let currentPosition = 0;
  let pos1 = null;

  for (let i = 1; true; i++) {
    currentPosition = (currentPosition + steps + 1) % i;
    if (currentPosition + 1 === 1) {
      pos1 = i;
    }
    yield { pos1, currentElement: i };
  }
}
