const wholeQuotient = (row) => row.sort((a, b) => a - b).reverse()
  // make all combinations
  .map((dividend, index, sortedRow) =>
    sortedRow.slice(index + 1).map(divisor => [dividend, divisor]))
  // flatten
  .reduce((flatArray, dividendCombination) => [...flatArray, ...dividendCombination], [])
  .find(([dividend, divisor]) => dividend % divisor === 0)
  .reduce((dividend, divisor) => dividend / divisor);

module.exports = (matrix) => matrix.map(wholeQuotient).reduce((sum, quotient) => sum + quotient, 0);
