module.exports = function* numberGenerator(seed, factor) {
  let currentValue = seed;
  while(true) {
    currentValue = (currentValue * factor) % 2147483647;
    yield currentValue;
  }
}
