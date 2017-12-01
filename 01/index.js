const [,, input,] = process.argv;

const sumOfSubsequentDigits = (digits) => `${digits}`.split('')
  .map((currentDigit, index, digitsArr) => {
    const nextIndex = (index + 1) % digitsArr.length;
    const nextDigit = digitsArr[nextIndex];
    return currentDigit === nextDigit ? parseInt(currentDigit, 10) : 0;
  })
  .reduce((sum, i) => sum + i, 0);

module.exports = { sumOfSubsequentDigits };

console.log(sumOfSubsequentDigits(input));
