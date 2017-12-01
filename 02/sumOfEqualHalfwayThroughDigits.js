module.exports = (digits) => `${digits}`.split('')
  .map((currentDigit, index, digitsArr) => {
    const { length } = digitsArr;
    const nextIndex = (index + length / 2) % length;
    const nextDigit = digitsArr[nextIndex];
    return currentDigit === nextDigit ? parseInt(currentDigit, 10) : 0;
  })
  .reduce((sum, i) => sum + i, 0);
