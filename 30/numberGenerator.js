module.exports = function* numberGenerator(seed, factor, multipleOf = 1) {
  let currentValue = seed;
  while(true) {
    currentValue = (currentValue * factor) % 2147483647;
    if (currentValue % multipleOf === 0) {
      yield currentValue;
    }
  }
}
