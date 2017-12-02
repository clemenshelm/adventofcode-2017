module.exports = (matrix) => matrix
  .map(row => Math.max(...row) - Math.min(...row))
  .reduce((sum, num) => sum + num, 0);
